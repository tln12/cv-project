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
          <StyledSpan required>first name</StyledSpan>
          <StyledInput
            required
            id='first-name'
            onChange={handleChange}
            value={personalData.firstName}
          ></StyledInput>
        </StyledLabel>
        <StyledLabel htmlFor='last-name'>
          <StyledSpan required>last name</StyledSpan>
          <StyledInput
            required
            id='last-name'
            onChange={handleChange}
            value={personalData.lastName}
          ></StyledInput>
        </StyledLabel>
      </StyledInputGroup>
      <StyledInputGroup>
        <StyledLabel htmlFor='street'>
          <StyledSpan>street</StyledSpan>
          <StyledInput
            id='street'
            onChange={handleChange}
            value={personalData.street}
          ></StyledInput>
        </StyledLabel>
        <StyledLabel htmlFor='house-nr'>
          <StyledSpan>house no.</StyledSpan>
          <StyledInput
            id='house-nr'
            onChange={handleChange}
            value={personalData.houseNr}
          ></StyledInput>
        </StyledLabel>
      </StyledInputGroup>
      <StyledInputGroup>
        <StyledLabel htmlFor='postcode'>
          <StyledSpan>postcode</StyledSpan>
          <StyledInput
            id='postcode'
            onChange={handleChange}
            value={personalData.postcode}
          ></StyledInput>
        </StyledLabel>
        <StyledLabel htmlFor='city'>
          <StyledSpan>city</StyledSpan>
          <StyledInput
            id='city'
            onChange={handleChange}
            value={personalData.city}
          ></StyledInput>
        </StyledLabel>
      </StyledInputGroup>
      <StyledInputGroup>
        <StyledLabel htmlFor='phone'>
          <StyledSpan>phone</StyledSpan>
          <StyledInput
            id='phone'
            onChange={handleChange}
            value={personalData.phone}
          ></StyledInput>
        </StyledLabel>
        <StyledLabel htmlFor='email'>
          <StyledSpan required>e-mail</StyledSpan>
          <StyledInput
            required
            id='email'
            onChange={handleChange}
            value={personalData.email}
          ></StyledInput>
        </StyledLabel>
      </StyledInputGroup>
    </StyledForm>
  );
}
