import { Box } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import Certificate from "components/Certificate";
import { useActiveWeb3React } from "hooks/useActiveWeb3React";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { getOwnerCerts } from "utils/getCertContract";

const Users = () => {
  const { address } = useParams();
  const { library } = useActiveWeb3React();

  const [certs, setCerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (library && address) {
      getOwnerCerts(library, address)
        .then((certs) => {
          setCerts(certs);
          setLoading(false);
        })
        .catch((err) => {
          !!certs?.length && setCerts([]);
          setLoading(false);
          console.error(err);
        });
    }
  }, [library, address]);

  return loading ? (
    <Box textAlign="center">
      <Spinner />
    </Box>
  ) : address ? (
    <Box>
      {certs.map((cert, idx) => (
        <Certificate cert={cert} key={idx} />
      ))}
    </Box>
  ) : null;
};

export default Users;
