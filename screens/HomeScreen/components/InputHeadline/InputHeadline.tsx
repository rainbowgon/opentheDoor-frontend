import React from "react";
import Input from "../../../../components/Input/Input";
import CustomButton from "../../../../components/Button/CustomButton";
import { InputHeadlineIconView, InputHeadlineView } from "./InputHeadlineStyle";
import CustomFab from "../../../../components/Fab/Fab";

import Search from "../../../../assets/icons/icon-sarch.png";

const InputHeadline = () => {
  return (
    <InputHeadlineView>
      <Input label="테마 검색" icon={Search} />
      <InputHeadlineIconView>
      </InputHeadlineIconView>
    </InputHeadlineView>
  );
};

export default InputHeadline;
