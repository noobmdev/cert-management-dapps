import { Box, Grid, HStack, VStack } from "@chakra-ui/layout";
import React from "react";
import QRCode from "react-qr-code";
import CertMarkImg from "assets/images/cert-mark.png";
import SignatureImg from "assets/images/signature.png";
import CertBgImg1 from "assets/images/cert-bg-1.png";
import CertBgImg2 from "assets/images/cert-bg-2.png";
import { Image } from "@chakra-ui/image";

const Certificate = () => {
  return (
    <HStack justify="center" my="16">
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

            <Box fontSize="xl">
              Business English Translation and Interpretation
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
            <Box borderBottom="1px dotted">Nguyen Van A</Box>

            <Box>Gender:</Box>
            <Box borderBottom="1px dotted">Female</Box>

            <Box>Date of birth:</Box>
            <Box borderBottom="1px dotted">2021-01-01</Box>

            <Box>Graduate grade:</Box>
            <Box borderBottom="1px dotted">A</Box>

            <Box>Mode of Study:</Box>
            <Box borderBottom="1px dotted">Full-time</Box>
          </Grid>

          <HStack justify="space-between" align="flex-start">
            <Box>
              <Box>Reg. No: 15</Box>
              <QRCode
                value="http://localhost:3000/users/0xe9dd3CC74B6d57E8B27D4bF6cA96ffAeBEF4205e"
                size={120}
              />
            </Box>

            <Box textAlign="right">
              <Box>Ho Chi Minh, 2021-01-01</Box>
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

            <Box fontSize="xl">Phiên dịch tiếng anh thương mại</Box>
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
            <Box borderBottom="1px dotted">Nguyen Van A</Box>

            <Box>Giới tính:</Box>
            <Box borderBottom="1px dotted">Nữ</Box>

            <Box>Ngày, tháng, năm sinh:</Box>
            <Box borderBottom="1px dotted">2021-01-01</Box>

            <Box>Xếp loại tốt nghiệp:</Box>
            <Box borderBottom="1px dotted">A</Box>

            <Box>Hình thức đào tạo:</Box>
            <Box borderBottom="1px dotted">Chính quy</Box>
          </Grid>

          <HStack justify="space-between" align="flex-start">
            <Box>
              <Box>Số hiệu đăng ký: 15</Box>
              <QRCode
                value="http://localhost:3000/users/0xe9dd3CC74B6d57E8B27D4bF6cA96ffAeBEF4205e"
                size={120}
              />
            </Box>

            <Box textAlign="right">
              <Box>Ho Chi Minh, 2021-01-01</Box>
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
  );
};

export default Certificate;
