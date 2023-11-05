import PDataDisplay from '../personal-data/PDataDisplay';
import WExperienceDisplay from '../work-experience/WExperienceDisplay';
import EExperienceDisplay from '../educational-experience/EExperienceDisplay';
import styled from 'styled-components';

const StyledContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 35px;
  gap: 30px;
`;
const StyledHeader = styled.h2`
  letter-spacing: 1px;
  span:first-of-type {
    font-weight: bold;
  }
`;
const StyledStripe = styled.div`
  widht: 100%;
  height: 15%;
  background-color: ${(props) => props.$color};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledEntry = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
`;
const StyledTitle = styled.div`
  font-weight: bold;
`;
const StyledLine = styled.hr`
  margin: 5px 0px;
`;

export default function CVPatternTwo({ color, personalData, education, work }) {
  return (
    <>
      <StyledContent>
        <StyledStripe $color={color}>
          <StyledHeader>
            <span>{personalData.firstName}&nbsp;</span>
            <span>{personalData.lastName}</span>
          </StyledHeader>
        </StyledStripe>
        <PDataDisplay personalData={personalData} StyledLine={StyledLine} />
        <EExperienceDisplay
          education={education}
          StyledEntry={StyledEntry}
          StyledTitle={StyledTitle}
          StyledLine={StyledLine}
        />
        <WExperienceDisplay
          work={work}
          StyledEntry={StyledEntry}
          StyledTitle={StyledTitle}
          StyledLine={StyledLine}
        />
      </StyledContent>
    </>
  );
}
