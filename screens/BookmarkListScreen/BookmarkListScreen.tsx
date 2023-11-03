import React from "react";
import { View, Button, ScrollView } from "react-native";

// components
import InfoCard from "../../components/InfoCard/InfoCard";

const BookmarkListScreen = () => {
  return (
    <ScrollView>
      <Button title="BookmarkListScreenDemo" />
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

export default BookmarkListScreen;
