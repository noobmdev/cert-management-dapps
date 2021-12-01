export const CERT_ADDRESS = "0x71EdD119F771b3Ed10B64cfd1bfF34d64995289f";

export const CERT_METHODS = {
  getOwnerRoles: "getOwnerRoles",
  addCensor: "addCensor",
  totalCensors: "totalCensors",
  censors: "censors",
  addSpecializedTraining: "addSpecializedTraining",
  getSpecializedTrainings: "getSpecializedTrainings",
  addCertForm: "addCertForm",
  getCertForms: "getCertForms",
  totalCertForm: "totalCertForm",
  certFormMinted: "certFormMinted",
  addCert: "addCert",
  getCertsPending: "getCertsPending",
  approveCert: "approveCert",
  balanceOf: "balanceOf",
  tokenOfOwnerByIndex: "tokenOfOwnerByIndex",
  tokenURI: "tokenURI",
};

export const ROLES = {
  ADMIN: {
    name: "admin",
    value: 0,
  },
  CENSOR: {
    name: "censors",
    value: 1,
  },
  USER: {
    name: "users",
    value: 2,
  },
};

export const GRADUATE_GRADE = {
  F: "F",
  D: "D",
  C: "C",
  B: "B",
  A: "A",
};

export const STUDY_MODES = {
  fullTime: "Full-time",
  partTime: "Part-time",
  remoteFullTime: "Remote Full-time",
  remotePartTime: "Remote Part-time",
};

export const GENDER = {
  MALE: 0,
  FEMALE: 1,
};

export const CERT_STATUSES = {
  DEFAULT: 0,
  PENDING: 1,
  REPORTED: 2,
};
