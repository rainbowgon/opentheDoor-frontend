import React from 'react';
import { View, Button, ScrollView } from 'react-native';

// components
import UserProfile from './components/UserProfile/UserProfile';
import ReservationInfo from './components/ReservationInfo/ReservationInfo';
import UserFeatureList from './components/UserFeatureList/UserFeatureList';
import NonUserFeatureList from './components/NonUserFeatureList/NonUserFeatureList';
import MypageLogin from './components/MypageLogin/MypageLogin';

const MypageScreen = () => {
  return (
    <View>
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
    </View>
  );
};

export default MypageScreen;
