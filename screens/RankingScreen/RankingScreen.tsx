import React from 'react';
import { View, Button, ScrollView } from 'react-native';
import PageContainer, { FixedPageContainer } from "../../styles/commonStyles";
import { themeRankListState } from "../../recoil/theme/theme";
import { useRecoilState, useRecoilValue } from "recoil";
import InfoCard from "../../components/InfoCard/InfoCard";
import { RankingScreenContainer, RankingScreenSubTitle, RankingScreenTitle } from "./RankingScreenStyle";
import Header from "../../components/Header/Header";

const RankingScreen = () => {
  // FIXME - 중복 코드 함수화 필요?
  const getCurrentMonthAndWeek = (): string => {
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const dayOfWeek = firstDayOfMonth.getDay();
    const pastDaysOfMonth = now.getDate() - 1 + dayOfWeek;

    const currentWeek = Math.ceil(pastDaysOfMonth / 7);
    const currentMonth = now.getMonth() + 1;

    return `${currentMonth}월 ${currentWeek}주차`;
  };

  const themeList = useRecoilValue(themeRankListState);
  return (
    <FixedPageContainer>
      <Header
        back="true"
      />
      <PageContainer>
        <RankingScreenContainer>
          <RankingScreenSubTitle>
            주간 차트
          </RankingScreenSubTitle>
          <RankingScreenTitle>
            {getCurrentMonthAndWeek()}
          </RankingScreenTitle>
        </RankingScreenContainer>
        {
          themeList.map((theme) => (
            <InfoCard
              key={theme.themeId}
              themeId={theme.themeId}
              venue={theme.venue}
              title={theme.title}
              poster={theme.poster}
              level={theme.level}
              minHeadcount={theme.minHeadcount}
              maxHeadcount={theme.maxHeadcount}
              timeLimit={theme.timeLimit}
              genre={theme.genre}
              ratingScore={theme.ratingScore}
            />
          ))
        }
      </PageContainer>
    </FixedPageContainer>
  );
};

export default RankingScreen;
