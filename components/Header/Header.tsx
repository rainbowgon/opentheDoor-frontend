import * as React from "react";
import { Image } from "react-native";
import { Appbar } from "react-native-paper";

const Header = () => {
  const goBack = () => console.log("Went back");

  // const handleSearch = () => console.log('Searching');

  const handleAlarm = () => console.log("Alarm");

  return (
    <Appbar.Header style={{ backgroundColor: "transparent" }}>
      <Appbar.Action
        icon={props => (
          <Image
            source={require("../../assets/icons/icon-backarrow.png")}
            style={{ width: 24, height: 24 }}
          />
        )}
        onPress={goBack}
      />
      <Appbar.Content title="" />
      {/* <Appbar.Action icon="magnify" onPress={handleSearch} /> */}
      <Appbar.Action
        icon={props => (
          <Image
            source={require("../../assets/icons/icon-notifications-fill.png")}
            style={{ width: 24, height: 24 }}
          />
        )}
        onPress={handleAlarm}
      />
    </Appbar.Header>
  );
};

export default Header;

// Props
// dark : boolean

// mode Available in v5.x with theme version 3
// Type: 'small' | 'medium' | 'large' | 'center-aligned'

// Default value: Platform.OS === 'ios' ? 'center-aligned' : 'small'

// Mode of the Appbar.

// small - Appbar with default height (64).
// medium - Appbar with medium height (112).
// large - Appbar with large height (152).
// center-aligned - Appbar with default height and center-aligned title.

// statusBarHeight : 상단 패딩
