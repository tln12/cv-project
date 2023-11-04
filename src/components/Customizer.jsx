import styled from 'styled-components';

const StyledBox = styled.div`
  background-color: white;
  border-radius: var(--bar-control);
  border: solid var(--side-font-color);
  padding: var(--padding-tb-form-control) var(--padding-lr-control);
`;
const Styledbutton = styled.button`
  width: 100px;
  height: 80px;
  border: ${(props) => props.$primary && '3px solid var(--accent-color)'};
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
    <StyledBox>
      <h2>Theme Color</h2>
      <StyledColorInput
        value={cvColor}
        onChange={(e) => setCVColor(e.target.value)}
      ></StyledColorInput>
    </StyledBox>
  );
}
function FontPick({ cvFont, setCVFont }) {
  return (
    <StyledBox>
      <h2>Font</h2>
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
    </StyledBox>
  );
}

export default function Customizer({ cvColor, cvFont, setCVColor, setCVFont }) {
  return (
    <>
      <ColorPick cvColor={cvColor} setCVColor={setCVColor} />
      <FontPick cvFont={cvFont} setCVFont={setCVFont} />
    </>
  );
}
