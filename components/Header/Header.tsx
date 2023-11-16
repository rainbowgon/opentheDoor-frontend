import * as React from "react";
import { Image } from "react-native";
import { Appbar } from "react-native-paper";

import Backarrow from "../../assets/icons/icon-backarrow.png"
import NotificationsOn from "../../assets/icons/icon-notifications-on.png"
import MenuThreedot from "../../assets/icons/icon-menu-threedot.png"
import BookmarkOff from "../../assets/icons/icon-bookmark-off.png"
import Filter from "../../assets/icons/icon-filter.png"
import { useNavigation } from "@react-navigation/native";
export interface HeaderProps {
  back?: "true" | "false";
  alarm?: "true" | "false";
  menu?: "true" | "false";
  filter?: "true" | "false";
  bookmark?: "true" | "false";
}

const Header = ({
  back,
  alarm,
  menu,
  filter,
  bookmark,
}: HeaderProps) => {
  const navigation = useNavigation();

  const goBack = () => {
    console.log("back 페이지로 이동")
    navigation.goBack();
  };
  const handleAlarm = () => {
    console.log("alarm 페이지로 이동")
    navigation.navigate("alarm");
  };
  const handleSetting = () => {
    console.log("setting 페이지로 이동")
    navigation.navigate("setting");
  };
  const handleFilter = () => console.log("Filter");
  const handleBookmark = () => console.log("Bookmark");

  return (
    <Appbar.Header style={{ backgroundColor: "transparent" }}>
      {
        back === "true" &&
        <Appbar.Action
          icon={props => (
            <Image
              source={Backarrow}
              style={{ width: 24, height: 24 }}
            />
          )}
          onPress={goBack}
        />
      }

      <Appbar.Content title="" />

      {
        alarm === "true" &&
        <Appbar.Action
          icon={props => (
            <Image
              source={NotificationsOn}
              style={{ width: 24, height: 24 }}
            />
          )}
          onPress={handleAlarm}
        />
      }

      {
        menu === "true" &&
        <Appbar.Action
          icon={props => (
            <Image
              source={MenuThreedot}
              style={{ width: 24, height: 24 }}
            />
          )}
          onPress={handleSetting}
        />
      }

      {
        filter === "true" &&
        <Appbar.Action
          icon={props => (
            <Image
              source={Filter}
              style={{ width: 24, height: 24 }}
            />
          )}
          onPress={handleFilter}
        />
      }

      {
        bookmark === "true" &&
        <Appbar.Action
          icon={props => (
            <Image
              source={BookmarkOff}
              style={{ width: 24, height: 24 }}
            />
          )}
          onPress={handleBookmark}
        />
      }
    </Appbar.Header>
  );
};

export default Header;

// Props
// dark : boolean

// mode Available in v5.x with theme version 3
// Type: 'small' | 'medium' | 'large' | 'center-aligned'

// Default value: Platform.OS === 'ios' ? 'center-aligned' : 'small'

// Mode of the Appbar.

// small - Appbar with default height (64).
// medium - Appbar with medium height (112).
// large - Appbar with large height (152).
// center-aligned - Appbar with default height and center-aligned title.

// statusBarHeight : 상단 패딩
