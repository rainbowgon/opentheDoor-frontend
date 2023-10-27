import React from 'react';
import {View, Button} from 'react-native';
import Input from '../../components/input/Input';
import CustomButton from '../../components/button/CustomButton';
import CustomFab from '../../components/fab/Fab';
import ListItem from '../../components/listItem/ListItem';

const HomeScreen = () => {
  return (
    <View>
      <Button title="HomeScreenDemo" />
      <Input customProp="example" onChangeText={text => console.log(text)} />
      <CustomButton>Press me</CustomButton>
      <CustomFab />
      <ListItem />
    </View>
  );
};

export default HomeScreen;
