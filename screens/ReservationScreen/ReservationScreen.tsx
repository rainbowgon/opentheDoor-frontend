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
  InputView,
  InputViews,
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
import { userAccessToken } from "../../recoil/member/member";
import { useNavigation } from "@react-navigation/native";
import { IconImage } from "../../components/InfoCard/InfoCardStyle";

const ReservationScreen = () => {
  const theme = useRecoilValue(themeState);
  const [reservationInfo, setReservationInfo] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookerName, setBookerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [inputInfo, setInputInfo] = useState({
    bookername: "",
    bookerPhoneNumber: "",
  });
  const [reservationData, setReservationData] = useState({
    targetDate: selectedDate,
    targetTime: selectedTime,
    headcount: 4,
    bookerName: bookerName,
    bookerPhoneNumber: null,
    themeId: theme.themeId,
  });

  const accessToken = useRecoilValue(userAccessToken);

  const handleSubmitReservation = async () => {
    if (!selectedDate || !selectedTime) {
      Alert.alert("날짜와 시간을 선택해주세요!");
      return;
    }
    if (reservationData.headcount <= 0) {
      Alert.alert("인원을 설정해주세요!");
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}/reservation-service/reservations/unauth`,
        reservationData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      goBack();
      Alert.alert("예약 성공", response.data.message);
    } catch (error) {
      console.error("예약 실패", error);
      Alert.alert("예약 성공");
    }
    goBack();
  };

  const handleTimeSelect = value => {
    setSelectedTime(value);
    console.log("time은", selectedTime);
    setReservationData(prevData => ({
      ...prevData,
      targetTime: value,
    }));
  };
  useEffect(() => {
    console.log("selectedDate", selectedDate);
  }, [selectedDate]);

  // selectedTime이 바뀔 때 추적하기 위해 이 useEffect를 추가
  useEffect(() => {
    console.log("selectedTime", selectedTime);
  }, [selectedTime]);

  useEffect(() => {
    const themeId = theme.themeId;
    const fetchReservationInfo = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/reservation-service/reservations/unauth/${themeId}`,
        );
        setReservationData(response.data.data);
        console.log("Fetch 성공!", response.data.data);
      } catch (error) {
        // console.error("Fetch 실패!", error);
      }
    };

    fetchReservationInfo();
  }, []);

  useEffect(() => {
    if (selectedDate && selectedTime) {
      setReservationData({
        ...reservationData,
        targetDate: selectedDate,
        targetTime: selectedTime,
      });
    }
  }, [selectedDate, selectedTime]);

  const MemberServicePath = `/member-service`;

  const navigation = useNavigation();

  const goBack = () => {
    console.log("back 페이지로 이동");
    navigation.goBack();
  };
  const MemberAPI = "/members";
  const OauthAPI = "/oauth";

  const calculatePricePerPerson = headcount => {
    const priceInfo = reservationInfo?.priceList?.find(
      p => p.headcount === headcount,
    );
    return priceInfo ? priceInfo.price : null;
  };

  const [person, setPerson] = useState(null);

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
            <InputViews>
              <InputView>
                <Input
                  label="예약자"
                  value={reservationData.bookerName}
                  onChangeText={text =>
                    setReservationData({ ...reservationData, bookerName: text })
                  }
                />
              </InputView>
              <InputView>
                <Input
                  label="전화번호"
                  value={reservationData.bookerPhoneNumber}
                  onChangeText={text =>
                    setReservationData({
                      ...reservationData,
                      bookerPhoneNumber: text,
                    })
                  }
                />
              </InputView>

              {/* <InputView>
              </InputView> */}
            </InputViews>
            <View>
              {/* <CustomButton
                mode="selected"
                size="medium"
                border="square"
                value="번호 인증"
                onPress={handleNumberAuthentication}
              /> */}
            </View>
            {/* <View>
              <Input label="인증번호 입력" />
            </View> */}
            {/* <InputViews> */}
            {/* <IconImage source={Capacity} /> */}
            {/* <Input
                label="인원"
                value={person}
                onChangeText={text =>
                  setPerson({
                    text
                  })
                }
                editable={false}
              /> */}
            {/* <BarGraphItem type={"capacity"} value={50} /> */}
            {/* <Text>{인원선택}</Text> */}
            {/* </InputViews> */}
            <Calendar
              timeSlotList={reservationData?.timeSlotList}
              onDateSelect={setSelectedDate}
              onTimeSelect={setSelectedTime}
            />
            {/* {reservationInfo?.timeSlotList.map((slot, index) => (
              <View key={index}>
                {slot.date === selectedDate &&
                  slot.timeList.map((time, timeIndex) => (
                    <CustomButton
                      key={timeIndex}
                      mode={
                        time.isAvailable === "AVAILABLE"
                          ? "selected"
                          : "inactive"
                      }
                      value={time.time}
                      onPress={() => handleTimeSelect(time.time)}
                    />
                  ))}
              </View>
            ))} */}
            {/* <View>
              <Text> 금액 </Text>
              <Text>
                총 {calculatePricePerPerson(reservationData.headcount)} 원{" "}
              </Text>
              <Text>인당 {calculatePricePerPerson(1)} 원 </Text>
            </View> */}
            {/* <Text>사이트 이용약관</Text> */}
            <CustomButton
              mode="selected"
              size="large"
              value="예약하기"
              onPress={handleSubmitReservation}
            />
            {/* <Dropdown data={[reservationInfo?.siteToS]} />
            <Text>방탈출 이용약관</Text>
            <Dropdown data={[reservationInfo?.venueToS]} /> */}
            <CustomButton
              mode="selected"
              size="large"
              value="예약하기"
              onPress={handleSubmitReservation}
            />
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
