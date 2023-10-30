import React from 'react';
import {View, Button} from 'react-native';
import Input from '../../components/input/Input';
import CustomButton from '../../components/button/CustomButton';
import CustomFab from '../../components/fab/Fab';
import ListItem from '../../components/listItem/ListItem';
import Dropdown from '../../components/dropdown/Dropdown';
import Header from '../../components/header/Header';

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <Button title="HomeScreenDemo" />
      <Input customProp="example" onChangeText={text => console.log(text)} />
      <CustomButton>Press me</CustomButton>
      <CustomFab />
      <ListItem />
      <Dropdown />
    </View>
  );
};

export default HomeScreen;
