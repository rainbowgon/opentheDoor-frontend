import React, { Children } from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import MapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";

interface CustomMapProps {
  region?: Region;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const CustomMap: React.FC<CustomMapProps> = ({ region, children, style }) => {
  return (
    <View>
      <MapView
        style={[styles.map, style]}
        provider={PROVIDER_GOOGLE}
        region={region}>
        {children}
      </MapView>
    </View>
  );
};

export default CustomMap;

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    minHeight: 300,
    minWidth: 400,
  },
});
