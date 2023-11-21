import React, { Children } from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import MapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";

interface CustomMapProps {
  region?: Region;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  scrollEnabled?: boolean;
  zoomEnabled?: boolean;
  rotateEnabled?: boolean;
  pitchEnabled?: boolean;
}

const customMapStyle = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  // 여기에 필요한 추가 스타일 규칙을 추가할 수 있습니다.
];

const CustomMap: React.FC<CustomMapProps> = ({
  region,
  children,
  style,
  scrollEnabled,
  zoomEnabled,
  rotateEnabled,
  pitchEnabled,
}) => {
  return (
    <View>
      <MapView
        style={[styles.map, style]}
        provider={PROVIDER_GOOGLE}
        region={region}
        scrollEnabled={scrollEnabled}
        zoomEnabled={zoomEnabled}
        rotateEnabled={rotateEnabled}
        pitchEnabled={pitchEnabled}
        customMapStyle={customMapStyle}>
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
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
});
