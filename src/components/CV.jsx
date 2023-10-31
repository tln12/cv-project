import WExperienceDisplay from './work-experience/WExperienceDisplay';
import EExperienceDisplay from './educational-experience/EExperienceDisplay';
import PDataDisplay from './personal-data/PDataDisplay';
import styled from 'styled-components';

const StyledCV = styled.section`
  width: 60%;
  height: 60vw;
  display: flex;
  box-shadow: 5px 5px 5px var(--shadow-color);
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
  border: 0.5px solid;
`;
const StyledAside = styled.aside`
  width: 33%;
  background-color: #f5f3ee;
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 30px;
  width: 70%;
`;

export default function CV({ personalData, education, work }) {
  return (
    <StyledCV>
      <StyledAside></StyledAside>
      <StyledContent>
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
    </StyledCV>
  );
}