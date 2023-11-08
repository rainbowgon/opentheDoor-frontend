import React from 'react';
import { Text, Image, View, Button, ScrollView } from 'react-native';

// components
import Header from '../../components/Header/Header';
import CustomButton from '../../components/Button/CustomButton';
import EscapeInfo from '../../components/EscapeInfo/EscapeInfo';
import Input from '../../components/Input/Input';
import PageContainer from "../../styles/commonStyles";

// images
import ImageDefault from "../../assets/images/image-default.png";
import Calendar from '../../components/Calendar/Calendar';
import Dropdown from '../../components/Dropdown/Dropdown';


const ReservationScreen = () => {
  return (
    <PageContainer>
      <Button title="ReservationScreenDemo" />
      <Header />
      <View>
        <Image source={ImageDefault} />
      </View>
      <View>
        <Text>테마 제목</Text>
        <Text>지점 | 주소</Text>
        <View>
          {
            [...Array(3)].map((key, value) => (
              <CustomButton
                value={`테마 ${value}`}
              />
            ))
          }
        </View>
        <EscapeInfo
          price={120000}
          minPerson={1}
          maxPerson={2}
          date={new Date()}
        />
        <View>
          <Input
            label="예약자"
          />
        </View>
        <View>
          <Input
            label="전화번호"
          />
          <CustomButton value="번호 인증" />
        </View>
        <View>
          <Input
            label="인증번호 입력"
          />
        </View>
        <View>
          <Image source={ImageDefault} />
          <Text>슬라이드 바</Text>
          <Text>{ }</Text>
        </View>
        <Calendar />
        <View>
          <Text> 금액 </Text>
          <Text>{ } 원 </Text>
          <Text>인 당 { } 원 </Text>
        </View>
        <Text>사이트 이용약관</Text>
        <Dropdown />
        <Text>방탈출 이용약관</Text>
        <Dropdown />
      </View>
    </PageContainer>
  );
};

export default ReservationScreen;
