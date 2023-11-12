import styled from 'styled-components';

const StyledBox = styled.div`
  background-color: white;
  border: none;
  border-radius: var(--bar-control);
`;
const StyledHeading = styled.h3`
  font-weight: bold;
  padding: 10px var(--padding-lr-control);
`;
const StyledContent = styled.div`
  padding: 10px var(--padding-lr-control);
`;
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
    <>
      <StyledHeading>Theme Color</StyledHeading>
      <StyledContent>
        <StyledColorInput
          value={cvColor}
          onChange={(e) => setCVColor(e.target.value)}
        ></StyledColorInput>
      </StyledContent>
    </>
  );
}
function FontPick({ cvFont, setCVFont }) {
  return (
    <>
      <StyledHeading>Font</StyledHeading>
      <StyledContent>
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
      </StyledContent>
    </>
  );
}

function PatternPick({ cvColor, cvPattern, setCVPattern }) {
  return (
    <>
      <StyledHeading>Pattern</StyledHeading>
      <StyledContent>
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
      </StyledContent>
    </>
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
      <StyledBox>
        <ColorPick cvColor={cvColor} setCVColor={setCVColor} />
      </StyledBox>
      <StyledBox>
        <FontPick cvFont={cvFont} setCVFont={setCVFont} />
      </StyledBox>
      <StyledBox>
        <PatternPick
          cvColor={cvColor}
          cvPattern={cvPattern}
          setCVPattern={setCVPattern}
        />
      </StyledBox>
    </>
  );
}
