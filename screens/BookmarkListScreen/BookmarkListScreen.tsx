import React from "react";
import { View, Button, ScrollView } from "react-native";

// components
import InfoCard from "../../components/InfoCard/InfoCard";
import PageContainer from "../../styles/commonStyles";

const BookmarkListScreen = () => {
  return (
    <PageContainer>
      <Button title="BookmarkListScreenDemo" />
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

export default BookmarkListScreen;
