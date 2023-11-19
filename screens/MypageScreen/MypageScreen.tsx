import React from 'react';
import { View, Button, ScrollView } from 'react-native';

import UserProfile from './components/UserProfile/UserProfile';
import ReservationInfo from './components/ReservationInfo/ReservationInfo';
import UserFeatureList from './components/UserFeatureList/UserFeatureList';
import NonUserFeatureList from './components/NonUserFeatureList/NonUserFeatureList';
import MypageLogin from './components/MypageLogin/MypageLogin';

import Logo from '../../assets/images/image-logo.png';

// styled components
import PageContainer, { FixedPageContainer } from '../../styles/commonStyles';
import Header from "../../components/Header/Header";
import { MypageContainer, MypageLogoImage, MypageLogoImageView } from "./MypageScreenStyle";
import { useRecoilValue } from "recoil";
import { userAccessToken } from "../../recoil/member/member";

const MypageScreen = () => {
  const accessToken = useRecoilValue(userAccessToken);

  return (
    <FixedPageContainer>
      <MypageContainer>
        {
          accessToken !== ""
            ? <>
              <Header
                back="true"
                alarm="true"
                menu="true"
              />
              <UserProfile />
              <View>
                <ReservationInfo />
                <UserFeatureList />
              </View>
            </>
            : <>
              <Header
                back="true"
              />
              <MypageLogoImageView>
                <MypageLogoImage
                  source={Logo}
                />
              </MypageLogoImageView>
              <MypageLogin />
              <NonUserFeatureList />
            </>
        }
      </MypageContainer>
    </FixedPageContainer>
  );
};

export default MypageScreen;
