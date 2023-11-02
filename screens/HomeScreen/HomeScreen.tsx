import React from "react";
import { ScrollView, Button, View } from "react-native";
import CustomButton from "../../components/Button/CustomButton";
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

const HomeScreen = ({}) => {
  return (
    <View>
      <ScrollView>
        <Header />
        <HomeTitle />
        <Input label="테마 검색" />
        <WeeklyTheme />
        <NearByTheme />
        <BookmarkedTheme />
        <CustomButton value="Press" />
      </ScrollView>
    </View>
  );
};
export default HomeScreen;
