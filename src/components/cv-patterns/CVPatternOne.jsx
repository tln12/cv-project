import PDataDisplay from '../personal-data/PDataDisplay';
import WExperienceDisplay from '../work-experience/WExperienceDisplay';
import EExperienceDisplay from '../educational-experience/EExperienceDisplay';
import styled from 'styled-components';

const StyledHeader = styled.h2`
  letter-spacing: 1px;
  span:first-of-type {
    font-weight: bold;
  }
`;
const StyledAside = styled.aside`
  width: 33%;
  background-color: ${(props) => props.color};
`;
const StyledContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 30px;
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

export default function CVPatternOne({ color, personalData, education, work }) {
  return (
    <>
      <StyledAside color={color}></StyledAside>
      <StyledContent>
        <StyledHeader>
          <span>{personalData.firstName}&nbsp;</span>
          <span>{personalData.lastName}</span>
        </StyledHeader>
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
