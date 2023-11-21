import { StarRatingActiveIcon, StarRatingContainer, StarRatingEnactiveIcon, StarRatingIconList, StarRatingIconLists } from './StarRatingStyle';

import StarOn from "../../assets/icons/icon-star-on.png"
import StarOff from "../../assets/icons/icon-star-off.png"

export interface StarRatingProps {
  value?: null | string;
  size?: null | number;
  mode?: "text" | "outlined" | "static" | "selected" | "inactive" | "error" | "kakao";
  onPress?: () => any;
}

const StarRating = ({
  value,
  size = 18,
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
        />
        <StarRatingActiveIcon
          source={StarOn}
          size={size}
        />
        <StarRatingActiveIcon
          source={StarOn}
          size={size}
        />
        <StarRatingActiveIcon
          source={StarOn}
          size={size}
        />
        <StarRatingActiveIcon
          source={StarOn}
          size={size}
        />
      </StarRatingIconList>
    </StarRatingContainer >
  )
};

export default StarRating;
