import {
  StyledForm,
  StyledLabel,
  StyledSpan,
  StyledInputGroup,
} from '../FormComponents';

export default function PDataForm({ personalData, handleChange }) {
  return (
    <StyledForm>
      <StyledInputGroup>
        <StyledLabel htmlFor='first-name'>
          <StyledSpan>first name</StyledSpan>
          <input
            id='first-name'
            onChange={handleChange}
            value={personalData.firstName}
          ></input>
        </StyledLabel>
        <StyledLabel htmlFor='last-name'>
          <StyledSpan>last name</StyledSpan>
          <input
            id='last-name'
            onChange={handleChange}
            value={personalData.lastName}
          ></input>
        </StyledLabel>
      </StyledInputGroup>
      <StyledInputGroup>
        <StyledLabel htmlFor='street'>
          <StyledSpan>street</StyledSpan>
          <input
            id='street'
            onChange={handleChange}
            value={personalData.street}
          ></input>
        </StyledLabel>
        <StyledLabel htmlFor='house-nr'>
          <StyledSpan>house no.</StyledSpan>
          <input
            id='house-nr'
            onChange={handleChange}
            value={personalData.houseNr}
          ></input>
        </StyledLabel>
      </StyledInputGroup>
      <StyledInputGroup>
        <StyledLabel htmlFor='postcode'>
          <StyledSpan>postcode</StyledSpan>
          <input
            id='postcode'
            onChange={handleChange}
            value={personalData.postcode}
          ></input>
        </StyledLabel>
        <StyledLabel htmlFor='city'>
          <StyledSpan>city</StyledSpan>
          <input
            id='city'
            onChange={handleChange}
            value={personalData.city}
          ></input>
        </StyledLabel>
      </StyledInputGroup>
      <StyledInputGroup>
        <StyledLabel htmlFor='phone'>
          <StyledSpan>phone</StyledSpan>
          <input
            id='phone'
            onChange={handleChange}
            value={personalData.phone}
          ></input>
        </StyledLabel>
        <StyledLabel htmlFor='email'>
          <StyledSpan>e-mail</StyledSpan>
          <input
            id='email'
            onChange={handleChange}
            value={personalData.email}
          ></input>
        </StyledLabel>
      </StyledInputGroup>
    </StyledForm>
  );
}
