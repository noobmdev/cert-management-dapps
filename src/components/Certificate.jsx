import { Box, Grid, HStack, VStack } from "@chakra-ui/layout";
import React from "react";
import QRCode from "react-qr-code";
import CertMarkImg from "assets/images/cert-mark.png";
import SignatureImg from "assets/images/signature.png";
import CertBgImg1 from "assets/images/cert-bg-1.png";
import CertBgImg2 from "assets/images/cert-bg-2.png";
import { Image } from "@chakra-ui/image";
import { GENDER, GRADUATE_GRADE, STUDY_MODES } from "configs";
import { formatDate } from "utils";
import { Button } from "@chakra-ui/button";

const translates = {
  gender: {
    [GENDER.MALE]: {
      en: "Male",
      vi: "Nam",
    },
    [GENDER.FEMALE]: {
      en: "Female",
      vi: "Nữ",
    },
  },
  graduateGrade: {
    [GRADUATE_GRADE.A]: {
      en: "A",
      vi: "Xuất sắc",
    },
    [GRADUATE_GRADE.B]: {
      en: "B",
      vi: "Giỏi",
    },
    [GRADUATE_GRADE.C]: {
      en: "C",
      vi: "Khá",
    },
    [GRADUATE_GRADE.D]: {
      en: "D",
      vi: "Trung bình",
    },
    [GRADUATE_GRADE.F]: {
      en: "F",
      vi: "Yếu",
    },
  },
  modeStudy: {
    [STUDY_MODES.fullTime]: {
      en: STUDY_MODES.fullTime,
      vi: "Chính quy",
    },
    [STUDY_MODES.partTime]: {
      en: STUDY_MODES.partTime,
      vi: "Không chính quy",
    },
    [STUDY_MODES.remoteFullTime]: {
      en: STUDY_MODES.remoteFullTime,
      vi: "Chính quy từ xa",
    },
    [STUDY_MODES.remotePartTime]: {
      en: STUDY_MODES.remotePartTime,
      vi: "Không chính quy từ xa",
    },
  },
};

