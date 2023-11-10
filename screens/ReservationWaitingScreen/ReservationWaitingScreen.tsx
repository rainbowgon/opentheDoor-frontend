import React from 'react';
import { View, Button, ScrollView } from 'react-native';
import InfoCard from '../../components/InfoCard/InfoCard';
import PageContainer from "../../styles/commonStyles";

const ReservationWaitingScreen = () => {
  return (
    <PageContainer>
      <Button title="ReservationWaitingScreenDemo" />
      <View>
        {
          [...Array(3)].map(() => (
            <InfoCard />
          ))
        }
      </View>
    </PageContainer>
  );
};

export default ReservationWaitingScreen;
