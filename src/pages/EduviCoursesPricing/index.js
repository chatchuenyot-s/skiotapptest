import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  SelectBox,
  List,
  Line,
  Button,
  Input,
} from "components";
import { useNavigate } from "react-router-dom";

const EduviCoursesPricingPage = () => {
  const navigate = useNavigate();

  function handleNavigate11() {
    navigate("/login");
  }
  function handleNavigate18() {
    navigate("/allmentors");
  }
  function handleNavigate19() {
    navigate("/eduvicourses");
  }
  function handleNavigate20() {
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
                    onClick={handleNavigate20}
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
                    onClick={handleNavigate19}
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
                    onClick={handleNavigate18}
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
              onClick={handleNavigate11}
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
          <Column className="bg-red_52 flex flex-col justify-start max-w-[1280px] ml-[auto] mr-[auto] sm:mx-[0] sm:p-[15px] md:p-[17px] p-[26px] sm:pl-[15px] sm:pr-[15px] rounded-radius20 w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mb-[4px] md:mb-[6px] mb-[9px] ml-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
              <Text
                className="font-medium text-black_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body5"
              >
                Home | Pricing
              </Text>
              <Text
                className="font-semibold leading-[50.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[30px] md:mt-[39px] mt-[58px] sm:mx-[0] text-gray_901 sm:w-[100%] w-[36%]"
                as="h2"
                variant="h2"
              >
                Our Pre-ready
                <br />
                Pricing Packages
              </Text>
              <Img
                src="images/img_group_193X412.svg"
                className="max-w-[100%] ml-[145px] sm:ml-[77px] md:ml-[99px] mt-[13px] sm:mt-[6px] md:mt-[8px] sm:w-[100%] w-[40%]"
                alt="Group"
              />
            </Row>
          </Column>
          <Column className="flex flex-col items-center justify-start max-w-[840px] ml-[auto] mr-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="font-bold font-metropolis leading-[55.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-center text-gray_901 sm:w-[100%] w-[99%]"
              as="h2"
              variant="h2"
            >
              We create a monthly pricing package
              <br />
              for all standard students
            </Text>
            <Text
              className="font-inter font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[10px] md:mt-[13px] mt-[20px] not-italic text-center text-gray_700 w-[100%]"
              variant="body5"
            >
              Basically we create this package for those who are really
              interested and get benefited from our courses or books. We want to
              make a low cost package for them. So that they can purchase any
              courses with the package they buy from us. Also will get free
              books from every packages.
            </Text>
          </Column>
          <List
            className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 max-w-[1280px] min-h-[auto] ml-[auto] mr-[auto] sm:mt-[37px] md:mt-[48px] mt-[70px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
            orientation="horizontal"
          >
            <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col justify-start sm:p-[15px] md:p-[20px] p-[30px] rounded-radius20 hover:shadow-bs hover:w-[100%] w-[100%]">
              <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                <Img
                  src="images/img_location_50X50.svg"
                  className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] sm:ml-[2px] md:ml-[3px] ml-[5px] sm:w-[26px] md:w-[34px] w-[50px]"
                  alt="location One"
                />
                <Text
                  className="font-semibold md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_901 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Basic Pack
                </Text>
                <Line className="bg-gray_900_26 h-[1px] mt-[14px] sm:mt-[7px] md:mt-[9px] w-[100%]" />
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="checkmark"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] text-gray_700"
                  variant="body5"
                >
                  3 HD video lessons & tutorials
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="checkmark One"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] text-gray_700"
                  variant="body5"
                >
                  1 Official exam
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="checkmark Two"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] text-gray_700"
                  variant="body5"
                >
                  100 Practice questions
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="checkmark Three"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] text-gray_700"
                  variant="body5"
                >
                  1 Month subscriptions
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="checkmark Four"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] text-gray_700"
                  variant="body5"
                >
                  1 Free book
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                <Img
                  src="images/img_close.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="close"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] text-gray_700"
                  variant="body5"
                >
                  Practice quizzes & assignments
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                <Img
                  src="images/img_close.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="close One"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] text-gray_700"
                  variant="body5"
                >
                  In depth explanations
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                <Img
                  src="images/img_close.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="close Two"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] text-gray_700"
                  variant="body5"
                >
                  Personal instructor Assistance
                </Text>
              </Row>
              <Text
                className="font-semibold sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_901 w-[auto]"
                variant="body3"
              >
                $200
              </Text>
              <Button
                className="cursor-pointer font-medium min-w-[100%] sm:mt-[13px] md:mt-[17px] mt-[26px] text-[18px] text-center text-red_300 w-[max-content]"
                shape="RoundedBorder5"
                size="lg"
                variant="OutlineRed300"
              >
                Purchase Course
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col justify-start sm:p-[15px] md:p-[20px] p-[30px] rounded-radius20 hover:shadow-bs hover:w-[100%] w-[100%]">
              <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                <Img
                  src="images/img_location_50X50.svg"
                  className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] sm:ml-[2px] md:ml-[3px] ml-[5px] sm:w-[26px] md:w-[34px] w-[50px]"
                  alt="location Two"
                />
                <Text
                  className="font-semibold md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_901 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Standard Pack
                </Text>
                <Line className="bg-gray_900_26 h-[1px] mt-[14px] sm:mt-[7px] md:mt-[9px] w-[100%]" />
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="checkmark One"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] text-gray_700"
                  variant="body5"
                >
                  8 HD video lessons & tutorials
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="checkmark One One"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] text-gray_700"
                  variant="body5"
                >
                  2 Official exam
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="checkmark Two One"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] text-gray_700"
                  variant="body5"
                >
                  200 Practice questions
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="checkmark Three One"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] text-gray_700"
                  variant="body5"
                >
                  1 Month subscriptions
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="checkmark Four One"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] text-gray_700"
                  variant="body5"
                >
                  3 Free books
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="checkmark Five"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] text-gray_700"
                  variant="body5"
                >
                  Practice quizzes & assignments
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                <Img
                  src="images/img_close.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="close One"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] text-gray_700"
                  variant="body5"
                >
                  In depth explanations
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                <Img
                  src="images/img_close.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="close One One"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] text-gray_700"
                  variant="body5"
                >
                  Personal instructor Assistance
                </Text>
              </Row>
              <Text
                className="font-semibold sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_901 w-[auto]"
                variant="body3"
              >
                $600
              </Text>
              <Button
                className="cursor-pointer font-medium min-w-[100%] sm:mt-[13px] md:mt-[17px] mt-[26px] text-[18px] text-center text-white_A700 w-[max-content]"
                shape="RoundedBorder5"
                size="lg"
              >
                Purchase Course
              </Button>
            </Column>
            <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col justify-start sm:p-[15px] md:p-[20px] p-[30px] rounded-radius20 hover:shadow-bs hover:w-[100%] w-[100%]">
              <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                <Img
                  src="images/img_location_50X50.svg"
                  className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] sm:ml-[2px] md:ml-[3px] ml-[5px] sm:w-[26px] md:w-[34px] w-[50px]"
                  alt="location Three"
                />
                <Text
                  className="font-semibold md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_901 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Premium Pack
                </Text>
                <Line className="bg-gray_900_26 h-[1px] mt-[14px] sm:mt-[7px] md:mt-[9px] w-[100%]" />
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="checkmark Two"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] text-gray_700"
                  variant="body5"
                >
                  15 HD video lessons & tutorials
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="checkmark One Two"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] text-gray_700"
                  variant="body5"
                >
                  3 Official exam
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="checkmark Two Two"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] text-gray_700"
                  variant="body5"
                >
                  300 Practice questions
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="checkmark Three Two"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] text-gray_700"
                  variant="body5"
                >
                  1 Month subscriptions
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="checkmark Four Two"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] text-gray_700"
                  variant="body5"
                >
                  5 Free books
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="checkmark Five One"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] text-gray_700"
                  variant="body5"
                >
                  Practice quizzes & assignments
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="checkmark Six"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] text-gray_700"
                  variant="body5"
                >
                  In depth explanations
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="checkmark Seven"
                />
                <Text
                  className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] text-gray_700"
                  variant="body5"
                >
                  Personal instructor Assistance
                </Text>
              </Row>
              <Text
                className="font-semibold sm:mt-[15px] md:mt-[20px] mt-[30px] text-gray_901 w-[auto]"
                variant="body3"
              >
                $1200
              </Text>
              <Button
                className="cursor-pointer font-medium min-w-[100%] sm:mt-[13px] md:mt-[17px] mt-[26px] text-[18px] text-center text-red_300 w-[max-content]"
                shape="RoundedBorder5"
                size="lg"
                variant="OutlineRed300"
              >
                Purchase Course
              </Button>
            </Column>
          </List>
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
                        alt="location Four"
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

export default EduviCoursesPricingPage;
