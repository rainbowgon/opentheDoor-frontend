import React from "react";
import {
  View,
  Button,
  ScrollView,
  ImageBackground,
  Text,
  StyleSheet,
} from "react-native";
import ImageDefault from "../../../../assets/images/image-default.png";

export type BackgroundImgProps = {
  poster: string;
};

const BackgroundImg = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
        }}
        style={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
export default BackgroundImg;
