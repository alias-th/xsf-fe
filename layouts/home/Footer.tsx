"use client";

import CustomButton from "@/components/Button";
import Center from "@/components/Center";
import { Typography } from "@/components/Typography";
import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  height: 100%;
  grid-column: 1 / -1;
  background-color: var(--color-11);
  margin: 0px auto;
  text-align: center;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const ContentSection = styled.div`
  display: flex;
  width: 100%;
  /* height: 100%; */
  max-width: 1060px;
  margin: 0px auto;
  gap: 160px;
  justify-content: space-between;
  padding: 40px 0px 0px 0px;
`;

const Social = styled.div`
  margin-top: 76px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FaceBookIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_213_1041)">
        <path
          d="M15 29.9667C23.2843 29.9667 30 23.2584 30 14.9833C30 6.70827 23.2843 0 15 0C6.71573 0 0 6.70827 0 14.9833C0 23.2584 6.71573 29.9667 15 29.9667Z"
          fill="#E13B30"
        />
        <path
          d="M12.6 10.9501L12.5833 29.7835C12.5833 29.7835 14.7 30.2668 17.25 29.7835L17.2333 19.3335L17.3 11.5668C17.3 11.5668 17.4333 10.0501 18.9833 9.9668L21.55 9.83347V6.13347C21.55 6.13347 17.85 5.33347 15.4333 6.43347C13.0166 7.53347 12.7166 9.83347 12.6 10.9501Z"
          fill="white"
        />
        <path
          d="M8.79999 14.9L8.81665 19.35L20.7667 19.3333L21.4167 14.8833L8.79999 14.9Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_213_1041">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const InstagramIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 30C22.7843 30 29.5 23.2843 29.5 15C29.5 6.71573 22.7843 0 14.5 0C6.21573 0 -0.5 6.71573 -0.5 15C-0.5 23.2843 6.21573 30 14.5 30Z"
        fill="#E13B30"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.85 8.46663C9.21817 8.46663 7.89998 9.78482 7.89998 11.4166V18.6666C7.89998 20.2984 9.21817 21.6166 10.85 21.6166H18.1C19.7318 21.6166 21.05 20.2984 21.05 18.6666V11.4166C21.05 9.78482 19.7318 8.46663 18.1 8.46663H10.85ZM6.56665 11.4166C6.56665 9.04844 8.48179 7.1333 10.85 7.1333H18.1C20.4682 7.1333 22.3833 9.04844 22.3833 11.4166V18.6666C22.3833 21.0348 20.4682 22.95 18.1 22.95H10.85C8.48179 22.95 6.56665 21.0348 6.56665 18.6666V11.4166Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.5 12.2524C12.964 12.2524 11.7189 13.4975 11.7189 15.0335C11.7189 16.5695 12.964 17.8146 14.5 17.8146C16.036 17.8146 17.2811 16.5695 17.2811 15.0335C17.2811 13.4975 16.036 12.2524 14.5 12.2524ZM10.4811 15.0335C10.4811 12.814 12.2804 11.0146 14.5 11.0146C16.7196 11.0146 18.5189 12.814 18.5189 15.0335C18.5189 17.2531 16.7196 19.0524 14.5 19.0524C12.2804 19.0524 10.4811 17.2531 10.4811 15.0335Z"
        fill="white"
      />
      <path
        d="M18.7667 11.6999C19.3005 11.6999 19.7333 11.2671 19.7333 10.7333C19.7333 10.1994 19.3005 9.7666 18.7667 9.7666C18.2328 9.7666 17.8 10.1994 17.8 10.7333C17.8 11.2671 18.2328 11.6999 18.7667 11.6999Z"
        fill="white"
      />
    </svg>
  );
};

const TiktokIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15Z"
        fill="#E13B30"
      />
      <path
        d="M19.1422 9.1875C18.4338 8.37461 18.0434 7.33066 18.0437 6.25H14.8414V19.1667C14.8167 19.8657 14.5231 20.5277 14.0224 21.0135C13.5217 21.4992 12.8531 21.7707 12.1572 21.7708C10.6856 21.7708 9.46269 20.5625 9.46269 19.0625C9.46269 17.2708 11.183 15.9271 12.9552 16.4792V13.1875C9.37978 12.7083 6.25 15.5 6.25 19.0625C6.25 22.5312 9.11033 25 12.1468 25C15.401 25 18.0437 22.3438 18.0437 19.0625V12.5104C19.3422 13.4478 20.9013 13.9507 22.5 13.9479V10.7292C22.5 10.7292 20.5517 10.8229 19.1422 9.1875Z"
        fill="white"
      />
    </svg>
  );
};

const Footer = () => {
  const addressText = `เอ็กซ์เซอร์เฟส 53 ซอย สุขุมวิท 62, บางจาก,\nพระโขนง, กรุงเทพฯ 10260`;
  return (
    <Wrapper>
      <Container>
        <HeaderSection>
          <Image
            src="/assets/logo-white.png"
            alt="Logo"
            width={180}
            height={35}
            loading="eager"
          />
          <Typography $variant="p-sm" $color="var(--white-1)">
            เมื่อวัสดุปิดผิว การตกแต่ง มารวมกันในแพตฟอร์มที่เน้นการออกแบบ
          </Typography>
        </HeaderSection>
        <ContentSection>
          <Center
            $direction="column"
            $gap="20px"
            $justifyContent="flex-start"
            $alignItems="flex-start"
            // $height="100%"
          >
            <Typography $variant="p-sm" $color="var(--white-1)">
              เกี่ยวกับเรา
            </Typography>
            <Typography $variant="p-sm" $color="var(--color-12)">
              สมัครงาน
            </Typography>
            <Typography $variant="p-sm" $color="var(--color-12)">
              คำถามที่พบบ่อย
            </Typography>
          </Center>

          <Center
            $direction="column"
            $gap="20px"
            $justifyContent="flex-start"
            $alignItems="flex-start"
            $height="100%"
          >
            <Typography $variant="p-sm" $color="var(--white-1)">
              ติดต่อเรา
            </Typography>
            <Typography $variant="p-sm" $color="var(--color-12)" $whiteSpace>
              {addressText}
            </Typography>

            <Center $gap="8px">
              <Center $gap="4px">
                <Typography $variant="p-sm" $color="var(--white-1)">
                  อีเมล:
                </Typography>
                <Typography $variant="p-sm" $color="var(--color-12)">
                  support@xsurface.com
                </Typography>
              </Center>

              <Center $gap="4px">
                <Typography $variant="p-sm" $color="var(--white-1)">
                  เบอร์:
                </Typography>
                <Typography $variant="p-sm" $color="var(--color-12)">
                  +66 65-656-288
                </Typography>
              </Center>
            </Center>
          </Center>

          <Center
            $direction="column"
            $gap="20px"
            $justifyContent="flex-start"
            $alignItems="flex-start"
            $height="100%"
          >
            <Typography $variant="p-sm" $color="var(--white-1)">
              สมัครง่ายๆ ก็ลงขายกับเราได้เลย ฟรี ไม่มีค่าใช้จ่าย
            </Typography>
            <CustomButton
              $width="295px"
              $height="37px"
              $backgroundColor="var(--color-7)"
              $borderRadius="20px"
            >
              <Typography
                $variant="p-sm"
                $color="var(--white-1)"
                $fontFamily="var(--font-prompt)"
              >
                ลงทะเบียนสินค้ากับเรา
              </Typography>
            </CustomButton>
          </Center>
        </ContentSection>

        <Social>
          <Center $gap="20px">
            <FaceBookIcon />
            <InstagramIcon />
            <TiktokIcon />
          </Center>
          <Center $gap="8px">
            <Typography $variant="p-sm" $color="var(--color-12)">
              © 2021 . Copyright of
            </Typography>
            <Typography $variant="p-sm" $color="var(--white-1)">
              XSURFACE Co. , Ltd.
            </Typography>
          </Center>

          <Center $gap="20px">
            <Typography $variant="p-sm" $color="var(--color-12)">
              นโยบายความเป็นส่วนตัว
            </Typography>
            <Typography $variant="p-sm" $color="var(--color-12)">
              ข้อกำหนด และนโยบาย
            </Typography>
          </Center>
        </Social>
      </Container>
    </Wrapper>
  );
};
export default Footer;
