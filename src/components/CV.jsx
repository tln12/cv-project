import WExperienceDisplay from './work-experience/WExperienceDisplay';
import EExperienceDisplay from './educational-experience/EExperienceDisplay';
import PDataDisplay from './personal-data/PDataDisplay';
import styled from 'styled-components';

const StyledPanel = styled.div`
  margin: var(--section-padding);
`;
const StyledCV = styled.div`
  aspect-ratio: 1/1.4142135623730950488016887242097; // DIN A4
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
`;
const StyledAside = styled.aside`
  width: 33%;
  background-color: ${(props) => props.color};
`;
const StyledContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 30px;
`;

export default function CV({ color, personalData, education, work }) {
  return (
    <StyledPanel>
      <StyledCV id='cv'>
        <StyledAside color={color}></StyledAside>
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
    </StyledPanel>
  );
}
