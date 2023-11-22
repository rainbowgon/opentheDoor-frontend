import { View, Text, Image } from 'react-native';
import { ReviewContainer, ReviewContent, ReviewContentDisabled, ReviewActiveIcon, ReviewSubContent, ReviewTitle, ReviewUserContainer, ReviewUserImage, ReviewUserInfo, ReviewUserInfoItem, ReviewUserPrivacy, ReviewUserPrivacyInfo, ReviewEnactiveIcon } from './ReviewStyle';
import { ReviewInfoType } from "../../recoil/review/review";

// icons
import Key from "../../assets/icons/icon-key.png"
import DoorOpen from '../../assets/icons/icon-door-open.png';
import DoorClose from '../../assets/icons/icon-door-close.png';
import Activity from '../../assets/icons/icon-explanation-activity.png';
import Capacity from '../../assets/icons/icon-explanation-capacity.png';
import Difficulty from '../../assets/icons/icon-explanation-difficulty.png';
import Fear from '../../assets/icons/icon-explanation-fear.png';
import Hint from '../../assets/icons/icon-explanation-hint.png';
import Machine from '../../assets/icons/icon-explanation-machine.png';

// images
import ImageDefault from "../../assets/images/image-default.png";
import StarRating from "../StarRating/StarRating";

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
              <View>
                <StarRating
                  mode={"main"}
                  size={12}
                  value={review.rating}
                />
              </View>
              {/* <Text>{review.rating} 점</Text> */}
            </ReviewUserPrivacy>
            <ReviewUserInfoItem>
              {
                review.isEscaped === "SUCCESS" ?
                  <ReviewActiveIcon source={DoorOpen} />
                  : <ReviewEnactiveIcon source={DoorClose} />
              }
              {
                review.isVerified ?
                  <ReviewActiveIcon source={Key} />
                  : <ReviewEnactiveIcon source={Key} />
              }
            </ReviewUserInfoItem>
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
