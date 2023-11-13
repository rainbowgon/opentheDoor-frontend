//TODO - create InfoCard Custom Style

import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  Bookmark1,
  BookmarkItem,
  CardView,
  ContentButtonList,
  ContentImage,
  ContentInfo,
  ContentInfoList,
  ContentText,
  IconImage,
  SubTitleText,
  TitleText,
} from "./InfoCardStyle";

// components
import CustomButton from "../Button/CustomButton";

// images
import ImageDefault from "../../assets/images/image-default.png";

// icons
import StarOn from "../../assets/icons/icon-star-on.png";
import BookmarkDisable from "../../assets/icons/icon-bookmark-disable.png";
import BookmarkOff from "../../assets/icons/icon-bookmark-off.png";
import BookmarkOn from "../../assets/icons/icon-bookmark-on.png";
import { ThemeType } from "../../recoil/theme/theme";

// TODO - 미사용 태그는 비활성화 진행

const InfoCard = (
  {
    id,
    venue = null,
    title = null,
    poster = null,
    level = null,
    minHeadcount = null,
    maxHeadcount = null,
    priceList: price = null,
    timeLimit = null,
    latitude = null,
    longitude = null,
    location = null,
    explanation = null,
    reservationNotice = null,
    tel = null,
    genre = null,
    // activity = null,
    // lockRatio = null,
    // horror = null,
    starrate = null,
    onPress,
  }: ThemeType,
  style?: null | string,
  reviewCount?: null | number,
  bookmarkCount?: null | number,
  // onPress?: () => {},
) => (
  <>
    <TouchableOpacity onPress={onPress}>
      <CardView>
        <ContentImage source={poster || ImageDefault} />
        <ContentInfo>
          {title && <TitleText> {title}</TitleText>}
          {venue && <ContentText>{venue}</ContentText>}
          {(level || timeLimit) && (
            <ContentText>
              {level && `난이도 : ${level}`} {level && timeLimit && "|"}{" "}
              {timeLimit && `소요시간 : ${timeLimit}분`}
            </ContentText>
          )}
          {tel && <SubTitleText>{tel}명</SubTitleText>}
          {price && minHeadcount && maxHeadcount && (
            <SubTitleText>
              {price || 0}원({minHeadcount || "0"}
              {minHeadcount && maxHeadcount && " ~ "}
              {maxHeadcount || "0"}명)
            </SubTitleText>
          )}
          {genre && (
            <ContentInfoList>
              {genre.map(category => (
                <CustomButton
                  value={category}
                  size="xsmall"
                  border="round"
                  mode="inactive"
                />
              ))}
            </ContentInfoList>
          )}
          {starrate && (
            <ContentInfoList>
              <IconImage source={StarOn}></IconImage>
              <ContentText>{starrate || 5}</ContentText>
              <ContentText>({reviewCount || 0})</ContentText>
            </ContentInfoList>
          )}
        </ContentInfo>
        <ContentButtonList>
          <BookmarkItem>
            {/* <IconImage source={BookmarkDisable} />
        <IconImage source={BookmarkOn} /> */}
            <Bookmark1>
              <IconImage source={BookmarkOff} />
              <ContentText>{bookmarkCount || 0}</ContentText>
            </Bookmark1>
          </BookmarkItem>
          <View>
            <CustomButton size="xsmall" mode="outlined" value="예약 취소" />
            <CustomButton
              size="xsmall"
              mode="outlined"
              value="예약 대기 취소"
            />
          </View>
        </ContentButtonList>
      </CardView>
    </TouchableOpacity>
    <CustomButton mode="inactive" value="오픈 알람 받기" />
    <CustomButton mode="selected" value="오픈 알람 받는 중" />
  </>
);

export default InfoCard;
