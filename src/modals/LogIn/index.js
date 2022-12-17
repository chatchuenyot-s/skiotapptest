import React from "react";
import ModalProvider from "react-modal";

import {
  Column,
  Stack,
  Slider,
  Row,
  Img,
  Text,
  Line,
  Button,
  Input,
  PagerIndicator,
} from "components";
import { useNavigate } from "react-router-dom";

const LogInModal = (props) => {
  const navigate = useNavigate();

  function handleNavigate12() {
    navigate("/home1");
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[74%] sm:w-[100%] flex-col flex"
        overlayClassName="bg-black_900_b2 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto">
          <Stack className="h-[800px] max-w-[1060px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              slidesToShow={1}
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="w-[100%]"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:p-[15px] md:p-[54px] p-[79px] rounded-radius15">
                    <Column className="flex flex-col sm:mx-[0] sm:pb-[25px] md:pb-[32px] pb-[47px] sm:px-[0] sm:w-[100%] w-[40%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                        <Img
                          src="images/img_location.svg"
                          className="flex-shrink-0 sm:h-[12px] md:h-[16px] h-[22px] max-w-[100%] sm:w-[11px] md:w-[15px] w-[22px]"
                          alt="location"
                        />
                        <Text
                          className="flex-grow sm:ml-[4px] md:ml-[6px] ml-[9px] text-black_900"
                          variant="body1"
                        >
                          Educatsy
                        </Text>
                      </Row>
                      <Text
                        className="font-metropolis leading-[50.00px] md:leading-[normal] sm:leading-[normal] mt-[12px] sm:mt-[6px] md:mt-[8px] text-black_900 w-[100%]"
                        as="h3"
                        variant="h3"
                      >
                        Welcome to
                        <br />
                        Educatsy Online
                        <br />
                        Learning Platform
                      </Text>
                      <Img
                        src="images/img_group_322X325.svg"
                        className="max-w-[100%] ml-[2px] sm:mt-[19px] md:mt-[24px] mt-[36px] sm:w-[100%] w-[92%]"
                        alt="Group"
                      />
                    </Column>
                    <Line className="bg-gradient  sm:h-[342px] md:h-[442px] h-[641px] sm:ml-[46px] md:ml-[59px] ml-[87px] mt-[1px] w-[1px]" />
                    <Column className="flex flex-col items-center md:ml-[55px] ml-[80px] sm:mx-[0] sm:pb-[2px] md:pb-[3px] pb-[5px] sm:px-[0] sm:w-[100%] w-[42%]">
                      <Button
                        className="flex items-center justify-center min-w-[92%] text-center w-[max-content]"
                        leftIcon={
                          <div className="w-[40px] h-[40px] mr-[8px] sm:mr-[4px] sm:h-[22px] sm:w-[21px] md:mr-[5px] md:h-[28px] md:w-[27px] bg-red_600 text-center rounded-radius7 flex justify-center items-center">
                            <Img
                              src="images/img_google.svg"
                              className="text-center"
                              alt="google"
                            />
                          </div>
                        }
                        size="md"
                        variant="OutlineGray300"
                      >
                        <div className="bg-transparent cursor-pointer font-normal not-italic text-[16px] text-gray_700">
                          Sign in with google
                        </div>
                      </Button>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mt-[14px] md:mt-[19px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                        <div className="bg-gray_700 h-[1px] sm:my-[3px] md:my-[4px] my-[7px] w-[8%]"></div>
                        <Text
                          className="font-normal ml-[11px] sm:ml-[5px] md:ml-[7px] not-italic text-gray_700 w-[auto]"
                          variant="body5"
                        >
                          Or sign in with your email
                        </Text>
                        <div className="bg-gray_700 h-[1px] ml-[10px] sm:ml-[5px] md:ml-[6px] sm:my-[3px] md:my-[4px] my-[7px] w-[8%]"></div>
                      </Row>
                      <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%]">
                        <Column className="flex flex-col items-center justify-start sm:pt-[3px] md:pt-[4px] pt-[7px] w-[100%]">
                          <Column className="flex flex-col justify-start w-[100%]">
                            <Text
                              className="font-medium text-gray_901 w-[auto]"
                              variant="body5"
                            >
                              Email
                            </Text>
                            <Input
                              className="font-normal not-italic p-[0] text-[16px] placeholder:text-gray_700 text-gray_700 w-[100%]"
                              wrapClassName="flex md:mt-[7px] mt-[11px] sm:mt-[5px] w-[100%]"
                              name="email One"
                              placeholder="bill.sanders@example.com"
                              prefix={
                                <Img
                                  src="images/img_message_24_outline.svg"
                                  className="ml-[2px] mr-[15px] sm:mr-[7px] md:mr-[10px] my-[auto]"
                                  alt="message / 24 / Outline"
                                />
                              }
                              shape="RoundedBorder10"
                              size="sm"
                              variant="OutlineGray300"
                            ></Input>
                          </Column>
                          <Column className="flex flex-col justify-start sm:mt-[14px] md:mt-[18px] mt-[27px] w-[100%]">
                            <Text
                              className="font-medium text-gray_901 w-[auto]"
                              variant="body5"
                            >
                              Password
                            </Text>
                            <Input
                              className="font-normal not-italic p-[0] text-[16px] placeholder:text-gray_700 text-gray_700 w-[100%]"
                              wrapClassName="flex md:mt-[7px] mt-[11px] sm:mt-[5px] w-[100%]"
                              name="password One"
                              placeholder="*************"
                              prefix={
                                <Img
                                  src="images/img_lock.svg"
                                  className="ml-[2px] mr-[15px] sm:mr-[7px] md:mr-[10px] my-[auto]"
                                  alt="lock"
                                />
                              }
                              suffix={
                                <Img
                                  src="images/img_eye.svg"
                                  className="ml-[35px] mr-[2px] sm:ml-[18px] md:ml-[24px] my-[auto]"
                                  alt="eye"
                                />
                              }
                              shape="RoundedBorder10"
                              size="sm"
                              variant="OutlineGray300"
                            ></Input>
                          </Column>
                        </Column>
                        <Button
                          className="common-pointer cursor-pointer font-medium sm:mt-[15px] md:mt-[20px] mt-[30px] text-[16px] text-center text-white_A700 w-[100%]"
                          onClick={handleNavigate12}
                          size="md"
                        >
                          Sign In
                        </Button>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] sm:px-[0] py-[3px] w-[100%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                            <Img
                              src="images/img_television.svg"
                              className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="television"
                            />
                            <Text
                              className="flex-grow font-normal mb-[2px] ml-[10px] sm:ml-[5px] md:ml-[6px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_700"
                              variant="body5"
                            >
                              Keep me signed in
                            </Text>
                          </Row>
                          <Text
                            className="font-normal mb-[2px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_700 w-[auto]"
                            variant="body5"
                          >
                            Forgot Password?
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                          <Text
                            className="font-medium mb-[1px] text-gray_700 w-[auto]"
                            variant="body5"
                          >
                            Don’t have an account?
                          </Text>
                          <Text
                            className="font-medium ml-[4px] mt-[1px] text-red_300 w-[auto]"
                            variant="body5"
                          >
                            Sign Up
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                </React.Fragment>
              ))}
              Indicator={({ isActive }) => {
                if (isActive) {
                  return (
                    <div className="inline-block cursor-pointer rounded-radius50 w-[10px] h-[10px] border-red_300 border border-solid bg-white_A700 relative" />
                  );
                }
                return (
                  <div
                    className="inline-block cursor-pointer rounded-radius50 w-[8px] h-[8px] bg-deep_orange_400_7f relative"
                    role="button"
                    tabIndex={0}
                  />
                );
              }}
            />
            <PagerIndicator
              className="absolute bottom-[13%] h-[10px] left-[23%] w-[max-content]"
              count={3}
              activeCss="inline-block cursor-pointer rounded-radius50 w-[10px] h-[10px] border-red_300 border border-solid bg-white_A700 relative"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-radius50 w-[8px] h-[8px] bg-deep_orange_400_7f relative"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block md:mx-[1px] mx-[2.50px] sm:mx-[1px]"
              unselectedWrapperCss="inline-block md:mx-[1px] mx-[2.50px] sm:mx-[1px]"
            />
          </Stack>
        </div>
      </ModalProvider>
    </>
  );
};

export default LogInModal;
