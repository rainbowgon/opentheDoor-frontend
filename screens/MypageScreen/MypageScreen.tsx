import React from 'react';
import { View, Button, ScrollView } from 'react-native';

import UserProfile from './components/UserProfile/UserProfile';
import ReservationInfo from './components/ReservationInfo/ReservationInfo';
import UserFeatureList from './components/UserFeatureList/UserFeatureList';
import NonUserFeatureList from './components/NonUserFeatureList/NonUserFeatureList';
import MypageLogin from './components/MypageLogin/MypageLogin';

// styled components
import PageContainer from '../../styles/commonStyles';

const MypageScreen = () => {
  return (
    <PageContainer>
      <ScrollView>
        <Button title="MypageScreenDemo" />
        {
          1 === 1
            ? <View>
              <UserProfile />
              <ReservationInfo />
              <UserFeatureList />
            </View>
            : <View>
              <MypageLogin />
              <NonUserFeatureList />
            </View>
        }
      </ScrollView>
    </PageContainer>
  );
};

export default MypageScreen;
