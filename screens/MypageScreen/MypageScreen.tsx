import React from 'react';
import { View, Button, ScrollView } from 'react-native';

import UserProfile from './components/UserProfile/UserProfile';
import ReservationInfo from './components/ReservationInfo/ReservationInfo';
import UserFeatureList from './components/UserFeatureList/UserFeatureList';
import NonUserFeatureList from './components/NonUserFeatureList/NonUserFeatureList';
import MypageLogin from './components/MypageLogin/MypageLogin';

// styled components
import PageContainer, { FixedPageContainer } from '../../styles/commonStyles';
import Header from "../../components/Header/Header";
import { MypageContainer } from "./MypageScreenStyle";

const MypageScreen = () => {
  return (
    <FixedPageContainer>
      <MypageContainer>

        {
          1 === 1
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
              <MypageLogin />
              <NonUserFeatureList />
            </>
        }
      </MypageContainer>
    </FixedPageContainer>
  );
};

export default MypageScreen;
