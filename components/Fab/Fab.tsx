import * as React from "react";
import { StyleSheet, View } from "react-native";
import { FAB } from "react-native-paper";
import { Fab, FabImage } from "./FabStyle";
import { Image } from "react-native";

//icons

export interface CustomFabProps {
  icon?: any;
  type?: 'small' | 'medium' | 'large';
  mode?: 'flat' | 'elevated';
  style?: any;
  onPress?: any;
}

const CustomFab = ({ icon, type, mode, style, onPress }: CustomFabProps) => {
  return <Fab type="medium" mode="flat" style={style} onPress={onPress}>
    <FabImage source={icon} />
  </Fab>
};

// size
// Type : 'small' | 'medium' | 'large'
// Default : 'medium'

// mode
// Type: 
// Default value: 'elevated'

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default CustomFab;
