import React from 'react';
import { View, Button, ScrollView, Image, Text } from 'react-native';

// components
import CustomButton from '../../components/Button/CustomButton';

// images
import ImageDefault from "../../assets/images/image-default.png";

// icons
import StarOn from '../../assets/icons/icon-star-on.png';
import Calendar from '../../components/Calendar/Calendar';
import BarGraph from '../../components/BarGraph/BarGraph';
import EscapeInfo from '../../components/EscapeInfo/EscapeInfo';
import PageContainer from "../../styles/commonStyles";

const ThemeDetailScreen = () => {
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
            <CustomButton
              value="장르1"
            />
            <CustomButton
              value="장르2"
            />
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
            {/* TODO - 지도 삽입 
              <View>
              </View>
            */}
          </View>
          <View>
            <Text>내가 쓴 리뷰</Text>
            <CustomButton
              value="삭제"
            />
            <CustomButton
              value="수정"
            />
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
            <View>
              <BarGraph />
            </View>
            <View>
              <Text>리뷰 리스트</Text>
            </View>
            <CustomButton
              value="리뷰 더 보기"
            />
          </View>
          <View>
            <CustomButton
              value="리뷰 쓰기"
            />
            <CustomButton
              value="예약 or 예약 대기"
            />
          </View>
        </View>
      </View>
    </PageContainer>
  );
};

export default ThemeDetailScreen;
