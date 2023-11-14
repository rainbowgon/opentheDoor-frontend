import { View, Text, Image } from 'react-native';
import { ReviewContainer, ReviewContent, ReviewIcon, ReviewSubContent, ReviewTitle, ReviewUserContainer, ReviewUserImage, ReviewUserInfo, ReviewUserInfoItem, ReviewUserPrivacy, ReviewUserPrivacyInfo } from './ReviewStyle';
import { ReviewInfoType } from "../../recoil/review/review";

// icons
import Key from "../../assets/icons/icon-key.png"

// images
import ImageDefault from "../../assets/images/image-default.png";

const ReviewItem = ({
  review,
  onPress
}: {
  review: ReviewInfoType,
  onPress?: () => any
}) => {

  const handleButtonPress = () => {
    console.log(`${review.profileId} 버튼이 눌렸습니다.`);
    if (onPress) {
      onPress;
    }
  };

  return (
    <ReviewContainer onPress={handleButtonPress}>
      <ReviewUserContainer>
        <ReviewUserImage source={ImageDefault}></ReviewUserImage>
        <ReviewUserInfo>
          <ReviewUserInfoItem>
            <ReviewUserPrivacy>
              <ReviewUserPrivacyInfo>
                <ReviewTitle>{review.profileId}</ReviewTitle>
                <ReviewSubContent>{review.performedDate}</ReviewSubContent>
              </ReviewUserPrivacyInfo>
              <Text>{review.rating}</Text>
            </ReviewUserPrivacy>
            <ReviewIcon source={Key}></ReviewIcon>
          </ReviewUserInfoItem>
          <ReviewContent>{review.content}</ReviewContent>
        </ReviewUserInfo>
      </ReviewUserContainer>
    </ReviewContainer>
  )
};

export default ReviewItem;
