import * as React from "react";
import { Image, Text, View } from "react-native";

// styles
import { ListItemContent, ListItemIcon, ListItemItem, ListItemTitle, ListItemView } from "./ListItemStyle";

// components
import CustomCheckBox from "../CheckBox/CustomCheckBox";

// icons
import IconPersonOff from "../../assets/icons/icon-person-off.png";
import IconPersonOn from "../../assets/icons/icon-person-on.png";
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
  style?: string;
  onPress?: void;
}

const handleIcon = (value: string) => {
  if (value === "person") {
    return <ListItemIcon source={IconPersonOff} />;
  }
  if (value === "personOn") {
    return <ListItemIcon source={IconPersonOn} />;
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
  style,
  onPress,
}: ListItemProps) => (
  <ListItemView>
    <ListItemItem>
      {handleIcon("person")}
      <View>
        {
          title &&
          <ListItemTitle>{title}</ListItemTitle>
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
