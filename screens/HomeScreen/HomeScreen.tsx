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
import PageContainer from "../../styles/commonStyles";

const HomeScreen = ({ }) => {
  return (
    <PageContainer>
      <ScrollView>
        <Header />
        <HomeTitle />
        <Input label="테마 검색" />
        <CustomButton value="검색" size="small" mode="static" border="square" />
        <WeeklyTheme />
        <NearByTheme />
        <BookmarkedTheme />
      </ScrollView>
    </PageContainer>
  );
};
export default HomeScreen;
