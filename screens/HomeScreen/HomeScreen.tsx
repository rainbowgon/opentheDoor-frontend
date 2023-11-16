import React from "react";
import { ScrollView, View } from "react-native";
// import CustomFab from "../../components/Fab/Fab";
// import ListItem from "../../components/ListItem/ListItem";
// import Dropdown from "../../components/Dropdown/Dropdown";
// import Header from "../../components/Header/Header";

// components
import Input from "../../components/Input/Input";
import HomeTitle from "./components/HomeTitle/HomeTitle";
import WeeklyTheme from "./components/WeeklyTheme/WeeklyTheme";
import NearByTheme from "./components/NearByTheme/NearByTheme";
import BookmarkedTheme from "./components/BookmarkedTheme/BookmarkedTheme";
import Header from "../../components/Header/Header";
import CustomButton from "../../components/Button/CustomButton";
import PageContainer, { FixedPageContainer } from "../../styles/commonStyles";
import { HomePageHeadContent } from "./HomeScreenStyle";
import InputHeadline from "./components/InputHeadline/InputHeadline";

const HomeScreen = ({ }) => {
  return (
    <FixedPageContainer>
      <Header
        alarm="true"
      />
      <PageContainer>
        <HomePageHeadContent>
          <HomeTitle />
          <InputHeadline />
        </HomePageHeadContent>
        <WeeklyTheme />
        <NearByTheme />
        <BookmarkedTheme />
      </PageContainer>
    </FixedPageContainer>
  );
};
export default HomeScreen;
