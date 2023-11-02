//TODO - create InfoCard Custom Style

import { Alert, Image, ScrollView, Text, View } from "react-native";

// image
import ImageDefault from "../../assets/images/image-default.png";

// icons
import StarOn from "../../assets/icons/icon-star-on.png";
import BookmarkDisable from "../../assets/icons/icon-bookmark-disable.png";
import BookmarkOff from "../../assets/icons/icon-bookmark-off.png";
import BookmarkOn from "../../assets/icons/icon-bookmark-on.png";

export interface InfoCardProps {
  image?: string;
  theme?: string;
  branch?: string;
  difficulty?: string;
  time?: string;
  star?: number;
  reviewCount?: number;
  style?: string;
  onPress?: any;
}

const InfoCard = ({
  image,
  theme,
  branch,
  difficulty,
  time,
  star,
  reviewCount,
  style,
  onPress,
}: InfoCardProps) => (
  <ScrollView>
    <Image source={image || ImageDefault} />
    <View>
      <Text> {theme}</Text>
      <Text>{branch}</Text>
      <Text>
        {difficulty} {(difficulty && time) || "|"} {time}
      </Text>
      <View>
        <Image source={StarOn}></Image>
        <Text>{star}</Text>
        <Text>({reviewCount})</Text>
      </View>
      <View>
        <Image source={BookmarkDisable} />
        <Image source={BookmarkOn} />
        <Image source={BookmarkOff} />
      </View>
    </View>
  </ScrollView>
);

export default InfoCard;
