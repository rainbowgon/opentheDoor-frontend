import * as React from 'react';

import {Image, Text, View} from 'react-native';

// components
import CustomCheckBox from '../CheckBox/CustomCheckBox';

// icons
import IconPersonOn from '../../assets/icons/icon-person-on.png';
import IconPersonGroup from '../../assets/icons/icon-person-group.png';

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
  title: string;
  subTitle?: string;
  right?: string;
  style?: string;
}

const handleIcon = (value: string) => {
  if (value === 'person') {
    return <Image source={IconPersonOn} />;
  } else if (value === 'personGroup') {
    return <Image source={IconPersonGroup} />;
  }
  return <View />;
};

const handleRight = (value: string) => {
  if (value === 'checkbox') {
    return <CustomCheckBox />;
  }
  return <View />;
};

const ListItem = ({
  icon = 'none',
  title,
  subTitle,
  right = 'none',
  style,
}: ListItemProps) => (
  <View>
    {icon && handleIcon(icon)}
    <View>
      <Text>{title}</Text>
      <Text>{subTitle}</Text>
    </View>
    {right && handleRight(right)}
  </View>
);

export default ListItem;
