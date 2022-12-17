import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  SelectBox,
  List,
  Button,
  Grid,
  Stack,
  Input,
} from "components";
import { useNavigate } from "react-router-dom";

const EduviShopPage = () => {
  const navigate = useNavigate();

  function handleNavigate22() {
    navigate("/allmentors");
  }
  function handleNavigate23() {
    navigate("/eduvicourses");
  }
  function handleNavigate24() {
    navigate("/login");
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
                      className="cursor-pointer font-medium text-[16px] text-gray_901"
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
                      onClick={handleNavigate23}
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
                      onClick={handleNavigate22}
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
                onClick={handleNavigate24}
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
            <Row className="bg-red_52 flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1280px] ml-[auto] mr-[auto] sm:mx-[0] md:p-[13px] sm:p-[15px] p-[19px] sm:pl-[15px] sm:pr-[15px] rounded-radius20 w-[100%]">
              <Text
                className="font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] text-black_900 tracking-ls048 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                variant="body5"
              >
                Home | Shop
              </Text>
              <Text
                className="font-semibold leading-[50.00px] md:leading-[normal] sm:leading-[normal] ml-[1px] sm:mt-[34px] md:mt-[44px] mt-[65px] sm:mx-[0] text-gray_901 sm:w-[100%] w-[29%]"
                as="h2"
                variant="h2"
              >
                Educatsy Online
                <br />
                Book Shop
              </Text>
              <Img
                src="images/img_kisspngbookcas.png"
                className="max-w-[100%] mb-[1px] md:ml-[114px] ml-[167px] sm:ml-[88px] sm:mt-[10px] md:mt-[13px] mt-[20px] w-[31%]"
                alt="kisspngbookcas"
              />
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1280px] ml-[auto] mr-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <List
                className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid min-h-[auto] w-[32%]"
                orientation="vertical"
              >
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-semibold text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Popular Books
                  </Text>
                  <Column className="bg-white_A700 flex flex-col justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] md:p-[15px] sm:p-[15px] p-[22px] rounded-radius10 w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                      <Img
                        src="images/img_image14.png"
                        className="max-w-[100%] rounded-radius5 w-[24%]"
                        alt="imageFourteen"
                      />
                      <Column className="flex flex-col md:ml-[10px] ml-[15px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                        <Img
                          src="images/img_mobile.svg"
                          className="max-w-[100%] sm:w-[100%] w-[41%]"
                          alt="mobile"
                        />
                        <Text
                          className="font-semibold leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] text-black_900 w-[100%]"
                          variant="body4"
                        >
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </Text>
                        <Text
                          className="font-semibold mt-[10px] sm:mt-[5px] md:mt-[6px] text-red_300 w-[auto]"
                          variant="body4"
                        >
                          $39.00
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] md:p-[15px] sm:p-[15px] p-[22px] rounded-radius10 w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                      <Img
                        src="images/img_image_90X75.png"
                        className="max-w-[100%] rounded-radius5 w-[24%]"
                        alt="Image"
                      />
                      <Column className="flex flex-col md:ml-[10px] ml-[15px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                        <Img
                          src="images/img_mobile.svg"
                          className="max-w-[100%] sm:w-[100%] w-[41%]"
                          alt="mobile One"
                        />
                        <Text
                          className="font-semibold leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] text-black_900 w-[100%]"
                          variant="body4"
                        >
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </Text>
                        <Text
                          className="font-semibold mt-[10px] sm:mt-[5px] md:mt-[6px] text-red_300 w-[auto]"
                          variant="body4"
                        >
                          $39.00
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] md:p-[15px] sm:p-[15px] p-[22px] rounded-radius10 w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                      <Img
                        src="images/img_image_1.png"
                        className="max-w-[100%] rounded-radius5 w-[24%]"
                        alt="Image One"
                      />
                      <Column className="flex flex-col md:ml-[10px] ml-[15px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                        <Img
                          src="images/img_mobile.svg"
                          className="max-w-[100%] sm:w-[100%] w-[41%]"
                          alt="mobile Two"
                        />
                        <Text
                          className="font-semibold leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] text-black_900 w-[100%]"
                          variant="body4"
                        >
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </Text>
                        <Text
                          className="font-semibold mt-[10px] sm:mt-[5px] md:mt-[6px] text-red_300 w-[auto]"
                          variant="body4"
                        >
                          $39.00
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Text
                    className="font-medium sm:mt-[10px] md:mt-[13px] mt-[20px] text-red_300 w-[auto]"
                    variant="body3"
                  >
                    See More
                  </Text>
                </Column>
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-semibold text-black_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    New Arrivals
                  </Text>
                  <Column className="bg-white_A700 flex flex-col justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] md:p-[15px] sm:p-[15px] p-[22px] rounded-radius10 w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                      <Img
                        src="images/img_image14.png"
                        className="max-w-[100%] rounded-radius5 w-[24%]"
                        alt="imageFourteen One"
                      />
                      <Column className="flex flex-col md:ml-[10px] ml-[15px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                        <Img
                          src="images/img_mobile.svg"
                          className="max-w-[100%] sm:w-[100%] w-[41%]"
                          alt="mobile One"
                        />
                        <Text
                          className="font-semibold leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] text-black_900 w-[100%]"
                          variant="body4"
                        >
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </Text>
                        <Text
                          className="font-semibold mt-[10px] sm:mt-[5px] md:mt-[6px] text-red_300 w-[auto]"
                          variant="body4"
                        >
                          $39.00
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] md:p-[15px] sm:p-[15px] p-[22px] rounded-radius10 w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                      <Img
                        src="images/img_image_90X75.png"
                        className="max-w-[100%] rounded-radius5 w-[24%]"
                        alt="Image One"
                      />
                      <Column className="flex flex-col md:ml-[10px] ml-[15px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                        <Img
                          src="images/img_mobile.svg"
                          className="max-w-[100%] sm:w-[100%] w-[41%]"
                          alt="mobile One One"
                        />
                        <Text
                          className="font-semibold leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] text-black_900 w-[100%]"
                          variant="body4"
                        >
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </Text>
                        <Text
                          className="font-semibold mt-[10px] sm:mt-[5px] md:mt-[6px] text-red_300 w-[auto]"
                          variant="body4"
                        >
                          $39.00
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] md:p-[15px] sm:p-[15px] p-[22px] rounded-radius10 w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                      <Img
                        src="images/img_image_1.png"
                        className="max-w-[100%] rounded-radius5 w-[24%]"
                        alt="Image One One"
                      />
                      <Column className="flex flex-col md:ml-[10px] ml-[15px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                        <Img
                          src="images/img_mobile.svg"
                          className="max-w-[100%] sm:w-[100%] w-[41%]"
                          alt="mobile Two One"
                        />
                        <Text
                          className="font-semibold leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] text-black_900 w-[100%]"
                          variant="body4"
                        >
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </Text>
                        <Text
                          className="font-semibold mt-[10px] sm:mt-[5px] md:mt-[6px] text-red_300 w-[auto]"
                          variant="body4"
                        >
                          $39.00
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Text
                    className="font-medium sm:mt-[10px] md:mt-[13px] mt-[20px] text-red_300 w-[auto]"
                    variant="body3"
                  >
                    See More
                  </Text>
                </Column>
              </List>
              <Column className="flex flex-col justify-start md:ml-[27px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] rounded-radius10 sm:w-[100%] w-[74%]">
                  <Button
                    className="cursor-pointer font-medium min-w-[22%] text-[16px] text-center text-white_A700 w-[max-content]"
                    size="lg"
                    variant="FillOrange200"
                  >
                    All Books
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[25%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[16px] text-center text-gray_901 w-[max-content]"
                    size="lg"
                    variant="FillWhiteA700"
                  >
                    Kindergarten
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[25%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[16px] text-center text-gray_901 w-[max-content]"
                    size="lg"
                    variant="FillWhiteA700"
                  >
                    High School
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[20%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[16px] text-center text-gray_901 w-[max-content]"
                    size="lg"
                    variant="FillWhiteA700"
                  >
                    College
                  </Button>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                  <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:p-[3px] md:p-[4px] p-[7px] rounded-radius10 sm:w-[100%] w-[67%]">
                    <Text
                      className="font-medium ml-[13px] sm:ml-[6px] md:ml-[8px] text-gray_700_99 w-[auto]"
                      variant="body5"
                    >
                      Search Class, Course, Book Name
                    </Text>
                    <Button className="cursor-pointer sm:h-[25px] md:h-[32px] h-[46px] text-center sm:w-[24px] md:w-[31px] w-[46px]"></Button>
                  </Row>
                  <SelectBox
                    className="font-medium sm:mx-[0] text-[16px] text-gray_700_99 sm:w-[100%] w-[33%]"
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
                <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                  <Grid className="md:gap-[10px] gap-[15px] sm:gap-[7px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[100%]">
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] md:p-[13px] sm:p-[15px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image14.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius10 sm:w-[100%] w-[86%]"
                            alt="Image Two"
                          />
                        </Stack>
                        <Text
                          className="font-semibold md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_901 w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <Img
                            src="images/img_mobile.svg"
                            className="flex-shrink-0 max-w-[100%] w-[35%]"
                            alt="mobile Two"
                          />
                        </Row>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] md:p-[13px] sm:p-[15px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image_90X75.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius10 sm:w-[100%] w-[86%]"
                            alt="Image Three"
                          />
                        </Stack>
                        <Text
                          className="font-semibold md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_901 w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <Img
                            src="images/img_mobile.svg"
                            className="flex-shrink-0 max-w-[100%] w-[35%]"
                            alt="mobile Three"
                          />
                        </Row>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] md:p-[13px] sm:p-[15px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image_240X230.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius10 sm:w-[100%] w-[86%]"
                            alt="Image Four"
                          />
                        </Stack>
                        <Text
                          className="font-semibold md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_901 w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <Img
                            src="images/img_mobile.svg"
                            className="flex-shrink-0 max-w-[100%] w-[35%]"
                            alt="mobile Four"
                          />
                        </Row>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] md:p-[13px] sm:p-[15px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image_2.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius10 sm:w-[100%] w-[86%]"
                            alt="Image Five"
                          />
                        </Stack>
                        <Text
                          className="font-semibold md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_901 w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <Img
                            src="images/img_mobile.svg"
                            className="flex-shrink-0 max-w-[100%] w-[35%]"
                            alt="mobile Five"
                          />
                        </Row>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] md:p-[13px] sm:p-[15px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image_1.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius10 sm:w-[100%] w-[86%]"
                            alt="Image Six"
                          />
                        </Stack>
                        <Text
                          className="font-semibold md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_901 w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <Img
                            src="images/img_mobile.svg"
                            className="flex-shrink-0 max-w-[100%] w-[35%]"
                            alt="mobile Six"
                          />
                        </Row>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] md:p-[13px] sm:p-[15px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image_3.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius10 sm:w-[100%] w-[86%]"
                            alt="Image Seven"
                          />
                        </Stack>
                        <Text
                          className="font-semibold md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_901 w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <Img
                            src="images/img_mobile.svg"
                            className="flex-shrink-0 max-w-[100%] w-[35%]"
                            alt="mobile Seven"
                          />
                        </Row>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] md:p-[13px] sm:p-[15px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image_90X75.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius10 sm:w-[100%] w-[86%]"
                            alt="Image Eight"
                          />
                        </Stack>
                        <Text
                          className="font-semibold md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_901 w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <Img
                            src="images/img_mobile.svg"
                            className="flex-shrink-0 max-w-[100%] w-[35%]"
                            alt="mobile Eight"
                          />
                        </Row>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] md:p-[13px] sm:p-[15px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image14.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius10 sm:w-[100%] w-[86%]"
                            alt="Image Nine"
                          />
                        </Stack>
                        <Text
                          className="font-semibold md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_901 w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <Img
                            src="images/img_mobile.svg"
                            className="flex-shrink-0 max-w-[100%] w-[35%]"
                            alt="mobile Nine"
                          />
                        </Row>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Stack className="bg-white_A700 h-[280px] md:p-[13px] sm:p-[15px] p-[20px] relative rounded-radius10 w-[100%]">
                          <Img
                            src="images/img_image_1.png"
                            className="absolute h-[240px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius10 sm:w-[100%] w-[86%]"
                            alt="Image Ten"
                          />
                        </Stack>
                        <Text
                          className="font-semibold md:mt-[10px] mt-[15px] sm:mt-[7px] text-gray_901 w-[auto]"
                          variant="body4"
                        >
                          The Three Musketeers
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                          <Text
                            className="flex-grow font-semibold text-red_300"
                            variant="body4"
                          >
                            $40.00
                          </Text>
                          <Img
                            src="images/img_mobile.svg"
                            className="flex-shrink-0 max-w-[100%] w-[35%]"
                            alt="mobile Ten"
                          />
                        </Row>
                      </Column>
                    </Column>
                  </Grid>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center md:ml-[191px] ml-[278px] sm:mt-[26px] md:mt-[34px] mt-[50px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                  <Button
                    className="flex sm:h-[24px] md:h-[31px] h-[44px] items-center justify-center sm:w-[23px] md:w-[30px] w-[44px]"
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
                  <Text
                    className="font-medium sm:ml-[10px] md:ml-[13px] ml-[20px] mt-[14px] sm:mt-[7px] md:mt-[9px] text-gray_901 w-[auto]"
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
                    of 80
                  </Text>
                  <Button
                    className="flex sm:h-[24px] md:h-[31px] h-[44px] items-center justify-center sm:ml-[11px] md:ml-[14px] ml-[21px] sm:w-[23px] md:w-[30px] w-[44px]"
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
            </Row>
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

export default EduviShopPage;
