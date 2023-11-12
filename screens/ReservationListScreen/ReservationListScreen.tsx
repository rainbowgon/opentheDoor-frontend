import React, { useEffect, useState } from "react";
import { View, Button, ScrollView } from "react-native";
import Header from "../../components/Header/Header";
import InfoCard from "../../components/InfoCard/InfoCard";
import PageContainer from "../../styles/commonStyles";

const ReservationListScreen = () => {
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
      <InfoCard
        theme="백조의 호수"
        venue="역삼 익스케이프"
        time="2023.11.03(금) 19:00 ~"
        reviewCount={5}
        price={120000}
        memberCount={4}
      />
    </PageContainer>
  );
};

export default ReservationListScreen;
