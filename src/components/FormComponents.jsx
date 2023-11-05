import styled from 'styled-components';

const StyledForm = styled.form`
  padding: var(--padding-tb-form-control) var(--padding-lr-control);
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-top: solid var(--side-font-color);
`;
const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const StyledSpan = styled.span`
  color: var(--side-font-color);
  &:after {
    font-size: 0.8em;
    margin-left: 5px;
    font-style: italic;
    ${(props) => {
      if (props.$required) {
        return `
        content: 'required';
        color: var(--required-color);

      `;
      } else if (props.$recommended) {
        return `
        content: 'recommended';
        color: var(--recommended-font-color);
      `;
      }
    }}
`;
const StyledInput = styled.input`
  padding: 10px;
  border-radius: var(--bar-control);
  border: 2px solid var(--shadow-color);
`;
const StyledInputGroup = styled.div`
  display: flex;
  gap: 50px;
`;
const StyledReturnButton = styled.button`
  text-align: start;
`;
const StyledSubmitPanel = styled.div`
  align-self: flex-end;
  display: flex;
  gap: 10px;
`;
const StyledSubmitPanelButton = styled.button`
  align-self: flex-end;
  width: 50px;
  background-color: var(--shadow-color);
  &:hover {
    border: double white;
    color: white;
    background-color: var(--accent-color);
  }
`;
const StyledTextArea = styled(StyledInput).attrs({ as: 'textarea' })``;

export {
  StyledForm,
  StyledLabel,
  StyledSpan,
  StyledInput,
  StyledInputGroup,
  StyledReturnButton,
  StyledSubmitPanel,
  StyledSubmitPanelButton,
  StyledTextArea,
};
