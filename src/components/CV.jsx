import CVPatternOne from './cv-patterns/CVPatternOne';
import CVPatternTwo from './cv-patterns/CVPatternTwo';
import CVPatternThree from './cv-patterns/CVPatternThree';
import styled from 'styled-components';

const StyledPanel = styled.div`
  padding: 0px var(--section-padding);
  border-radius: var(--bar-panel);
  overflow: scroll;
`;
const StyledCV = styled.div`
  background-color: white;
  font-size: 11px;
  width: 500px;
  aspect-ratio: 1/1.4142135623730950488016887242097; // DIN A4
  display: flex;
  box-shadow: 0px 0px 10px var(--side-font-color);
`;

export default function CV({
  color,
  font,
  pattern,
  personalData,
  education,
  work,
}) {
  return (
    <StyledPanel>
      <StyledCV id='cv' style={{ fontFamily: font }}>
        {pattern === 'pattern-1' ? (
          <CVPatternOne
            color={color}
            personalData={personalData}
            education={education}
            work={work}
          />
        ) : pattern === 'pattern-2' ? (
          <CVPatternTwo
            color={color}
            personalData={personalData}
            education={education}
            work={work}
          />
        ) : (
          <CVPatternThree
            color={color}
            personalData={personalData}
            education={education}
            work={work}
          />
        )}
      </StyledCV>
    </StyledPanel>
  );
}
