//TODO - create InfoCard Custom Style

import { Alert, Image, Text, View } from 'react-native';

import Default from '../../assets/images/image-default.png';

// icons
import Star from '../../assets/icons/icon-star-on.png';
import BookmarkDisable from '../../assets/icons/icon-bookmark-disable.png';
import BookmarkOff from '../../assets/icons/icon-bookmark-off.png';
import BookmarkOn from '../../assets/icons/icon-bookmark-on.png';

const InfoCard = () => (
  <View>
    <Image source={Default} />
    <View>
      <Text>테마명</Text>
      <Text>지점명</Text>
      <Text>난이도 | 소요시간</Text>
      <View>
        <Image source={Star}></Image>
        <Text>별점</Text>
        <Text>(리뷰 수)</Text>
      </View>
      <View>
        <Image source={BookmarkDisable} />
        <Image source={BookmarkOn} />
        <Image source={BookmarkOff} />
      </View>
    </View>
  </View>
);

export default InfoCard;
