import {
  StyledForm,
  StyledLabel,
  StyledSpan,
  StyledInput,
  StyledInputGroup,
} from '../FormComponents';

export default function PDataForm({ personalData, handleChange }) {
  return (
    <StyledForm>
      <StyledInputGroup>
        <StyledLabel htmlFor='first-name'>
          <StyledSpan $recommended>first name</StyledSpan>
          <StyledInput
            id='first-name'
            onChange={handleChange}
            value={personalData.firstName}
          ></StyledInput>
        </StyledLabel>
        <StyledLabel htmlFor='last-name'>
          <StyledSpan $recommended>last name</StyledSpan>
          <StyledInput
            id='last-name'
            onChange={handleChange}
            value={personalData.lastName}
          ></StyledInput>
        </StyledLabel>
      </StyledInputGroup>
      <StyledInputGroup>
        <StyledLabel htmlFor='phone'>
          <StyledSpan>phone</StyledSpan>
          <StyledInput
            type='tel'
            id='phone'
            onChange={handleChange}
            value={personalData.phone}
          ></StyledInput>
        </StyledLabel>
        <StyledLabel htmlFor='email'>
          <StyledSpan $recommended>e-mail</StyledSpan>
          <StyledInput
            type='email'
            id='email'
            onChange={handleChange}
            value={personalData.email}
          ></StyledInput>
        </StyledLabel>
      </StyledInputGroup>
      <StyledLabel htmlFor='address'>
        <StyledSpan>address</StyledSpan>
        <StyledInput
          id='address'
          onChange={handleChange}
          value={personalData.address}
        ></StyledInput>
      </StyledLabel>
    </StyledForm>
  );
}
