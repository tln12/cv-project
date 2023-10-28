import styled from 'styled-components';

const StyledHeader = styled.h2`
  letter-spacing: 1px;
  span:first-of-type {
    font-weight: bold;
  }
`;
const StyledEntry = styled.li`
  display: flex;
`;
const StyledSpan = styled.span`
  flex: 1;
`;

export default function PDataDisplay({ personalData, StyledLine }) {
  const { firstName, lastName, street, houseNr, postcode, city, phone, email } =
    personalData;
  return (
    <>
      <StyledHeader>
        <span>{firstName}&nbsp;</span>
        <span>{lastName}</span>
      </StyledHeader>
      <section>
        <h3>PERSONAL DETAILS</h3>
        <StyledLine />
        <ul>
          <StyledEntry>
            <StyledSpan>Address</StyledSpan>
            <StyledSpan>
              {street} {houseNr}, {postcode} {city}
            </StyledSpan>
          </StyledEntry>
          <StyledEntry>
            <StyledSpan>Tel.</StyledSpan>
            <StyledSpan>{phone}</StyledSpan>
          </StyledEntry>
          <StyledEntry>
            <StyledSpan>Email</StyledSpan>
            <StyledSpan>{email}</StyledSpan>
          </StyledEntry>
        </ul>
      </section>
    </>
  );
}
