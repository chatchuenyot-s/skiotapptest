import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  SelectBox,
  Stack,
  List,
  Button,
  Grid,
  Input,
  Slider,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useNavigate } from "react-router-dom";

const EduviCoursesPage = () => {
  const navigate = useNavigate();

  function handleNavigate27() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate28() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate31() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate32() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate34() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate35() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate36() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate37() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate38() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate39() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate40() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate41() {
    navigate("/eduvicoursesdetails");
  }
  function handleNavigate44() {
    navigate("/allmentors");
  }
  function handleNavigate45() {
    navigate("/eduvishop");
  }
  function handleNavigate46() {
    navigate("/login");
  }

  const [inputvalue, setInputvalue] = React.useState("");
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="bg-gray_100 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <header className="w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1280px] ml-[auto] mr-[auto] sm:mx-[0] mx-[auto] sm:my-[11px] md:my-[15px] my-[22px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Row className="header-row w-[14%] sm:w-[100%] sm:mx-[0] sm:px-[0] flex-row flex">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center">
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
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap sm:hidden md:ml-[37px] ml-[54px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%] common-row-list">
                <ul className="flex flex-row items-center justify-center sm:hidden">
                  <li className="w-[auto] sm:w-[100%] sm:my-[10px] my-[2px]">
                    <a
                      href={"javascript:"}
                      className="common-pointer cursor-pointer font-medium text-[16px] text-gray_901"
                      onClick={handleNavigate45}
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
                      className="font-medium text-[16px] text-gray_901"
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
                      onClick={handleNavigate44}
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
                className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap sm:hidden items-end justify-between md:ml-[22px] ml-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]"
                onClick={handleNavigate46}
              >
                <Text
                  className="flex-grow font-medium mb-[4px] sm:mt-[3px] md:mt-[4px] mt-[7px] text-gray_901"
                  variant="body5"
                >
                  My Account
                </Text>
                <Img
                  src="images/img_user_2.svg"
                  className="flex-shrink-0 sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[30px]"
                  alt="user"
                />
              </Row>
            </Row>
          </header>
          <Column className="flex flex-col justify-start sm:mt-[26px] md:mt-[34px] mt-[50px] w-[100%]">
            <Column className="bg-yellow_100 flex flex-col justify-end max-w-[1280px] md:ml-[55px] ml-[auto] mr-[auto] sm:mx-[0] md:p-[11px] sm:p-[15px] p-[17px] sm:pl-[15px] sm:pr-[15px] rounded-radius20 w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[13px] md:ml-[8px] mr-[auto] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                <Text
                  className="font-medium text-black_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body5"
                >
                  Home | Courses
                </Text>
                <Text
                  className="font-semibold leading-[50.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[34px] md:mt-[44px] mt-[65px] sm:mx-[0] text-gray_901 sm:w-[100%] w-[37%]"
                  as="h2"
                  variant="h2"
                >
                  Educatsy Courses
                  <br />
                  For All Standards
                </Text>
                <Stack className="font-airbnbcerealapp h-[233px] ml-[134px] sm:ml-[71px] md:ml-[92px] mt-[1px] relative sm:w-[100%] w-[40%]">
                  <Column className="absolute flex flex-col inset-y-[0] items-center justify-start w-[100%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Column className="flex flex-col items-center justify-start md:ml-[20px] ml-[30px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                        <List
                          className="sm:gap-[1px] md:gap-[2px] gap-[3.15px] grid min-h-[auto] w-[100%]"
                          orientation="vertical"
                        >
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                            <Text
                              className="text-deep_orange_400 w-[auto]"
                              variant="body6"
                            >
                              +
                            </Text>
                          </Row>
                        </List>
                      </Column>
                      <div className="backdrop-opacity-[0.5] bg-black_900_cc blur-[90.00px] md:h-[12px] h-[16px] sm:h-[9px] sm:mt-[51px] md:mt-[66px] mt-[96px] rounded-radius2155 w-[100%]"></div>
                    </Column>
                  </Column>
                  <Img
                    src="images/img_image_233X416.png"
                    className="absolute h-[233px] left-[3%] max-w-[100%] right-[1%] sm:w-[100%] w-[97%]"
                    alt="Image"
                  />
                </Stack>
              </Row>
            </Column>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1280px] md:ml-[55px] ml-[auto] mr-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] rounded-radius10 w-[100%]">
              <Button
                className="cursor-pointer font-medium min-w-[12%] text-[16px] text-center text-gray_901 w-[max-content]"
                size="lg"
                variant="FillWhiteA700"
              >
                All Courses
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[12%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[16px] text-center text-gray_901 w-[max-content]"
                size="lg"
                variant="FillWhiteA700"
              >
                Kindergarten
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[12%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[16px] text-center text-white_A700 w-[max-content]"
                size="lg"
                variant="FillOrange200"
              >
                High School
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[10%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[16px] text-center text-gray_901 w-[max-content]"
                size="lg"
                variant="FillWhiteA700"
              >
                College
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[11%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[16px] text-center text-gray_901 w-[max-content]"
                size="lg"
                variant="FillWhiteA700"
              >
                Computer
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[10%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[16px] text-center text-gray_901 w-[max-content]"
                size="lg"
                variant="FillWhiteA700"
              >
                Science
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[12%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[16px] text-center text-gray_901 w-[max-content]"
                size="lg"
                variant="FillWhiteA700"
              >
                Engineering
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[13%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[16px] text-center text-deep_orange_400 w-[max-content]"
                size="lg"
                variant="FillWhiteA700"
              >
                More Courses
              </Button>
            </Row>
            <Column
              className="common-pointer flex flex-col justify-start max-w-[1280px] md:ml-[55px] ml-[auto] mr-[auto] sm:mt-[26px] md:mt-[34px] mt-[50px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]"
              onClick={handleNavigate27}
            >
              <Text
                className="font-semibold text-gray_901 w-[auto]"
                as="h4"
                variant="h4"
              >
                Standard Classes
              </Text>
              <Column className="flex flex-col items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                <Grid className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] w-[100%]">
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_download.svg"
                      className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="download"
                    />
                    <Text
                      className="sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard One
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 1 is a foundation Standard that reflects 7
                      important concepts...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={handleNavigate40}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_download_50X50.svg"
                      className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="download One"
                    />
                    <Text
                      className="sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard Two
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 2 builds on the foundations of Standard 1 and
                      includes requirements...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={handleNavigate31}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_whatsapp.svg"
                      className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="whatsapp"
                    />
                    <Text
                      className="sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard Three
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 3 of the Aged Care Quality Standards applies to
                      all services delivering personal...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-white_A700 w-[max-content]"
                      onClick={handleNavigate39}
                      shape="RoundedBorder5"
                      size="sm"
                    >
                      Class Details
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_rewind.svg"
                      className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="rewind"
                    />
                    <Text
                      className="sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard Four
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 4 of the Aged Care Quality Standards focuses on
                      services and supports...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={handleNavigate32}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_music.svg"
                      className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="music"
                    />
                    <Text
                      className="sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard Five
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 5 Learning Resources. Learning Resources ensure
                      that the school has the...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={handleNavigate36}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_volume_50X50.svg"
                      className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="volume"
                    />
                    <Text
                      className="sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard Six
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 6 requires an organisation to have a system to
                      resolve complaints...
                    </Text>
                    <Button
                      className="cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_arrowdown.svg"
                      className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="arrowdown One"
                    />
                    <Text
                      className="sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard Seven
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 7 Blood Management mandates that leaders of
                      health service organizations...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={handleNavigate37}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_info.svg"
                      className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="info"
                    />
                    <Text
                      className="sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard Eight
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 8 Course from NCERT Solutions help students to
                      understand...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={handleNavigate38}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_volume_1.svg"
                      className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="volume One"
                    />
                    <Text
                      className="sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Standard Nine
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 5 Learning Resources. Learning Resources ensure
                      that the school has the...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={handleNavigate41}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_group.svg"
                      className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="Group"
                    />
                    <Text
                      className="sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      O- Level
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 6 requires an organisation to have a system to
                      resolve complaints...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={handleNavigate35}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </Column>
                  <Column className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-center md:p-[10px] p-[15px] sm:p-[7px] rounded-radius15 hover:shadow-bs hover:w-[100%] w-[100%]">
                    <Img
                      src="images/img_arrowup.svg"
                      className="sm:h-[27px] md:h-[35px] h-[50px] max-w-[100%] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="arrowup"
                    />
                    <Text
                      className="sm:mt-[10px] md:mt-[13px] mt-[20px] text-gray_901 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      A- Level
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-center text-gray_700 w-[100%]"
                      variant="body5"
                    >
                      Standard 6 requires an organisation to have a system to
                      resolve complaints...
                    </Text>
                    <Button
                      className="common-pointer cursor-pointer font-medium md:mb-[10px] mb-[15px] sm:mb-[7px] min-w-[63%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[16px] text-center text-red_300 w-[max-content]"
                      onClick={handleNavigate34}
                      shape="RoundedBorder5"
                      size="sm"
                      variant="OutlineRed300"
                    >
                      Class Details
                    </Button>
                  </Column>
                </Grid>
              </Column>
            </Column>
            <Text
              className="font-semibold sm:ml-[42px] md:ml-[55px] ml-[80px] md:mt-[103px] mt-[150px] sm:mt-[79px] text-gray_901 w-[auto]"
              as="h4"
              variant="h4"
            >
              Other Courses For High School
            </Text>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1280px] md:ml-[55px] ml-[auto] mr-[auto] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-medium p-[0] text-[16px] placeholder:text-gray_700_99 text-gray_700_99 w-[100%]"
                wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[66%]"
                name="search"
                placeholder="Search Class, Course"
                suffix={
                  <div className="w-[46px] h-[46px] sm:h-[25px] sm:w-[24px] sm:mx-[5px] md:h-[32px] md:w-[31px] md:mx-[7px] bg-red_300 rounded-radius8 mx-[11px] flex justify-center items-center">
                    inputvalue?.length>0?{" "}
                    <CloseSVG
                      className="cursor-pointer my-[auto]"
                      onClick={() => setInputvalue("")}
                      color="#995d5a6f"
                    />{" "}
                    :
                    <Img
                      src="images/img_search.svg"
                      className="cursor-pointer my-[auto]"
                      alt="search"
                    />
                  </div>
                }
                shape="srcRoundedBorder10"
                size="smSrc"
                variant="srcFillWhiteA700"
              ></Input>
              <SelectBox
                className="font-medium md:ml-[28px] ml-[42px] sm:mx-[0] text-[16px] text-gray_700_99 sm:w-[100%] w-[32%]"
                placeholderClassName="text-gray_700_99"
                name="Sortby"
                placeholder="Sort by: Latest"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_red_300.svg"
                    className="w-[24px] h-[24px] mr-[15px] sm:mr-[7px] sm:h-[13px] sm:w-[12px] md:mr-[10px] md:h-[17px] md:w-[16px] max-w-[100%]"
                    alt="arrow_down"
                  />
                }
                shape="RoundedBorder10"
                size="md"
                variant="FillWhiteA700"
              ></SelectBox>
            </Row>
            <Stack className="h-[879px] max-w-[1280px] sm:ml-[42px] md:ml-[55px] ml-[auto] mr-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
              <Row className="absolute bottom-[0] flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-start sm:mx-[0] mx-[auto] sm:px-[15px] md:px-[44px] px-[64px] sm:w-[100%] w-[23%]">
                <Text
                  className="font-medium mt-[14px] sm:mt-[7px] md:mt-[9px] text-gray_901 w-[auto]"
                  variant="body5"
                >
                  Page
                </Text>
                <Button
                  className="cursor-pointer font-medium sm:h-[24px] md:h-[31px] h-[44px] md:ml-[11px] ml-[16px] sm:ml-[8px] text-[18px] text-bluegray_800 text-center sm:w-[23px] md:w-[30px] w-[44px]"
                  size="sm"
                  variant="FillWhiteA700"
                >
                  5
                </Button>
                <Text
                  className="font-medium md:ml-[10px] ml-[15px] sm:ml-[7px] mt-[14px] sm:mt-[7px] md:mt-[9px] text-gray_901 w-[auto]"
                  variant="body5"
                >
                  of 13
                </Text>
              </Row>
              <Column className="absolute flex flex-col items-center justify-start w-[100%]">
                <Column className="flex flex-col items-center justify-start w-[100%]">
                  <Slider
                    slidesToShow={10}
                    activeIndex={sliderState}
                    onSlideChanged={(e) => {
                      setsliderState(e?.item);
                    }}
                    ref={sliderRef}
                    className="w-[100%]"
                    items={[...Array(30)].map(() => (
                      <React.Fragment key={Math.random()}>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] md:p-[10px] p-[15px] sm:p-[7px] rounded-radius10 sm:w-[100%]">
                          <Img
                            src="images/img_image_103X160.png"
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
                            variant="icbFillRed53"
                          >
                            <Img
                              src="images/img_bag.svg"
                              className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                              alt="bag One"
                            />
                          </Button>
                        </Row>
                      </React.Fragment>
                    ))}
                    Indicator={({ isActive }) => {
                      if (isActive) {
                        return <div className="" />;
                      }
                      return <div className="" role="button" tabIndex={0} />;
                    }}
                  />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[26px] md:mt-[34px] mt-[50px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                    <Button
                      className="cursor-pointer flex sm:h-[24px] md:h-[31px] h-[44px] items-center justify-center sm:w-[23px] md:w-[30px] w-[44px]"
                      onClick={() => sliderRef.current?.slidePrev()}
                      shape="icbRoundedBorder6"
                      size="mdIcn"
                      variant="icbFillWhiteA700"
                    >
                      <Img
                        src="images/img_arrowleft.svg"
                        className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                        alt="arrowleft"
                      />
                    </Button>
                    <Button
                      className="cursor-pointer flex sm:h-[24px] md:h-[31px] h-[44px] items-center justify-center sm:ml-[104px] md:ml-[134px] ml-[196px] sm:w-[23px] md:w-[30px] w-[44px]"
                      onClick={() => sliderRef.current?.slideNext()}
                      shape="icbRoundedBorder6"
                      size="mdIcn"
                      variant="icbFillRed300"
                    >
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                        alt="arrowright"
                      />
                    </Button>
                  </Row>
                </Column>
              </Column>
            </Stack>
            <Column className="bg-black_902 flex flex-col font-metropolis items-center justify-start max-w-[1280px] md:ml-[55px] ml-[auto] mr-[auto] md:mt-[103px] mt-[150px] sm:mt-[79px] sm:mx-[0] sm:p-[15px] md:p-[34px] p-[50px] sm:pl-[15px] sm:pr-[15px] rounded-radius20 w-[100%]">
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
                    alt="Ellipse170 One"
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

export default EduviCoursesPage;
