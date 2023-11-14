import { atom } from "recoil";

/**
 * NOTE - 리뷰 관련 데이터 전체
 * 리뷰 ID	          review_id       		            INT (UNSIGNED)  	NotNull
 * 
 * 프로필 ID	        profile_id		                  INT (UNSIGNED)	  NotNull
 * 
 * 테마 ID	          theme_id		                    VARCHAR(255)  	  NotNull
 * 
 * 예약 ID	          reservation_id        		      INT (UNSIGNED)	  Null
 * 
 * 별점	              rating	REVIEW	                FLOAT(2, 1)	      NotNull
 * 
 * 탈출 여부    	    is_escaped	REVIEW        	    VARCHAR(10)	      NotNull
 * 
 * 주관적 난이도	    my_level	REVIEW	              INT (UNSIGNED)	  Null
 * 
 * 힌트 사용 횟수	    hint_count	REVIEW        	    INT (UNSIGNED)	  Null
 * 
 * 상세 리뷰	        content	REVIEW	                TEXT	            Null
 * 
 * 스포일러 여부    	is_spoiler	REVIEW            	VARCHAR(5)	      NotNull
 * 
 * 방탈출 한 날짜	    performed_date	REVIEW	        DATE	            Null
 * 
 * 방탈출 한 시간	    performed_time	REVIEW	        TIME	            Null
 * 
 * 방탈출 한 사람 수	performed_headcount REVIEW	    INT (UNSIGNED)	  Null
 * 
 * 생성 일자	        created_at	REVIEW	            TIMESTAMP	        NotNull
 * 
 * 삭제 여부	        is_valid	REVIEW        	      VARCHAR(10)       NotNull
 */

interface ReviewType {
  /** 리뷰 ID  */
  reviewId?: null | number;
  /** 프로필 ID  */
  profileId?: null | number;
  /** 테마 ID  */
  theme_id?: null | string;
  /** 예약 ID  */
  reservation_id?: null | number;
  /** 별점  */
  rating?: null | number;
  /** 탈출 여부  */
  isEscaped?: null | "SUCCESS" | "FAIL";
  /** 주관적 난이도  */
  myLevel?: null | number;
  /** 힌트 사용 횟수  */
  hintCount?: null | number;
  /** 상세 리뷰  */
  content?: null | string;
  /** 스포일러 여부  */
  is_spoiler?: null | "YES" | "NO";
  /** 방탈출 한 날짜  */
  performedDate?: null | string;
  /** 방탈출 한 시간  */
  performedTime?: null | string;
  /** 방탈출 한 사람 수  */
  performedHeadcount?: null | number;
}

export interface ReviewInfoType extends ReviewType {
  reviewId: number;
  profileId: number;
  rating: number;
  isEscaped: "SUCCESS" | "FAIL";
  myLevel: null | number;
  hintCount: null | number;
  content: string;
  performedDate: string;
  performedTime: null | string;
  performedHeadcount: null | number;
}

export interface ReviewCreateType extends ReviewType {
  themeId: string;
  rating: number;
  isEscaped: "SUCCESS" | "FAIL";
  myLevel: null | number;
  hintCount: null | number;
  content: null | string;
  isSpoiler: null | "YES" | "NO";
  performedDate: null | string;
  performedTime: null | string;
  performedHeadcount: null | number;
}

export const myReviewState = atom<ReviewInfoType>({
  key: 'myReviewState',
  default: {
    reviewId: 1,
    profileId: 1,
    rating: 3.6,
    isEscaped: "SUCCESS",
    myLevel: 3,
    hintCount: null,
    content: "재밌었다.",
    performedDate: "2023-11-02",
    performedTime: null,
    performedHeadcount: null,
  },
});

export const reviewListState = atom<ReviewInfoType[]>(
  {
    key: 'reviewListState',
    default: [
      {
        reviewId: 1,
        profileId: 1,
        rating: 3.6,
        isEscaped: "SUCCESS",
        myLevel: 3,
        hintCount: null,
        content: "재밌었다.",
        performedDate: "2023-11-02",
        performedTime: null,
        performedHeadcount: null,
      },
      {
        reviewId: 2,
        profileId: 2,
        rating: 2.6,
        isEscaped: "FAIL",
        myLevel: 2,
        hintCount: null,
        content: "재밌었다.2",
        performedDate: "2023-11-02",
        performedTime: null,
        performedHeadcount: null,
      },
    ]
  }
);
