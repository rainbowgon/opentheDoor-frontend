import React from "react";
import { ScrollView, View } from "react-native";
import CustomButton from "../../components/Button/Button";
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
import Button from "../../components/Button/Button";

const HomeScreen = ({}) => {
  return (
    <View>
      <ScrollView>
        <Header />
        <HomeTitle />
        <Input label="테마 검색" />
        <Button value="검색" size="small" mode="static" border="square" />
        <WeeklyTheme />
        <NearByTheme />
        <BookmarkedTheme />
      </ScrollView>
    </View>
  );
};
export default HomeScreen;
