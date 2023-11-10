import React, { useState } from "react";
import Header from "../../components/Header/Header";
import {
  View,
  Button,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from "react-native";
// import { Rating } from "react-native-ratings";
import StarRating from "react-native-star-rating-widget";
// import BackgroundImg from "./components/BackgroundImg/BackgroundImg";
// import ImageDefault from "../../assets/images/image-default.png";
import ReviewTitle from "./components/ReviewTitle/ReviewTitle";
import EscapeInfo from "../../components/EscapeInfo/EscapeInfo";
import CustomButton from "../../components/Button/CustomButton";
import CustomCheckBox from "../../components/CheckBox/CustomCheckBox";
import DifficultySlider from "./components/DifficultySlider/DifficultySlider";
import UseHint from "./components/UseHint/UseHint";
import Input from "../../components/Input/Input";
import ReviewContent from "./components/ReviewContent/ReviewContent";
import { Alert } from "react-native";
import PageContainer from "../../styles/commonStyles";
// import { ImageBackground } from "react-native";

// export interface BackgroundImgProps = {
//   poster: string;
// };
export type BackgroundImgProps = {
  poster: string;
};

const handleReview = () => {
  console.log("리뷰작성 버튼");
  // alert("Review");
};

const ReviewScreen = () => {
  const [rating, setRating] = useState(0);
  return (
    <View style={styles.container}>
      <Button title="ReviewScreenDemo" />
      <ImageBackground
        source={{
          uri: "http://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
        }}
        style={styles.container}>
        <Header />
        <ScrollView>
          <View style={stylediv.container}></View>
          <ReviewTitle />
          <CustomButton
            size="xsmall"
            mode="static"
            border="round"
            value="공포"
          />
          <CustomButton
            size="xsmall"
            mode="static"
            border="round"
            value="에코"
          />
          <EscapeInfo
            price={120000}
            date={new Date()}
            minPerson={3}
            maxPerson={4}
          />
          <StarRating rating={rating} onChange={setRating} />
          <CustomCheckBox label="탈출 성공" />
          <DifficultySlider />
          <UseHint />
          <ReviewContent />
          <CustomButton
            size="medieum"
            mode="selected"
            border="round"
            value="리뷰 작성"
            onPress={handleReview}
          />
        </ScrollView>
      </ImageBackground>
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

const stylediv = StyleSheet.create({
  container: {
    height: 250,
  },
});

export default ReviewScreen;
