import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Region } from "react-native-maps";

interface CustomMapProps {
  region: Region;
}

const CustomMap: React.FC<CustomMapProps> = ({ region }) => {
  return (
    <View style={styles.mapContainer}>
      <MapView style={styles.map} provider={PROVIDER_GOOGLE} region={region} />
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
