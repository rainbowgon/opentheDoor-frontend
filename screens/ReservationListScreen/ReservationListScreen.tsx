import React, { useEffect, useState } from "react";
import { View, Button, ScrollView } from "react-native";
import Header from "../../components/Header/Header";
import InfoCard from "../../components/InfoCard/InfoCard";
import PageContainer from "../../styles/commonStyles";
import { ReservationInfoList } from "../../recoil/reservation/reservation";
import { useRecoilState } from "recoil";

const ReservationListScreen = () => {

  const [reservationInfoList, setReservationInfoList] = useRecoilState(ReservationInfoList);
  // const [reservations, setReservations] = useState([]);

  // useEffect(() => {
  //   fetch('API명세서가/비어/있군요/NgLee')
  //     .then(response => response.json())
  //     .then(data => {
  //       setReservations(data);
  //     })
  //     .catch(error => {
  //       console.error('못가져옴!', error);
  //     });
  // }, []);
  return (
    <PageContainer>
      <Button title="ReservationListScreenDemo" />
      <Header />
      {/* {reservations.map((reservation, index) => (
        <InfoCard key={index} theme={reservation.title} />
      ))} */}
      {
        reservationInfoList?.map(resercation => {
          <InfoCard
            themeId={resercation.themeId}
            minHeadcount={resercation.headcount}
            poster={resercation.poster}
            ratingScore={resercation.reservationNumber}
            reservationNotice={resercation.targetDate}
          />
        })
      }
    </PageContainer>
  );
};

export default ReservationListScreen;
