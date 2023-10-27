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
`;
const StyledInput = styled.input`
  padding: 10px;
  border-radius: var(--bar-control);
  // border: none;
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
  text-align: center;
  width: 50px;
  border: solid transparent;
  background-color: var(--shadow-color);
  &:hover {
    border: double white;
    color: white;
    background-color: var(--accent-color);
  }
`;

export {
  StyledForm,
  StyledLabel,
  StyledSpan,
  StyledInput,
  StyledInputGroup,
  StyledReturnButton,
  StyledSubmitPanel,
  StyledSubmitPanelButton,
};
