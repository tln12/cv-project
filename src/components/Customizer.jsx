import ContentBox from './ContentBox';
import styled from 'styled-components';

const Styledbutton = styled.button`
  width: 100px;
  height: 80px;
  border: ${(props) => props.$primary && '3px solid var(--accent-color)'};
`;
const StyledPatternButton = styled(Styledbutton)`
  width: 60px;
  height: 60px;
  padding: 0;
  overflow: hidden;
`;
const StyledPattern = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`;
const StyledPatternOne = styled.div`
  width: 40%;
  background-color: ${(props) => props.$color};
`;
const StyledPatternTwo = styled.div`
  height: 40%;
  width: 100%;
  background-color: ${(props) => props.$color};
`;
const StyledColorInput = styled.input.attrs({ type: 'color' })`
  padding: 0px;
  height: 40px;
`;
const StyledList = styled.ul`
  display: flex;
  gap: 10px;
`;

function ColorPick({ cvColor, setCVColor }) {
  return (
    <StyledColorInput
      value={cvColor}
      onChange={(e) => setCVColor(e.target.value)}
    ></StyledColorInput>
  );
}
function FontPick({ cvFont, setCVFont }) {
  return (
    <StyledList>
      <li>
        <Styledbutton
          style={{ fontFamily: 'helvetica' }}
          onClick={() => setCVFont('helvetica')}
          $primary={cvFont === 'helvetica'}
        >
          Helvetica
        </Styledbutton>
      </li>
      <li>
        <Styledbutton
          style={{ fontFamily: 'courier' }}
          onClick={() => setCVFont('courier')}
          $primary={cvFont === 'courier'}
        >
          Courier
        </Styledbutton>
      </li>
      <li>
        <Styledbutton
          style={{ fontFamily: 'times' }}
          onClick={() => setCVFont('times')}
          $primary={cvFont === 'times'}
        >
          Times New Roman
        </Styledbutton>
      </li>
    </StyledList>
  );
}

function PatternPick({ cvColor, cvPattern, setCVPattern }) {
  return (
    <StyledList>
      <li>
        <StyledPatternButton
          onClick={() => setCVPattern('pattern-1')}
          $primary={cvPattern === 'pattern-1'}
        >
          <StyledPattern>
            <StyledPatternOne $color={cvColor}></StyledPatternOne>
          </StyledPattern>
        </StyledPatternButton>
      </li>
      <li>
        <StyledPatternButton
          onClick={() => setCVPattern('pattern-2')}
          $primary={cvPattern === 'pattern-2'}
        >
          <StyledPattern>
            <StyledPatternTwo $color={cvColor}></StyledPatternTwo>
          </StyledPattern>
        </StyledPatternButton>
      </li>
      <li>
        <StyledPatternButton
          onClick={() => setCVPattern('pattern-3')}
          $primary={cvPattern === 'pattern-3'}
        ></StyledPatternButton>
      </li>
    </StyledList>
  );
}

export default function Customizer({
  cvColor,
  cvFont,
  cvPattern,
  setCVColor,
  setCVFont,
  setCVPattern,
}) {
  return (
    <>
      <ContentBox title='Theme Color'>
        <ColorPick cvColor={cvColor} setCVColor={setCVColor} />
      </ContentBox>
      <ContentBox title='Font'>
        <FontPick cvFont={cvFont} setCVFont={setCVFont} />
      </ContentBox>
      <ContentBox title='Pattern'>
        <PatternPick
          cvColor={cvColor}
          cvPattern={cvPattern}
          setCVPattern={setCVPattern}
        />
      </ContentBox>
    </>
  );
}
