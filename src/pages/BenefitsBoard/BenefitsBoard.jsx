import React from "react";
import {
  BenefitsBoardButton,
  BenefitsBoardCategory,
  BenefitsBoardContainer,
  BenefitsBoardHorizon,
  BenefitsBoardNomalText,
  BenefitsBoardSubtitle,
  BenefitsBoardTitle,
} from "styles/Main";

const BenefitsBoard = () => {
  return (
    <>
      <BenefitsBoardContainer>
        <BenefitsBoardSubtitle>농림축산 식품부</BenefitsBoardSubtitle>
        <BenefitsBoardTitle>청년농업인 영농정착지원</BenefitsBoardTitle>
        <BenefitsBoardHorizon />
        {/* 신청 기간 */}
        <BenefitsBoardCategory style={{ marginTop: "30px" }}>
          신청 기간
        </BenefitsBoardCategory>
        <BenefitsBoardNomalText>23.08.20 - 23.0920</BenefitsBoardNomalText>
        {/* 내용 */}
        <BenefitsBoardCategory>내용</BenefitsBoardCategory>
        <BenefitsBoardNomalText>
          영농 초기 소득이 불안정한 청년후계농에게는 최장 3년간 월 최대
          110만원의 영농정착 지원금을 지급
        </BenefitsBoardNomalText>
        {/* 지원자격 */}
        <BenefitsBoardCategory>지원자격</BenefitsBoardCategory>
        <BenefitsBoardNomalText>
          사업 시행연도 기준 만 18세 이상 ～ 만 40세 미만 영농경력 : 독립경영
          3년 이하(독립경영 예정자 포함)
        </BenefitsBoardNomalText>
        {/* 선정기준 */}
        <BenefitsBoardCategory>선정 기준</BenefitsBoardCategory>
        <BenefitsBoardNomalText>
          영농 계획서를 통해 영농계획, 실현 가능성, 개인역량 등을 평가
        </BenefitsBoardNomalText>
        {/* 신청하기 버튼 */}
        <BenefitsBoardButton>신청하기</BenefitsBoardButton>
      </BenefitsBoardContainer>
    </>
  );
};

export default BenefitsBoard;
