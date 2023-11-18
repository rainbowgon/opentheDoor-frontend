import * as React from "react";
import { Image, Text, View } from "react-native";

// styles
import { ListItemContent, ListItemIcon, ListItemItem, ListItemTitle, ListItemView } from "./ListItemStyle";

// components
import CustomCheckBox from "../CheckBox/CustomCheckBox";

// icons
import IconPersonOff from "../../assets/icons/icon-person-off.png";
import IconPersonOn from "../../assets/icons/icon-person-on.png";
import IconNotificationsOn from "../../assets/icons/icon-notifications-on.png";
import IconNotificationsOff from "../../assets/icons/icon-notifications-off.png";
import IconNotificationsFill from "../../assets/icons/icon-notifications-fill.png";
import IconPersonGroup from "../../assets/icons/icon-person-group.png";

//TODO - create ListItem Custom Style

/**
 * [icon]
 * type : "person", "personGroup", "none"
 * Default value: "none"
 *
 * [right]
 * type : "checkbox", "none"
 * Default value: "none"
 * */

export interface ListItemProps {
  icon?: string;
  title?: string;
  content?: string;
  right?: string;
  color?: "white" | "success" | "warn" | "info" | "error" | "disable";
  style?: string;
  onPress?: void;
}

const handleIcon = (value: string) => {
  if (value === "personOff") {
    return <ListItemIcon source={IconPersonOff} />;
  }
  if (value === "personOn") {
    return <ListItemIcon source={IconPersonOn} />;
  }
  if (value === "notificationsOn") {
    return <ListItemIcon source={IconNotificationsOn} />;
  }
  if (value === "notificationsOff") {
    return <ListItemIcon source={IconNotificationsOff} />;
  }
  if (value === "notificationsFill") {
    return <ListItemIcon source={IconNotificationsFill} />;
  }
  if (value === "personGroup") {
    return <ListItemIcon source={IconPersonGroup} />;
  }
};

const handleRight = (value: string) => {
  if (value === "checkbox") {
    return <CustomCheckBox />;
  }
};

const ListItem = ({
  icon = "none",
  title,
  content,
  right = "none",
  color,
  style,
  onPress,
}: ListItemProps) => (
  <ListItemView>
    <ListItemItem>
      {handleIcon(icon)}
      <View>
        {
          title &&
          <ListItemTitle color={color}>{title}</ListItemTitle>
        }
        {
          content &&
          <ListItemContent>{content}</ListItemContent>
        }
      </View>
    </ListItemItem>
    {handleRight(right)}
  </ListItemView>
);

export default ListItem;
