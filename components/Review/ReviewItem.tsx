import { View, Text, Image } from 'react-native';
import { ReviewContainer, ReviewContent, ReviewContentDisabled, ReviewIcon, ReviewSubContent, ReviewTitle, ReviewUserContainer, ReviewUserImage, ReviewUserInfo, ReviewUserInfoItem, ReviewUserPrivacy, ReviewUserPrivacyInfo } from './ReviewStyle';
import { ReviewInfoType } from "../../recoil/review/review";

// icons
import Key from "../../assets/icons/icon-key.png"

// images
import ImageDefault from "../../assets/images/image-default.png";

const ReviewItem = ({
  review,
  disabled = true,
}: {
  review: ReviewInfoType,
  disabled?: boolean
}) => {

  return (
    <ReviewContainer>
      <ReviewUserContainer>
        <ReviewUserImage
          // source={(review?.profileImage && { uri: review.profileImage }) || ImageDefault}
          source={ImageDefault}
        ></ReviewUserImage>
        <ReviewUserInfo>
          <ReviewUserInfoItem>
            <ReviewUserPrivacy>
              <ReviewUserPrivacyInfo>
                <ReviewTitle>{review.nickname}</ReviewTitle>
                <ReviewSubContent>{review.performedDate}</ReviewSubContent>
              </ReviewUserPrivacyInfo>
              <Text>{review.rating} 점</Text>
            </ReviewUserPrivacy>
            {
              review.isVerified &&
              <ReviewIcon source={Key}></ReviewIcon>
            }
          </ReviewUserInfoItem>
          {
            disabled ?
              <ReviewContent>{review.content}</ReviewContent>
              :
              <ReviewContentDisabled>{review.content}</ReviewContentDisabled>
          }
        </ReviewUserInfo>
      </ReviewUserContainer>
    </ReviewContainer>
  )
};

export default ReviewItem;
