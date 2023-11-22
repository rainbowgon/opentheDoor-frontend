import { StarRatingActiveIcon, StarRatingContainer, StarRatingEnactiveIcon, StarRatingIconList, StarRatingIconLists } from './StarRatingStyle';

import StarOn from "../../assets/icons/icon-star-on.png"
import StarOff from "../../assets/icons/icon-star-off.png"

export interface StarRatingProps {
  value?: null | number;
  size?: null | number;
  mode?: null | "main" | "warn" | "success" | "info" | "error" | "disable";
  onPress?: () => any;
}

const StarRating = ({
  value,
  size = 18,
  mode = "main",
  onPress,
}: StarRatingProps) => {
  return (
    <StarRatingContainer size={size}>
      <StarRatingIconList>
        <StarRatingEnactiveIcon
          source={StarOff}
          size={size}
        />
        <StarRatingEnactiveIcon
          source={StarOff}
          size={size}
        />
        <StarRatingEnactiveIcon
          source={StarOff}
          size={size}
        />
        <StarRatingEnactiveIcon
          source={StarOff}
          size={size}
        />
        <StarRatingEnactiveIcon
          source={StarOff}
          size={size}
        />
      </StarRatingIconList>
      <StarRatingIconList
        value={value}
        size={size}
      >
        <StarRatingActiveIcon
          source={StarOn}
          size={size}
          mode={mode}
        />
        <StarRatingActiveIcon
          source={StarOn}
          size={size}
          mode={mode}
        />
        <StarRatingActiveIcon
          source={StarOn}
          size={size}
          mode={mode}
        />
        <StarRatingActiveIcon
          source={StarOn}
          size={size}
          mode={mode}
        />
        <StarRatingActiveIcon
          source={StarOn}
          size={size}
          mode={mode}
        />
      </StarRatingIconList>
    </StarRatingContainer >
  )
};

export default StarRating;
