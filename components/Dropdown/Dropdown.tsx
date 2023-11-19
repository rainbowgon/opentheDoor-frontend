import React, { useState } from "react";
import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const Dropdown = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "1인", value: "1" },
    { label: "2인", value: "2" },
    { label: "3인", value: "3" },
    { label: "4인", value: "4" },
    { label: "5인", value: "5" },
    { label: "6인", value: "6" },
    { label: "7인", value: "7" },
    { label: "8인", value: "8" },
    { label: "9인", value: "9" },
    { label: "10인", value: "10" },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 15,
        }}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder={"인원"}
        />
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Text>Chosen fruit: {value === null ? "none" : value}</Text>
      </View>
    </View>
  );
};

export default Dropdown;
