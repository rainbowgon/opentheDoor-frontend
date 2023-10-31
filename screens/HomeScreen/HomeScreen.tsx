import React from 'react';
import { ScrollView, Button, View } from 'react-native';
import Input from '../../components/Input/Input';
import CustomButton from '../../components/Button/CustomButton';
import CustomFab from '../../components/Fab/Fab';
import ListItem from '../../components/ListItem/ListItem';
import Dropdown from '../../components/Dropdown/Dropdown';
import Header from '../../components/Header/Header';

const HomeScreen = () => {
  return (
    <View>
      {/* <ScrollView android:fillViewport="true"> */}
      <Header />
      <Button title="HomeScreenDemo" />
      <Input customProp="example" onChangeText={text => console.log(text)} />
      <CustomButton value="Press" />
      <CustomFab />
      <ListItem />
      <Dropdown />
      {/* </ScrollView> */}
    </View>
  );
};
export default HomeScreen;
