import * as React from 'react';

import { Image, Text, View } from 'react-native';

// components
import CustomCheckBox from '../CheckBox/CustomCheckBox';

// icons
import Person from '../../assets/icons/icon-person-off.png';

//TODO - create ListItem Custom Style

/**
 * [icon]
 * type : "person"
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
}

const handleIcon = (value: string) => {
  if (value === 'person') {
    return <Image source={Person} />;
  }
  return;
}

const handleRight = (value: string) => {
  if (value === 'checkbox') {
    return <CustomCheckBox />;
  }
  return;
}

const ListItem = ({
  icon,
  title,
  subTitle,
  right
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
