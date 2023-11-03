import React from 'react';
import { View, Button, ScrollView } from 'react-native';
import InfoCard from '../../components/InfoCard/InfoCard';

const ReservationWaitingScreen = () => {
  return (
    <ScrollView>
      <Button title="ReservationWaitingScreenDemo" />
      <View>
        {
          [...Array(3)].map(() => (
            <InfoCard />
          ))
        }
      </View>
    </ScrollView>
  );
};

export default ReservationWaitingScreen;
