import * as React from 'react';
import {List} from 'react-native-paper';

//TODO - create ListItem Custom Style

const ListItem = () => (
  <List.Item
    title="First Item"
    description="Item description"
    left={props => <List.Icon {...props} icon="folder" />}
  />
);

export default ListItem;
