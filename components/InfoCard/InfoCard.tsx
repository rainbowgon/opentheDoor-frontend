//TODO - create InfoCard Custom Style

import { Image, Text, View } from "react-native";
import { BookmarkItem, CardView, ContentButtonList, ContentImage, ContentInfo, ContentInfoList, ContentText, IconImage, SubTitleText, TitleText } from "./InfoCardStyle";

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
  categorys?: string[];
  star?: number;
  reviewCount?: number;
  bookmarkCount?: number;
  style?: string;
  onPress?: any;
  memberCount?: number;
}

// TODO - 미사용 태그는 비활성화 진행 

const InfoCard = ({
  image,
  theme,
  branch,
  difficulty,
  price,
  time,
  categorys,
  star,
  reviewCount,
  bookmarkCount,
  style,
  onPress,
  memberCount,
}: InfoCardProps) => (
  <>
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
          {
            categorys &&
            categorys.map((category) => (
              <CustomButton value={category} size="xsmall" border="round" mode="inactive" />
            ))
          }
          <CustomButton value="category1" size="xsmall" border="round" mode="inactive" />
          <CustomButton value="category2" size="xsmall" border="round" mode="inactive" />
        </ContentInfoList>
        <ContentInfoList>
          <IconImage source={StarOn}></IconImage>
          <ContentText>{star || 5}</ContentText>
          <ContentText>({reviewCount || 0})</ContentText>
        </ContentInfoList>
      </ContentInfo>
      <ContentButtonList>
        <BookmarkItem>
          {/* <IconImage source={BookmarkDisable} />
        <IconImage source={BookmarkOn} /> */}
          <IconImage source={BookmarkOff} />
          <ContentText>{bookmarkCount || 0}</ContentText>
        </BookmarkItem>
        <View>
          <CustomButton size="xsmall" mode="outlined" value="예약 취소" />
          <CustomButton size="xsmall" mode="outlined" value="예약 대기 취소" />
        </View>
      </ContentButtonList>
    </CardView>
    <CustomButton mode="inactive" value="오픈 알람 받기" />
    <CustomButton mode="selected" value="오픈 알람 받는 중" />
  </>
);

export default InfoCard;
