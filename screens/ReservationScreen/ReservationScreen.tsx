import React, { useEffect, useState } from "react";
import {
  Text,
  Image,
  View,
  Button,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";

// components
import Header from "../../components/Header/Header";
import CustomButton from "../../components/Button/CustomButton";
import EscapeInfo from "../../components/EscapeInfo/EscapeInfo";
import Input from "../../components/Input/Input";
import PageContainer from "../../styles/commonStyles";

// images
import Capacity from "../../assets/icons/icon-explanation-capacity.png";
import ImageDefault from "../../assets/images/image-default.png";
import Calendar from "../../components/Calendar/Calendar";
import Dropdown from "../../components/Dropdown/Dropdown";
import { themeState } from "../../recoil/theme/theme";
import { useRecoilValue } from "recoil";
import {
  GenreListView,
  GetImageView,
  ThemeDetailContainer,
  ThemeDetailContent,
  ThemeDetailImage,
  ThemeDetailScrollView,
} from "./ReservationScreenStyle";
import { MainTitle } from "../ThemeDetailScreen/components/ThemeTitleContent/ThemeTitleContentStyle";
import { SubContent } from "../ThemeDetailScreen/ThemeDetailScreenStyle";
import LinearGradient from "react-native-linear-gradient";
import HeadCountSlider from "./HeadCountSlider/HeadCountSlider";
import BarGraph from "../../components/BarGraph/BarGraph";
import BarGraphItem from "../../components/BarGraph/components/BarGraphItem/BarGraphItem";
import { API_URL } from "../../constants/urls";
import axios from "axios";
import { memberState } from "../../recoil/member/member";

const ReservationScreen = () => {
  const theme = useRecoilValue(themeState);
  const [bookerName, setBookerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [inputInfo, setInputInfo] = useState({
    bookername: "",
    bookerPhoneNumber: "",
  });
  const [reservationInfo, setReservationInfo] = useState(null);
  const [reservationData, setReservationData] = useState({
    targetDate: "",
    targetTime: "",
    headcount: 5,
    bookerName: "",
    bookerPhoneNumber: "",
    themeId: theme.themeId,
  });

  useEffect(() => {
    const fetchReservationInfo = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/reservation-service/reservations/auth/gfMKrosB1FRWDsEDn_Td`,
        );
        setReservationInfo(response.data.data); // API 응답 데이터로 상태 업데이트
        console.log("set 완료", response.data.data);
      } catch (error) {
        console.error("Failed to fetch reservation info", error);
      }
    };

    fetchReservationInfo();
  }, []);

  const handleReservation = async () => {
    try {
      const response = await axios.post(
        `${API_URL}/reservation-service/reservations/auth`,
        reservationData,
      );
      Alert.alert("Reservation Successful!", response.data.message);
    } catch (error) {
      console.error("Reservation failed", error);
      Alert.alert("Reservation Failed", error.response.data.message);
    }
  };

  useEffect;

  const MemberServicePath = `/member-service`;

  const MemberAPI = "/members";
  const OauthAPI = "/oauth";

  async function handleNumberAuthentication() {
    // 전화번호 형식 검사
    if (inputInfo.bookerPhoneNumber.length !== 11) {
      Alert.alert("-를 제외한 11자리 숫자를 입력해주세요");
      return; // 오류 발생 시 여기서 함수 종료
    }

    const data = {
      phoneNumber: inputInfo.bookerPhoneNumber,
    };

    try {
      const response = await axios.post(
        `${API_URL}${MemberServicePath}${MemberAPI}/phone`,
        data,
      );
      console.log("전화번호 본인 인증 성공", response.data);
      Alert.alert("본인 인증 번호가 발급되었습니다!");
    } catch (error) {
      console.error("전화번호 본인 인증 실패", error);
      Alert.alert(
        "전화번호 본인 인증 실패",
        error.response?.data?.message || "Unknown error occurred",
      );
    }
  }

  const handleReserve = () => {
    if (!agreedToTerms) {
      Alert(
        "You must agree to the terms and conditions before making a reservation.",
      );
      return;
    }
    // Implement reservation logic here
  };

  const renderAvailableTimes = () => {
    const availableTimes = theme.timeSlotList[0]?.timeList.filter(
      time => time.isAvailable === "AVAILABLE",
    );
    return availableTimes.map((time, index) => (
      <CustomButton
        key={index}
        value={time.time}
        onPress={() => (reservationRequestData.time = time.time)}
      />
    ));
  };

  // 예약 요청 데이터
  const reservationRequestData = {
    themeId: theme.themeId,
    date: "", // 선택한 날짜
    time: "", // 선택한 시간
    bookerName: bookerName,
    bookerPhoneNumber: phoneNumber,
  };

  return (
    <ThemeDetailContainer>
      {/* <Button title="ReservationScreenDemo" /> */}
      <ThemeDetailImage
        // source={ImageDefault}
        source={{ uri: theme.poster }}
        onError={error => console.error("Image load error:", error)}
      />
      <ThemeDetailScrollView>
        <Header back="true" />
        <GetImageView>
          <LinearGradient
            colors={[
              "rgba(255, 255, 255, 0)",
              "rgba(255, 255, 255, 0)",
              "rgba(25, 24, 29, 1)",
            ]}
            style={styles.linearGradient}
          />
        </GetImageView>
        <ThemeDetailContent>
          <View>
            <MainTitle>{theme.title}</MainTitle>
            <SubContent>{theme?.venue}</SubContent>
            <GenreListView>
              {theme?.genre?.map((genre, index) => (
                <CustomButton
                  key={index}
                  mode="selected"
                  size="xsmall"
                  border="round"
                  value={genre}
                />
              ))}
            </GenreListView>
            <Text>{theme?.priceList?.price}</Text>
            <EscapeInfo
              price={theme?.priceList?.price}
              minPerson={theme?.minHeadcount}
              maxPerson={theme?.maxHeadcount}
              date={new Date()}
            />
            {/* <EscapeInfo
          price={theme.priceList[0].price}
          minPerson={theme.priceList[0].headcount}
          maxPerson={theme.priceList[theme.priceList.length - 1].headcount}
          date={new Date()}
        /> */}
            <View>
              <Input
                label="예약자"
                value={reservationData.bookerName}
                onChangeText={text =>
                  setReservationData({ ...reservationData, bookerName: text })
                }
                editable={false}
              />
            </View>
            <View>
              <Input
                label="전화번호"
                value={reservationData.bookerPhoneNumber}
                onChangeText={text =>
                  setReservationData({
                    ...reservationData,
                    bookerPhoneNumber: text,
                  })
                }
                editable={false}
              />
              <CustomButton
                mode="selected"
                size="medium"
                border="square"
                value="번호 인증"
                onPress={handleNumberAuthentication}
              />
            </View>
            <View>
              <Input label="인증번호 입력" />
            </View>
            <View>
              {/* <Image source={Capacity} /> */}
              <BarGraphItem type={"capacity"} value={50} />
              <Text>{}</Text>
            </View>
            <Calendar />
            <View>
              <Text> 금액 </Text>
              <Text>{} 원 </Text>
              <Text>인 당 {} 원 </Text>
            </View>
            <Text>사이트 이용약관</Text>
            <Dropdown />
            <Text>방탈출 이용약관</Text>
            <Dropdown />
          </View>
        </ThemeDetailContent>
      </ThemeDetailScrollView>
    </ThemeDetailContainer>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
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

export default ReservationScreen;