const Certificate = ({ cert }) => {
  return (
    <Box my="16">
      <HStack justify="center">
        <HStack flex="1" spacing="2" maxW="90em">
          <VStack
            align="stretch"
            flex="1"
            p="6"
            border="6px solid"
            spacing="8"
            pos="relative"
          >
            <Box textAlign="center" fontWeight="semibold">
              <Box textTransform="uppercase">Socialist Republic of Vietnam</Box>
              <Box>Independence - Freedom - Happiness</Box>
            </Box>

            <Box textAlign="center" fontWeight="extrabold" fontSize="2xl">
              <Box>THE REFACTOR OF</Box>
              <Box>INTERNATIONAL COLLEGE HO CHI MINH CITY</Box>
              <Box>has conferred</Box>
            </Box>

            <Box textAlign="center" fontWeight="extrabold">
              <Box fontSize="2xl">ADVANCED DIPLOMA</Box>

              <Box fontSize="xl" textTransform="uppercase">
                {cert.cert?.specializedTraining}
              </Box>
            </Box>

            <Grid
              templateColumns="12em 1fr"
              spacing="2"
              align="stretch"
              fontWeight="bold"
              gap="2"
              pr="24"
            >
              <Box>Upon(Mr, Ms):</Box>
              <Box borderBottom="1px dotted">{cert.name}</Box>

              <Box>Gender:</Box>
              <Box borderBottom="1px dotted">
                {translates.gender[cert.gender]?.en}
              </Box>

              <Box>Date of birth:</Box>
              <Box borderBottom="1px dotted">{cert.dateOfBirth}</Box>

              <Box>Graduate grade:</Box>
              <Box borderBottom="1px dotted">
                {translates.graduateGrade[cert.graduateGrade]?.en}
              </Box>

              <Box>Mode of Study:</Box>
              <Box borderBottom="1px dotted">
                {cert.cert?.modeStudy &&
                  translates.modeStudy[cert.cert.modeStudy]?.en}
              </Box>
            </Grid>

            <HStack justify="space-between" align="flex-start">
              <Box>
                {/* <Box>Reg. No: 15</Box> */}
                <QRCode
                  value={`${process.env.REACT_APP_FRONTEND_URL}/users/${cert.owner}`}
                  size={120}
                />
              </Box>

              <Box textAlign="right">
                <Box>
                  {cert.mintWhere}, {formatDate(cert.date)}
                </Box>
                <Box fontWeight="semibold">THE REFACTOR</Box>
                <Box pos="relative">
                  <Image boxSize={32} opacity="0.5" src={CertMarkImg} />
                  <Image
                    pos="absolute"
                    top="0"
                    right="0"
                    boxSize={24}
                    src={SignatureImg}
                  />
                </Box>
                <Box fontWeight="semibold">PhS. Nguyen Van A</Box>
              </Box>
            </HStack>

            <Image
              boxSize={96}
              src={CertBgImg1}
              pos="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              opacity="0.2"
            />
          </VStack>

          <VStack
            align="stretch"
            flex="1"
            p="6"
            border="6px solid"
            spacing="8"
            pos="relative"
          >
            <Box textAlign="center" fontWeight="semibold">
              <Box textTransform="uppercase">
                Cộng hòa xã hội chủ nghĩa Việt Nam
              </Box>
              <Box>Độc lập - Tự do - Hạnh phúc</Box>
            </Box>

            <Box textAlign="center" fontWeight="extrabold" fontSize="2xl">
              <Box>HIỆU TRƯỞNG</Box>
              <Box>TRƯỜNG CAO ĐẲNG QUỐC TẾ HỒ CHÍ MINH</Box>
              <Box>cấp</Box>
            </Box>

            <Box textAlign="center" fontWeight="extrabold">
              <Box fontSize="2xl">BẰNG TỐT NGHIỆP</Box>

              <Box fontSize="xl" textTransform="uppercase">
                {cert.cert?.specializedTraining}
              </Box>
            </Box>

            <Grid
              templateColumns="12em 1fr"
              spacing="2"
              align="stretch"
              fontWeight="bold"
              gap="2"
              pr="24"
            >
              <Box>Cho:</Box>
              <Box borderBottom="1px dotted">{cert.name}</Box>

              <Box>Giới tính:</Box>
              <Box borderBottom="1px dotted">
                {translates.gender[cert.gender]?.vi}
              </Box>

              <Box>Ngày, tháng, năm sinh:</Box>
              <Box borderBottom="1px dotted">{cert.dateOfBirth}</Box>

              <Box>Xếp loại tốt nghiệp:</Box>
              <Box borderBottom="1px dotted">
                {translates.graduateGrade[cert.graduateGrade]?.vi}
              </Box>

              <Box>Hình thức đào tạo:</Box>
              <Box borderBottom="1px dotted">
                {cert.cert?.modeStudy &&
                  translates.modeStudy[cert.cert.modeStudy]?.vi}
              </Box>
            </Grid>

            <HStack justify="space-between" align="flex-start">
              <Box>
                {/* <Box>Số hiệu đăng ký: 15</Box> */}
                <QRCode
                  value={`${process.env.REACT_APP_FRONTEND_URL}/users/${cert.owner}`}
                  size={120}
                />
              </Box>

              <Box textAlign="right">
                <Box>
                  {cert.mintWhere}, {formatDate(cert.date)}
                </Box>
                <Box fontWeight="semibold">HIỆU TRƯỞNG</Box>
                <Box pos="relative">
                  <Image boxSize={32} opacity="0.5" src={CertMarkImg} />
                  <Image
                    pos="absolute"
                    top="0"
                    right="0"
                    boxSize={24}
                    src={SignatureImg}
                  />
                </Box>
                <Box fontWeight="semibold">ThS. Nguyen Van A</Box>
              </Box>
            </HStack>

            <Image
              boxSize={96}
              src={CertBgImg2}
              pos="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              opacity="0.2"
            />
          </VStack>
        </HStack>
      </HStack>
      <Box textAlign="right" pt="2">
        <Button colorScheme="orange">Report</Button>
      </Box>
    </Box>
  );
};

export default Certificate;
