import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  SelectBox,
  Stack,
  Line,
  Button,
  List,
  Input,
} from "components";
import { useNavigate } from "react-router-dom";

const EduviJoinAsTeacherPage = () => {
  const navigate = useNavigate();

  function handleNavigate21() {
    navigate("/login");
  }
  function handleNavigate29() {
    navigate("/allmentors");
  }
  function handleNavigate30() {
    navigate("/eduvicourses");
  }
  function handleNavigate33() {
    navigate("/eduvishop");
  }

  return (
    <>
      <Column className="bg-gray_100 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
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
                    onClick={handleNavigate33}
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
                    onClick={handleNavigate30}
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
                    onClick={handleNavigate29}
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
              onClick={handleNavigate21}
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
          <Column className="bg-yellow_100 flex flex-col justify-start max-w-[1280px] ml-[auto] mr-[auto] sm:mx-[0] md:p-[13px] sm:p-[15px] p-[19px] sm:pl-[15px] sm:pr-[15px] rounded-radius20 w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mb-[2px] ml-[10px] md:ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
              <Text
                className="font-medium text-black_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body5"
              >
                Home | Become An Instructor
              </Text>
              <Text
                className="font-semibold leading-[50.00px] md:leading-[normal] sm:leading-[normal] ml-[3px] sm:mt-[34px] md:mt-[44px] mt-[65px] sm:mx-[0] text-gray_901 sm:w-[100%] w-[35%]"
                as="h2"
                variant="h2"
              >
                Join Educatsy as
                <br />a Mentor
              </Text>
              <Img
                src="images/img_group_322X325.svg"
                className="max-w-[100%] ml-[131px] sm:ml-[69px] md:ml-[90px] sm:mt-[10px] md:mt-[13px] mt-[19px] w-[30%]"
                alt="OBJECTS"
              />
            </Row>
          </Column>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[1229px] ml-[auto] mr-[auto] sm:mt-[37px] md:mt-[48px] mt-[70px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Img
              src="images/img_image_521X510.png"
              className="max-w-[100%] sm:w-[100%] w-[42%]"
              alt="Image"
            />
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
              <Text
                className="font-semibold text-gray_901 w-[auto]"
                as="h4"
                variant="h4"
              >
                Apply As Instructor
              </Text>
              <Text
                className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[14px] sm:mt-[7px] md:mt-[9px] not-italic text-gray_700 w-[100%]"
                variant="body5"
              >
                Teaching is a vital and admirable career. As such, it comes with
                quite a bit of responsibility, both in practice and in
                preparation with many skills required to be a teacher. The
                following steps provide a general breakdown of the requirements
                for teachers:
              </Text>
              <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                <Column className="flex flex-col items-center justify-start w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                    <Text
                      className="font-medium text-red_300 w-[auto]"
                      variant="body5"
                    >
                      Instructor Requirements
                    </Text>
                    <Text
                      className="font-medium text-gray_700 w-[auto]"
                      variant="body5"
                    >
                      Instructor Rules
                    </Text>
                  </Row>
                  <Stack className="h-[1px] mt-[10px] sm:mt-[5px] md:mt-[6px] relative w-[100%]">
                    <Line className="absolute bg-gray_700 h-[1px] shadow-bs2 w-[100%]" />
                    <Line className="absolute bg-red_300 h-[1px] left-[0] shadow-bs2 sm:w-[100%] w-[56%]" />
                  </Stack>
                </Column>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[46%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                  <div className="bg-red_300 h-[10px] sm:h-[6px] md:h-[7px] mb-[4px] mt-[1px] rounded-radius50 w-[10px] sm:w-[5px] md:w-[6px]"></div>
                  <Text
                    className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-gray_901 w-[auto]"
                    variant="body5"
                  >
                    An undergraduate degree
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:px-[0] w-[100%]">
                  <div className="bg-red_300 h-[10px] sm:h-[6px] md:h-[7px] mb-[4px] mt-[1px] rounded-radius50 w-[10px] sm:w-[5px] md:w-[6px]"></div>
                  <Text
                    className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-gray_901 w-[auto]"
                    variant="body5"
                  >
                    Participate in supervised teaching
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                  <div className="bg-red_300 h-[10px] sm:h-[6px] md:h-[7px] mb-[4px] mt-[1px] rounded-radius50 w-[10px] sm:w-[5px] md:w-[6px]"></div>
                  <Text
                    className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-gray_901 w-[auto]"
                    variant="body5"
                  >
                    State teaching license
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mb-[4px] sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                  <div className="bg-red_300 h-[10px] sm:h-[6px] md:h-[7px] mb-[4px] mt-[1px] rounded-radius50 w-[10px] sm:w-[5px] md:w-[6px]"></div>
                  <Text
                    className="font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-gray_901 w-[auto]"
                    variant="body5"
                  >
                    Pursue graduate studies
                  </Text>
                </Row>
              </Column>
              <Button
                className="cursor-pointer font-medium min-w-[24%] sm:mt-[15px] md:mt-[20px] mt-[30px] text-[16px] text-center text-white_A700 w-[max-content]"
                size="md"
              >
                Apply Now
              </Button>
            </Column>
          </Row>
          <Stack className="font-airbnbcerealapp h-[725px] max-w-[1158px] ml-[auto] mr-[auto] md:mt-[115px] mt-[168px] sm:mt-[89px] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
            <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[0] top-[0] sm:w-[100%] w-[16%]">
              <List
                className="sm:gap-[4px] md:gap-[5px] gap-[8.16px] grid min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                  <Text className="text-red_300 w-[auto]" variant="body6">
                    +
                  </Text>
                </Row>
              </List>
            </Column>
            <Column className="absolute flex flex-col font-metropolis h-[max-content] inset-y-[0] items-center justify-start left-[0] sm:mx-[0] my-[auto] sm:px-[0] sm:w-[100%] w-[92%]">
              <Text
                className="font-bold text-gray_901 w-[auto]"
                as="h2"
                variant="h2"
              >
                How to apply to join as instructor
              </Text>
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[31px] md:mt-[41px] mt-[60px] md:p-[10px] p-[15px] sm:p-[7px] rounded-radius20 shadow-bs3 w-[100%]">
                <Stack
                  className="bg-cover bg-no-repeat h-[570px] sm:pt-[15px] md:pt-[346px] pt-[504px] relative rounded-radius20 w-[100%]"
                  style={{ backgroundImage: "url('images/img_group7685.png')" }}
                >
                  <Img
                    src="images/img_group7684.svg"
                    className="absolute h-[66px] max-w-[100%] w-[100%]"
                    alt="Group7684"
                  />
                </Stack>
              </Column>
            </Column>
          </Stack>
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
                      20k+ students daily learn with Educatsy. Subscribe for new
                      courses.
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
    </>
  );
};

export default EduviJoinAsTeacherPage;
