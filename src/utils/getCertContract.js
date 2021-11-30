import axios from "axios";

import { CERT_METHODS } from "configs";
import { callContract, getCertContract } from "hooks/useContract";
import { removeNumericKey } from "utils";

export const addCensor = async (library, account, args = []) => {
  if (!library || !account) return;
  const certContract = getCertContract(library, account);
  return callContract(certContract, CERT_METHODS.addCensor, args);
};

const getTotalCensor = async (library) => {
  if (!library) return;
  const certContract = getCertContract(library);
  return callContract(certContract, CERT_METHODS.totalCensors);
};

export const getCensors = async (library) => {
  if (!library) return;
  const certContract = getCertContract(library);
  const totalCensors = await getTotalCensor(library);
  return Promise.all(
    new Array(+totalCensors.toString()).fill("").map(async (_, idx) => {
      const censor = await callContract(certContract, CERT_METHODS.censors, [
        idx,
      ]);
      return removeNumericKey(censor);
    })
  );
};

export const addSpecializedTraining = async (library, account, args = []) => {
  if (!library || !account) return;
  const certContract = getCertContract(library, account);
  return callContract(certContract, CERT_METHODS.addSpecializedTraining, args);
};

export const getSpecializedTrainings = async (library) => {
  if (!library) return;
  const certContract = getCertContract(library);
  const specializedTrainings = await callContract(
    certContract,
    CERT_METHODS.getSpecializedTrainings
  );

  return specializedTrainings.map((e) => removeNumericKey(e));
};

export const addCertForm = async (library, account, args = []) => {
  if (!library || !account) return;
  const certContract = getCertContract(library, account);
  return callContract(certContract, CERT_METHODS.addCertForm, args);
};

export const getCertForms = async (library) => {
  if (!library) return;
  const certContract = getCertContract(library);
  const certForms = await callContract(certContract, CERT_METHODS.getCertForms);
  return Promise.all(
    certForms.map(async (url, idx) => {
      const [data, total, minted] = await Promise.all([
        axios.get(url).then((res) => res.data),
        callContract(certContract, CERT_METHODS.totalCertForm, [idx]),
        callContract(certContract, CERT_METHODS.certFormMinted, [idx]),
      ]);
      return { ...data, total, minted };
    })
  );
};

export const addCert = async (library, account, args = []) => {
  if (!library || !account) return;
  const certContract = getCertContract(library, account);
  return callContract(certContract, CERT_METHODS.addCert, args);
};
