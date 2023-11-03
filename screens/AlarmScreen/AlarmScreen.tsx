import React from "react";
import { View, Button, ScrollView } from "react-native";

// components
import Header from "../../components/Header/Header";
import ListItem from "../../components/ListItem/ListItem";

const AlarmScreen = () => {
  return (
    <View>
      <Header />
      <Button title="AlarmScreenDemo" />
      <ScrollView>
        {
          [...Array(3)].map((key) => (
            <ListItem
              title={key}
              subTitle={key}
            />
          ))
        }
      </ScrollView>
    </View>
  );
};

export default AlarmScreen;
