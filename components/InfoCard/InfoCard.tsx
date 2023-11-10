//TODO - create InfoCard Custom Style

import { Image, Text, View } from "react-native";
import { CardView, ContentImage, ContentInfo, ContentInfoList, ContentText, IconImage, SubTitleText, TitleText } from "./InfoCardStyle";

// image
import ImageDefault from "../../assets/images/image-default.png";

// icons
import StarOn from "../../assets/icons/icon-star-on.png";
import BookmarkDisable from "../../assets/icons/icon-bookmark-disable.png";
import BookmarkOff from "../../assets/icons/icon-bookmark-off.png";
import BookmarkOn from "../../assets/icons/icon-bookmark-on.png";
import CustomButton from "../Button/CustomButton";

export interface InfoCardProps {
  image?: string;
  theme?: string;
  branch?: string;
  difficulty?: string;
  price?: number;
  time?: string;
  star?: number;
  reviewCount?: number;
  style?: string;
  onPress?: any;
  memberCount?: number;
}

const InfoCard = ({
  image,
  theme,
  branch,
  difficulty,
  price,
  time,
  star,
  reviewCount,
  style,
  onPress,
  memberCount,
}: InfoCardProps) => (
  <CardView>
    <ContentImage source={image || ImageDefault} />
    <ContentInfo>
      <TitleText> {theme || "테마 명"}</TitleText>
      <ContentText>{branch || "지점 명"}</ContentText>
      <ContentText>
        {difficulty || "난이도"} {(difficulty && time) && "|"} {time || "소요시간"}
      </ContentText>
      <SubTitleText>{price || 0}원({memberCount || "0"}명)</SubTitleText>
      <ContentInfoList>
        <IconImage source={StarOn}></IconImage>
        <ContentText>{star || 5}</ContentText>
        <ContentText>({reviewCount || 0})</ContentText>
      </ContentInfoList>
    </ContentInfo>
    <View>
      <View>
        {/* <IconImage source={BookmarkDisable} />
        <IconImage source={BookmarkOn} /> */}
        <IconImage source={BookmarkOff} />
      </View>
      <CustomButton size="xsmall" value="예약 취소" />
      <CustomButton size="xsmall" value="예약 대기 취소" />
      <CustomButton size="xsmall" value="오픈 알람 받기" />
    </View>
  </CardView>
);

export default InfoCard;
