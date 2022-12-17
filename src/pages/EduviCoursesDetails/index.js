import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  SelectBox,
  Button,
  List,
  Grid,
  Input,
} from "components";
import { useNavigate } from "react-router-dom";

const EduviCoursesDetailsPage = () => {
  const navigate = useNavigate();

  function handleNavigate5() {
    navigate("/eduvicourses");
  }
  function handleNavigate6() {
    navigate("/eduvishop");
  }
  function handleNavigate7() {
    navigate("/login");
  }
  function handleNavigate8() {
    navigate("/eduvicoursespricing");
  }
  function handleNavigate15() {
    navigate("/allmentors");
  }

  return (
    <>
      <Column className="bg-gray_100 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <header className="w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1440px] ml-[auto] mr-[auto] md:p-[15px] p-[22px] sm:pl-[15px] sm:pr-[15px] sm:px-[15px] sm:py-[11px] w-[100%]">
              <Row className="header-row w-[13%] sm:w-[100%] sm:mx-[0] sm:px-[0] flex-row flex">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center">
                  <Img
                    src="images/img_location.svg"
                    className="flex-shrink-0 sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[30px]"
                    alt="location"
                  />
                  <Text
                    className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-black_900"
                    as="h4"
                    variant="h4"
                  >
                    Educatsy
                  </Text>
                </Row>
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap sm:hidden md:ml-[37px] ml-[54px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%] common-row-list">
                <ul className="flex flex-row items-center justify-center sm:hidden">
                  <li className="w-[auto] sm:w-[100%] sm:my-[10px] my-[2px]">
                    <a
                      href={"javascript:"}
                      className="common-pointer cursor-pointer font-medium text-[16px] text-gray_901"
                      onClick={handleNavigate6}
                      rel="noreferrer"
                    >
                      Shop
                    </a>
                  </li>
                  <li className="w-[22%] ml-[25px] sm:w-[100%] sm:my-[10px] sm:mx-[0] md:ml-[17px]">
                    <SelectBox
                      className="font-medium text-[16px] text-gray_901"
                      placeholderClassName="text-gray_901"
                      name="forkindergarten"
                      placeholder="For Kindergarten"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_901.svg"
                          className="w-[24px] h-[24px] mr-[0] sm:h-[13px] sm:w-[12px] md:h-[17px] md:w-[16px] max-w-[100%]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </li>
                  <li className="w-[21%] ml-[24px] sm:w-[100%] sm:my-[10px] sm:mx-[0] md:ml-[16px]">
                    <SelectBox
                      className="font-medium text-[16px] text-gray_901"
                      placeholderClassName="text-gray_901"
                      name="forhighschool"
                      placeholder="For High School"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_901.svg"
                          className="w-[24px] h-[24px] mr-[0] sm:h-[13px] sm:w-[12px] md:h-[17px] md:w-[16px] max-w-[100%]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </li>
                  <li className="w-[16%] ml-[24px] sm:w-[100%] sm:my-[10px] sm:mx-[0] md:ml-[16px]">
                    <SelectBox
                      className="font-medium text-[16px] text-gray_901"
                      placeholderClassName="text-gray_901"
                      name="forcollege"
                      placeholder="For College"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_901.svg"
                          className="w-[24px] h-[24px] mr-[0] sm:h-[13px] sm:w-[12px] md:h-[17px] md:w-[16px] max-w-[100%]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </li>
                  <li className="w-[13%] ml-[24px] sm:w-[100%] sm:my-[10px] sm:mx-[0] md:ml-[16px]">
                    <SelectBox
                      className="common-pointer font-medium text-[16px] text-gray_901"
                      onClick={handleNavigate5}
                      placeholderClassName="text-gray_901"
                      name="courses"
                      placeholder="Courses"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_901.svg"
                          className="w-[24px] h-[24px] mr-[0] sm:h-[13px] sm:w-[12px] md:h-[17px] md:w-[16px] max-w-[100%]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </li>
                  <li className="w-[auto] ml-[24px] sm:ml-[12px] sm:w-[100%] sm:my-[10px] md:ml-[16px] my-[2px]">
                    <a
                      href={"javascript:"}
                      className="common-pointer cursor-pointer font-medium text-[16px] text-gray_901"
                      onClick={handleNavigate15}
                      rel="noreferrer"
                    >
                      Mentors
                    </a>
                  </li>
                </ul>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap sm:hidden items-end justify-center md:ml-[37px] ml-[54px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                <Text
                  className="flex-grow font-medium mb-[4px] sm:mt-[3px] md:mt-[4px] mt-[7px] text-gray_901"
                  variant="body5"
                >
                  Cart (0)
                </Text>
                <Img
                  src="images/img_bag.svg"
                  className="flex-shrink-0 sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] ml-[10px] sm:ml-[5px] md:ml-[6px] sm:w-[15px] md:w-[20px] w-[30px]"
                  alt="bag"
                />
              </Row>
              <Row
                className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap sm:hidden items-end justify-center md:ml-[22px] ml-[32px] sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]"
                onClick={handleNavigate7}
              >
                <Text
                  className="flex-grow font-medium mb-[4px] sm:mt-[3px] md:mt-[4px] mt-[7px] text-gray_901"
                  variant="body5"
                >
                  My Account
                </Text>
                <Img
                  src="images/img_user_2.svg"
                  className="flex-shrink-0 sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] ml-[10px] sm:ml-[5px] md:ml-[6px] sm:w-[15px] md:w-[20px] w-[30px]"
                  alt="user"
                />
              </Row>
            </Row>
          </header>
          <Column className="flex flex-col items-center justify-start sm:mt-[26px] md:mt-[34px] mt-[50px] w-[100%]">
            <Row className="bg-gray_201 flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1280px] ml-[auto] mr-[auto] sm:mx-[0] sm:p-[15px] md:p-[17px] p-[25px] sm:pl-[15px] sm:pr-[15px] rounded-radius20 w-[100%]">
              <Column className="flex flex-col justify-start md:ml-[3px] ml-[5px] sm:mx-[0] my-[4px] sm:px-[0] sm:w-[100%] w-[63%]">
                <Text
                  className="font-medium text-black_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body5"
                >
                  Home | Courses | Course Details
                </Text>
                <Column className="flex flex-col justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-start md:p-[135px] sm:p-[15px] p-[197px] rounded-radius20 w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_group7667.png')",
                    }}
                  >
                    <Button
                      className="flex sm:h-[32px] md:h-[42px] h-[60px] items-center justify-center mb-[1px] rounded-radius50 sm:w-[31px] md:w-[41px] w-[60px]"
                      size="2xlIcn"
                      variant="icbFillRed300"
                    >
                      <Img
                        src="images/img_play.svg"
                        className="h-[16px] sm:h-[9px] md:h-[12px] flex items-center justify-center"
                        alt="play"
                      />
                    </Button>
                  </Column>
                  <Text
                    className="sm:mt-[15px] md:mt-[19px] mt-[29px] text-black_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Maths - for Standard 3 Students | Episode 2
                  </Text>
                </Column>
              </Column>
              <Column className="flex flex-col justify-start md:ml-[46px] ml-[68px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                <Text className="text-black_900 w-[auto]" as="h5" variant="h5">
                  Course Playlists
                </Text>
                <Column className="flex flex-col items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
                  <List
                    className="md:gap-[11px] gap-[16px] sm:gap-[8px] grid min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-row flex-row md:flex-wrap sm:flex-wrap items-center hover:my-[0] my-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius10 hover:shadow-bs1 w-[100%]">
                      <Img
                        src="images/img_image_50X80.png"
                        className="max-w-[100%] rounded-radius5 w-[23%]"
                        alt="Image"
                      />
                      <Column className="flex flex-col ml-[10px] md:ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                        <Text
                          className="font-semibold text-black_900 w-[auto]"
                          variant="body4"
                        >
                          Maths - Introduction
                        </Text>
                        <Text
                          className="mt-[3px] text-deep_orange_400 w-[auto]"
                          variant="body6"
                        >
                          1:57
                        </Text>
                      </Column>
                    </Row>
                    <Row className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-row flex-row md:flex-wrap sm:flex-wrap items-center hover:my-[0] my-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius10 hover:shadow-bs1 w-[100%]">
                      <Img
                        src="images/img_image_50X80.png"
                        className="max-w-[100%] rounded-radius5 w-[23%]"
                        alt="Image One"
                      />
                      <Column className="flex flex-col ml-[10px] md:ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                        <Text
                          className="font-semibold text-black_900 w-[auto]"
                          variant="body4"
                        >
                          Maths - for Standard 3 St..
                        </Text>
                        <Text
                          className="mt-[3px] text-deep_orange_400 w-[auto]"
                          variant="body6"
                        >
                          5:43
                        </Text>
                      </Column>
                    </Row>
                    <Row className="bg-white_A700_87 hover:cursor-pointer hover:flex flex hover:flex-row flex-row md:flex-wrap sm:flex-wrap items-center hover:my-[0] my-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius10 hover:shadow-bs1 w-[100%]">
                      <Column
                        className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] md:p-[11px] sm:p-[15px] p-[16px] rounded-radius5 sm:w-[100%] w-[23%]"
                        style={{
                          backgroundImage: "url('images/img_image_50X80.png')",
                        }}
                      >
                        <Button
                          className="flex sm:h-[10px] md:h-[13px] h-[18px] items-center justify-center rounded-radius50 md:w-[12px] w-[18px] sm:w-[9px]"
                          size="smIcn"
                          variant="icbFillWhiteA700"
                        >
                          <Img
                            src="images/img_lock_18X18.svg"
                            className="h-[10px] sm:h-[6px] md:h-[7px] flex items-center justify-center"
                            alt="lock"
                          />
                        </Button>
                      </Column>
                      <Column className="flex flex-col ml-[10px] md:ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                        <Text
                          className="font-semibold text-black_900_87 w-[auto]"
                          variant="body4"
                        >
                          Maths - for Standard 3 St..
                        </Text>
                        <Text
                          className="mt-[3px] text-deep_orange_400_87 w-[auto]"
                          variant="body6"
                        >
                          8:11
                        </Text>
                      </Column>
                    </Row>
                    <Row className="bg-white_A700_87 hover:cursor-pointer hover:flex flex hover:flex-row flex-row md:flex-wrap sm:flex-wrap items-center hover:my-[0] my-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius10 hover:shadow-bs1 w-[100%]">
                      <Column
                        className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] md:p-[11px] sm:p-[15px] p-[16px] rounded-radius5 sm:w-[100%] w-[23%]"
                        style={{
                          backgroundImage: "url('images/img_image_50X80.png')",
                        }}
                      >
                        <Button
                          className="flex sm:h-[10px] md:h-[13px] h-[18px] items-center justify-center rounded-radius50 md:w-[12px] w-[18px] sm:w-[9px]"
                          size="smIcn"
                          variant="icbFillWhiteA700"
                        >
                          <Img
                            src="images/img_lock_18X18.svg"
                            className="h-[10px] sm:h-[6px] md:h-[7px] flex items-center justify-center"
                            alt="lock One"
                          />
                        </Button>
                      </Column>
                      <Column className="flex flex-col ml-[10px] md:ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                        <Text
                          className="font-semibold text-black_900_87 w-[auto]"
                          variant="body4"
                        >
                          Maths - for Standard 3 St..
                        </Text>
                        <Text
                          className="mt-[3px] text-deep_orange_400_87 w-[auto]"
                          variant="body6"
                        >
                          6:10
                        </Text>
                      </Column>
                    </Row>
                    <Row className="bg-white_A700_87 hover:cursor-pointer hover:flex flex hover:flex-row flex-row md:flex-wrap sm:flex-wrap items-center hover:my-[0] my-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius10 hover:shadow-bs1 w-[100%]">
                      <Column
                        className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] md:p-[11px] sm:p-[15px] p-[16px] rounded-radius5 sm:w-[100%] w-[23%]"
                        style={{
                          backgroundImage: "url('images/img_image_50X80.png')",
                        }}
                      >
                        <Button
                          className="flex sm:h-[10px] md:h-[13px] h-[18px] items-center justify-center rounded-radius50 md:w-[12px] w-[18px] sm:w-[9px]"
                          size="smIcn"
                          variant="icbFillWhiteA700"
                        >
                          <Img
                            src="images/img_lock_18X18.svg"
                            className="h-[10px] sm:h-[6px] md:h-[7px] flex items-center justify-center"
                            alt="lock Two"
                          />
                        </Button>
                      </Column>
                      <Column className="flex flex-col ml-[10px] md:ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                        <Text
                          className="font-semibold text-black_900_87 w-[auto]"
                          variant="body4"
                        >
                          Maths - for Standard 3 St..
                        </Text>
                        <Text
                          className="mt-[3px] text-deep_orange_400_87 w-[auto]"
                          variant="body6"
                        >
                          10:00
                        </Text>
                      </Column>
                    </Row>
                    <Row className="bg-white_A700_87 hover:cursor-pointer hover:flex flex hover:flex-row flex-row md:flex-wrap sm:flex-wrap items-center hover:my-[0] my-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius10 hover:shadow-bs1 w-[100%]">
                      <Column
                        className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] md:p-[11px] sm:p-[15px] p-[16px] rounded-radius5 sm:w-[100%] w-[23%]"
                        style={{
                          backgroundImage: "url('images/img_image_50X80.png')",
                        }}
                      >
                        <Button
                          className="flex sm:h-[10px] md:h-[13px] h-[18px] items-center justify-center rounded-radius50 md:w-[12px] w-[18px] sm:w-[9px]"
                          size="smIcn"
                          variant="icbFillWhiteA700"
                        >
                          <Img
                            src="images/img_lock_18X18.svg"
                            className="h-[10px] sm:h-[6px] md:h-[7px] flex items-center justify-center"
                            alt="lock Three"
                          />
                        </Button>
                      </Column>
                      <Column className="flex flex-col ml-[10px] md:ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                        <Text
                          className="font-semibold text-black_900_87 w-[auto]"
                          variant="body4"
                        >
                          Maths - for Standard 3 St..
                        </Text>
                        <Text
                          className="mt-[3px] text-deep_orange_400_87 w-[auto]"
                          variant="body6"
                        >
                          7:53
                        </Text>
                      </Column>
                    </Row>
                  </List>
                </Column>
              </Column>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1280px] ml-[auto] mr-[auto] sm:mt-[37px] md:mt-[48px] mt-[70px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-semibold text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Course Details
                  </Text>
                  <Text
                    className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-gray_700 w-[100%]"
                    variant="body5"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                  </Text>
                </Column>
                <Column className="flex flex-col justify-start sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%]">
                  <Text
                    className="font-semibold text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Certification
                  </Text>
                  <Text
                    className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-gray_700 w-[100%]"
                    variant="body5"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                  </Text>
                </Column>
                <Column className="flex flex-col justify-start sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%]">
                  <Text
                    className="font-semibold text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Who this course is for
                  </Text>
                  <Text
                    className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-gray_700 w-[100%]"
                    variant="body5"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                  </Text>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] sm:pb-[2px] md:pb-[3px] pb-[5px] sm:px-[0] sm:w-[100%] w-[54%]">
                  <Text
                    className="font-semibold text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    What you'll learn in this course:
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[11px] mt-[17px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                    <div className="bg-deep_orange_400 h-[10px] sm:h-[6px] md:h-[7px] mb-[4px] mt-[1px] rounded-radius50 w-[10px] sm:w-[5px] md:w-[6px]"></div>
                    <Text
                      className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-black_900 w-[auto]"
                      variant="body5"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                    <div className="bg-deep_orange_400 h-[10px] sm:h-[6px] md:h-[7px] mb-[4px] mt-[1px] rounded-radius50 w-[10px] sm:w-[5px] md:w-[6px]"></div>
                    <Text
                      className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-black_900 w-[auto]"
                      variant="body5"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                    <div className="bg-deep_orange_400 h-[10px] sm:h-[6px] md:h-[7px] mb-[4px] mt-[1px] rounded-radius50 w-[10px] sm:w-[5px] md:w-[6px]"></div>
                    <Text
                      className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-black_900 w-[auto]"
                      variant="body5"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                    <div className="bg-deep_orange_400 h-[10px] sm:h-[6px] md:h-[7px] mb-[4px] mt-[1px] rounded-radius50 w-[10px] sm:w-[5px] md:w-[6px]"></div>
                    <Text
                      className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-black_900 w-[auto]"
                      variant="body5"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                    <div className="bg-deep_orange_400 h-[10px] sm:h-[6px] md:h-[7px] mb-[4px] mt-[1px] rounded-radius50 w-[10px] sm:w-[5px] md:w-[6px]"></div>
                    <Text
                      className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-black_900 w-[auto]"
                      variant="body5"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="flex flex-col items-center justify-start md:ml-[27px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                <Column className="bg-white_A700 flex flex-col items-center justify-center md:p-[13px] sm:p-[15px] p-[20px] rounded-radius10 w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-semibold text-gray_700 w-[auto]"
                      variant="body3"
                    >
                      Price
                    </Text>
                    <Text
                      className="text-deep_orange_400 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      $49.00
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-semibold text-gray_700 w-[auto]"
                      variant="body3"
                    >
                      Instructor
                    </Text>
                    <a
                      href={"javascript:"}
                      className="font-semibold text-[20px] text-black_900 underline w-[auto]"
                      rel="noreferrer"
                    >
                      Wade Warren
                    </a>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
                    <Text
                      className="flex-grow font-semibold text-gray_700"
                      variant="body3"
                    >
                      Ratings
                    </Text>
                    <Img
                      src="images/img_mobile.svg"
                      className="flex-shrink-0 max-w-[100%] mt-[2px] w-[26%]"
                      alt="mobile"
                    />
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-semibold text-gray_700 w-[auto]"
                      variant="body3"
                    >
                      Durations
                    </Text>
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body3"
                    >
                      10 Days
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-semibold text-gray_700 w-[auto]"
                      variant="body3"
                    >
                      Lessons
                    </Text>
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body3"
                    >
                      30
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-semibold text-gray_700 w-[auto]"
                      variant="body3"
                    >
                      Quizzes
                    </Text>
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body3"
                    >
                      5
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-semibold text-gray_700 w-[auto]"
                      variant="body3"
                    >
                      Certificate
                    </Text>
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body3"
                    >
                      Yes
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-semibold text-gray_700 w-[auto]"
                      variant="body3"
                    >
                      Language
                    </Text>
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body3"
                    >
                      English
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mb-[3px] md:mb-[4px] mb-[6px] sm:mt-[11px] md:mt-[14px] mt-[21px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-semibold text-gray_700 w-[auto]"
                      variant="body3"
                    >
                      Access
                    </Text>
                    <Text
                      className="font-semibold text-black_900 w-[auto]"
                      variant="body3"
                    >
                      Lifetime
                    </Text>
                  </Row>
                </Column>
                <Button
                  className="common-pointer cursor-pointer font-medium sm:mt-[10px] md:mt-[13px] mt-[20px] text-[18px] text-center text-white_A700 w-[100%]"
                  onClick={handleNavigate8}
                  shape="RoundedBorder5"
                  size="lg"
                >
                  Purchase Course
                </Button>
              </Column>
            </Row>
            <Column className="flex flex-col font-metropolis justify-start max-w-[1280px] ml-[auto] mr-[auto] md:mt-[103px] mt-[150px] sm:mt-[79px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Text
                className="font-bold text-gray_901 w-[auto]"
                as="h2"
                variant="h2"
              >
                Similar Courses
              </Text>
              <Column className="flex flex-col font-inter items-center justify-start sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                <Grid className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]">
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-start md:p-[10px] p-[15px] sm:p-[7px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_image_6.png"
                        className="max-w-[100%] rounded-radius10 w-[28%]"
                        alt="Image Two"
                      />
                      <Column className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[6px] md:ml-[10px] ml-[15px] sm:mt-[4px] md:mt-[6px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                        <Text
                          className="text-gray_901 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          The Three Musketeers
                        </Text>
                        <Img
                          src="images/img_star_amber_500.svg"
                          className="max-w-[100%] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:w-[100%] w-[43%]"
                          alt="star"
                        />
                        <Text
                          className="mt-[13px] sm:mt-[6px] md:mt-[8px] text-deep_orange_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          $40.00
                        </Text>
                      </Column>
                      <Button
                        className="flex sm:h-[24px] md:h-[31px] h-[44px] items-center justify-center sm:mb-[2px] md:mb-[3px] mb-[5px] ml-[104px] sm:ml-[55px] md:ml-[71px] sm:mt-[28px] md:mt-[37px] mt-[54px] sm:w-[23px] md:w-[30px] w-[44px]"
                        shape="icbRoundedBorder6"
                        size="mdIcn"
                        variant="icbFillRed300"
                      >
                        <Img
                          src="images/img_lock_44X44.svg"
                          className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                          alt="lock Four"
                        />
                      </Button>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-start md:p-[10px] p-[15px] sm:p-[7px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_image_4.png"
                        className="max-w-[100%] rounded-radius10 w-[28%]"
                        alt="Image Four"
                      />
                      <Column className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[6px] md:ml-[10px] ml-[15px] sm:mt-[4px] md:mt-[6px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                        <Text
                          className="text-gray_901 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          The Three Musketeers
                        </Text>
                        <Img
                          src="images/img_star_amber_500.svg"
                          className="max-w-[100%] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:w-[100%] w-[43%]"
                          alt="star One"
                        />
                        <Text
                          className="mt-[13px] sm:mt-[6px] md:mt-[8px] text-deep_orange_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          $40.00
                        </Text>
                      </Column>
                      <Button
                        className="flex sm:h-[24px] md:h-[31px] h-[44px] items-center justify-center sm:mb-[2px] md:mb-[3px] mb-[5px] ml-[104px] sm:ml-[55px] md:ml-[71px] sm:mt-[28px] md:mt-[37px] mt-[54px] sm:w-[23px] md:w-[30px] w-[44px]"
                        shape="icbRoundedBorder6"
                        size="mdIcn"
                        variant="icbFillRed53"
                      >
                        <Img
                          src="images/img_bag.svg"
                          className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                          alt="bag One"
                        />
                      </Button>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-start md:p-[10px] p-[15px] sm:p-[7px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_image_5.png"
                        className="max-w-[100%] rounded-radius10 w-[28%]"
                        alt="Image Six"
                      />
                      <Column className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[6px] md:ml-[10px] ml-[15px] sm:mt-[4px] md:mt-[6px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                        <Text
                          className="text-gray_901 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          The Three Musketeers
                        </Text>
                        <Img
                          src="images/img_star_amber_500.svg"
                          className="max-w-[100%] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:w-[100%] w-[43%]"
                          alt="star Two"
                        />
                        <Text
                          className="mt-[13px] sm:mt-[6px] md:mt-[8px] text-deep_orange_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          $40.00
                        </Text>
                      </Column>
                      <Button
                        className="flex sm:h-[24px] md:h-[31px] h-[44px] items-center justify-center sm:mb-[2px] md:mb-[3px] mb-[5px] ml-[104px] sm:ml-[55px] md:ml-[71px] sm:mt-[28px] md:mt-[37px] mt-[54px] sm:w-[23px] md:w-[30px] w-[44px]"
                        shape="icbRoundedBorder6"
                        size="mdIcn"
                        variant="icbFillRed53"
                      >
                        <Img
                          src="images/img_bag.svg"
                          className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                          alt="bag Two"
                        />
                      </Button>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-start md:p-[10px] p-[15px] sm:p-[7px] rounded-radius10 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_image_7.png"
                        className="max-w-[100%] rounded-radius10 w-[28%]"
                        alt="Image Eight"
                      />
                      <Column className="flex flex-col justify-start sm:mb-[3px] md:mb-[4px] mb-[6px] md:ml-[10px] ml-[15px] sm:mt-[4px] md:mt-[6px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                        <Text
                          className="text-gray_901 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          The Three Musketeers
                        </Text>
                        <Img
                          src="images/img_star_amber_500.svg"
                          className="max-w-[100%] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:w-[100%] w-[43%]"
                          alt="star Three"
                        />
                        <Text
                          className="mt-[13px] sm:mt-[6px] md:mt-[8px] text-deep_orange_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          $40.00
                        </Text>
                      </Column>
                      <Button
                        className="flex sm:h-[24px] md:h-[31px] h-[44px] items-center justify-center sm:mb-[2px] md:mb-[3px] mb-[5px] ml-[104px] sm:ml-[55px] md:ml-[71px] sm:mt-[28px] md:mt-[37px] mt-[54px] sm:w-[23px] md:w-[30px] w-[44px]"
                        shape="icbRoundedBorder6"
                        size="mdIcn"
                        variant="icbFillRed53"
                      >
                        <Img
                          src="images/img_bag.svg"
                          className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                          alt="bag Three"
                        />
                      </Button>
                    </Row>
                  </Column>
                </Grid>
              </Column>
            </Column>
            <Column className="bg-black_902 flex flex-col font-metropolis items-center justify-start max-w-[1280px] ml-[auto] mr-[auto] md:mt-[103px] mt-[150px] sm:mt-[79px] sm:mx-[0] sm:p-[15px] md:p-[34px] p-[50px] sm:pl-[15px] sm:pr-[15px] rounded-radius20 w-[100%]">
              <Column className="flex flex-col items-center justify-start md:mb-[10px] mb-[15px] sm:mb-[7px] mt-[11px] sm:mt-[5px] md:mt-[7px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                  <Img
                    src="images/img_ellipse169.png"
                    className="sm:h-[32px] md:h-[42px] h-[60px] rounded-radius50 sm:w-[31px] md:w-[41px] w-[60px]"
                    alt="Ellipse169"
                  />
                  <Img
                    src="images/img_ellipse170.png"
                    className="sm:h-[32px] md:h-[42px] h-[60px] sm:ml-[35px] md:ml-[46px] ml-[67px] mt-[105px] sm:mt-[55px] md:mt-[72px] rounded-radius50 sm:w-[31px] md:w-[41px] w-[60px]"
                    alt="Ellipse170"
                  />
                  <Column className="flex flex-col justify-start ml-[114px] md:ml-[78px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                      <Text
                        className="flex-grow font-bold leading-[55.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[10px] md:mt-[13px] mt-[19px] sm:mx-[0] text-center text-white_A700"
                        as="h2"
                        variant="h2"
                      >
                        Subscribe For Get Update
                        <br />
                        Every New Courses
                      </Text>
                      <Img
                        src="images/img_ellipse166.png"
                        className="sm:h-[32px] md:h-[42px] h-[60px] rounded-radius50 sm:w-[31px] md:w-[41px] w-[60px]"
                        alt="Ellipse166"
                      />
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-start md:ml-[20px] ml-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
                      <Text
                        className="flex-grow font-normal sm:mt-[14px] md:mt-[19px] mt-[28px] not-italic text-white_A700_b2"
                        variant="body5"
                      >
                        20k+ students daily learn with Educatsy. Subscribe for
                        new courses.
                      </Text>
                      <Img
                        src="images/img_ellipse167.png"
                        className="sm:h-[32px] md:h-[42px] h-[60px] md:ml-[100px] ml-[146px] sm:ml-[77px] rounded-radius50 sm:w-[31px] md:w-[41px] w-[60px]"
                        alt="Ellipse167"
                      />
                    </Row>
                  </Column>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-start sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                  <Img
                    src="images/img_ellipse171.png"
                    className="sm:h-[32px] md:h-[42px] h-[60px] md:mt-[10px] mt-[15px] sm:mt-[7px] rounded-radius50 sm:w-[31px] md:w-[41px] w-[60px]"
                    alt="Ellipse171"
                  />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:mb-[10px] mb-[15px] sm:mb-[7px] md:ml-[167px] ml-[244px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                    <Input
                      className="font-medium p-[0] text-[16px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                      wrapClassName="sm:mx-[0] sm:w-[100%] w-[73%]"
                      type="email"
                      name="email"
                      placeholder="enter your email"
                    ></Input>
                    <Button
                      className="cursor-pointer font-medium min-w-[28%] text-[16px] text-center text-white_A700 w-[max-content]"
                      shape="CustomBorderLR10"
                      size="lg"
                    >
                      Subscribe
                    </Button>
                  </Row>
                  <Img
                    src="images/img_ellipse168.png"
                    className="sm:h-[32px] md:h-[42px] h-[60px] sm:ml-[147px] md:ml-[190px] ml-[277px] md:mt-[10px] mt-[15px] sm:mt-[7px] rounded-radius50 sm:w-[31px] md:w-[41px] w-[60px]"
                    alt="Ellipse168"
                  />
                </Row>
              </Column>
            </Column>
            <footer className="bg-gray_100 font-inter w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between max-w-[1280px] sm:mb-[42px] md:mb-[55px] mb-[80px] ml-[auto] mr-[auto] mt-[100px] sm:mt-[53px] md:mt-[68px] sm:mx-[0] mx-[auto] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%] common-column-list">
                  <ul className="flex flex-col">
                    <li className="w-[92%] sm:w-[100%] sm:mx-[0] sm:px-[0] flex-row flex">
                      <Row className="cursor-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center">
                        <Img
                          src="images/img_location.svg"
                          className="flex-shrink-0 sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[30px]"
                          alt="location One"
                        />
                        <Text
                          className="flex-grow font-semibold ml-[12px] sm:ml-[6px] md:ml-[8px] text-black_900"
                          as="h4"
                          variant="h4"
                        >
                          Educatsy
                        </Text>
                      </Row>
                    </li>
                    <li className="w-[76%] mt-[19px] sm:mt-[10px] sm:w-[100%] md:mt-[13px] max-w-[100%]">
                      <Img
                        src="images/img_social_deep_orange_400.svg"
                        className="cursor-pointer max-w-[100%]"
                        alt="social"
                      />
                    </li>
                    <li className="w-[100%] mt-[40px] sm:mt-[21px] md:mt-[27px] flex-col flex">
                      <Column className="cursor-pointer flex flex-col justify-start">
                        <Text
                          className="font-normal not-italic text-gray_700 w-[auto]"
                          variant="body5"
                        >
                          ©2021 Educatsy.co
                        </Text>
                        <Text
                          className="font-normal leading-[26.00px] md:leading-[normal] sm:leading-[normal] md:mt-[10px] mt-[15px] sm:mt-[7px] not-italic text-gray_700 w-[100%]"
                          variant="body5"
                        >
                          Educatsy is a registered
                          <br />
                          trademark of Educatsy.co
                        </Text>
                      </Column>
                    </li>
                  </ul>
                </Column>
                <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
                  <Text className="text-gray_901 w-[auto]" variant="body2">
                    Courses
                  </Text>
                  <Column className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%] common-column-list">
                    <ul className="flex flex-col">
                      <li className="w-[auto]">
                        <Text
                          className="cursor-pointer font-normal not-italic text-gray_700"
                          variant="body5"
                        >
                          Classroom courses
                        </Text>
                      </li>
                      <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                          rel="noreferrer"
                        >
                          Virtual classroom courses
                        </a>
                      </li>
                      <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                          rel="noreferrer"
                        >
                          E-learning courses
                        </a>
                      </li>
                      <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                          rel="noreferrer"
                        >
                          Video Courses
                        </a>
                      </li>
                      <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                          rel="noreferrer"
                        >
                          Offline Courses
                        </a>
                      </li>
                    </ul>
                  </Column>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]">
                  <Text className="text-gray_901 w-[auto]" variant="body2">
                    Community
                  </Text>
                  <Column className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%] common-column-list">
                    <ul className="flex flex-col">
                      <li className="w-[auto]">
                        <Text
                          className="cursor-pointer font-normal not-italic text-gray_700"
                          variant="body5"
                        >
                          Learners
                        </Text>
                      </li>
                      <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                          rel="noreferrer"
                        >
                          Partners
                        </a>
                      </li>
                      <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                          rel="noreferrer"
                        >
                          Developers
                        </a>
                      </li>
                      <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                          rel="noreferrer"
                        >
                          Transactions
                        </a>
                      </li>
                      <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                          rel="noreferrer"
                        >
                          Blog
                        </a>
                      </li>
                      <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                          rel="noreferrer"
                        >
                          Teaching Center
                        </a>
                      </li>
                    </ul>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                  <Text className="text-gray_901 w-[auto]" variant="body2">
                    Quick links
                  </Text>
                  <Column className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%] common-column-list">
                    <ul className="flex flex-col">
                      <li className="w-[auto]">
                        <Text
                          className="cursor-pointer font-normal not-italic text-gray_700"
                          variant="body5"
                        >
                          Home
                        </Text>
                      </li>
                      <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                          rel="noreferrer"
                        >
                          Professional Education
                        </a>
                      </li>
                      <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                          rel="noreferrer"
                        >
                          Courses
                        </a>
                      </li>
                      <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                          rel="noreferrer"
                        >
                          Admissions
                        </a>
                      </li>
                      <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                          rel="noreferrer"
                        >
                          Testimonial
                        </a>
                      </li>
                      <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                          rel="noreferrer"
                        >
                          Programs
                        </a>
                      </li>
                    </ul>
                  </Column>
                </Column>
                <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[6%]">
                  <Text className="text-gray_901 w-[auto]" variant="body2">
                    More
                  </Text>
                  <Column className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%] common-column-list">
                    <ul className="flex flex-col">
                      <li className="w-[auto]">
                        <Text
                          className="cursor-pointer font-normal not-italic text-gray_700"
                          variant="body5"
                        >
                          Press
                        </Text>
                      </li>
                      <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                          rel="noreferrer"
                        >
                          Investors
                        </a>
                      </li>
                      <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                          rel="noreferrer"
                        >
                          Terms
                        </a>
                      </li>
                      <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                          rel="noreferrer"
                        >
                          Privacy
                        </a>
                      </li>
                      <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                          rel="noreferrer"
                        >
                          Help
                        </a>
                      </li>
                      <li className="w-[auto] mt-[17px] sm:mt-[9px] md:mt-[11px]">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[16px] text-gray_700"
                          rel="noreferrer"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </Column>
                </Column>
              </Row>
            </footer>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default EduviCoursesDetailsPage;
