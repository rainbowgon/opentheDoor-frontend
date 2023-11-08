import * as React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

//icons

export interface CustomFabProps {
  icon?: any;
  mode?: any;
  style?: any;
  onPress?: any;
}

const CustomFab = ({ icon, mode, style, onPress }: CustomFabProps) => {
  return <FAB icon={icon} mode="flat" style={style} onPress={onPress} />;
};

// size
// Type : 'small' | 'medium' | 'large'
// Default : 'medium'

// mode
// Type: 'flat' | 'elevated'
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
