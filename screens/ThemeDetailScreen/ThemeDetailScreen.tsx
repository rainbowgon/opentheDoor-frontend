import React, { useState } from "react";
import { View, Button, ScrollView, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Marker, Region } from "react-native-maps";

// components
import CustomButton from "../../components/Button/CustomButton";
import CustomMap from "../../components/Maps/Map";
import CustomFab from "../../components/Fab/Fab";

// images
import ImageDefault from "../../assets/images/image-default.png";

// icons
import StarOn from "../../assets/icons/icon-star-on.png";
import Calendar from "../../components/Calendar/Calendar";
import BarGraph from "../../components/BarGraph/BarGraph";
import EscapeInfo from "../../components/EscapeInfo/EscapeInfo";
import PageContainer from "../../styles/commonStyles";
import ZoomIcon from "../../assets/icons/icon-zoom.png";

const ThemeDetailScreen = () => {
  const [region, setRegion] = useState<Region>({
    latitude: 37.5665,
    longitude: 126.978,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const navigation = useNavigation();

  return (
    <PageContainer>
      <View>
        <Button title="ThemeDetailScreenDemo" />
        <Image source={ImageDefault} />
        <View>
          <View>
            <Text>테마 제목</Text>
            <Text>지점</Text>
            <Text>주소</Text>
            <CustomButton value="장르1" />
            <CustomButton value="장르2" />
          </View>
          <View>
            <Image source={StarOn} />
            <Text>별점</Text>
            <Text>리뷰 수</Text>
          </View>
          <View>
            <View>
              <Text>난이도</Text>
              <Text>점수</Text>
              <Text>/5</Text>
            </View>
            <View>
              <Text>장치 비율</Text>
              <Text>점수</Text>
              <Text>/5</Text>
            </View>
            <View>
              <Text>활동성</Text>
              <Text>점수</Text>
              <Text>/5</Text>
            </View>
            <View>
              <Text>공포도</Text>
              <Text>점수</Text>
              <Text>/5</Text>
            </View>
          </View>
          <EscapeInfo
            price={120000}
            minPerson={1}
            maxPerson={2}
            date={new Date()}
          />
          <View>
            <Calendar />
          </View>
          <View>
            <Text>이 가게 위치</Text>
            {/* FIXME - 현재는 default(서울시청) 기반, 추후 axios로 받아온 가게 데이터로 변경해야해요  */}
            <View>
              <CustomMap
                region={region}
                style={{ minHeight: 200, minWidth: 300 }}>
                <Marker coordinate={region} title={"이 가게 위치"} />
              </CustomMap>
              <CustomFab
                icon={ZoomIcon}
                onPress={() => navigation.navigate("searchStack")}
              />
            </View>
          </View>
          <View>
            <Text>내가 쓴 리뷰</Text>
            <CustomButton value="삭제" />
            <CustomButton value="수정" />
            <Text>내가 쓴 리뷰 아이템</Text>
          </View>
          <View>
            <Text>리뷰</Text>
            <View>
              <Image source={StarOn} />
              <Text>별점</Text>
              <Text>리뷰 수</Text>
            </View>
            <Text>총 { }건</Text>
            <BarGraph />
            <View>
              <Text>리뷰 리스트</Text>
            </View>
            <CustomButton value="리뷰 더 보기" />
          </View>
          <View>
            <CustomButton value="리뷰 쓰기" />
            <CustomButton value="예약 or 예약 대기" />
          </View>
        </View>
      </View>
    </PageContainer>
  );
};

export default ThemeDetailScreen;
