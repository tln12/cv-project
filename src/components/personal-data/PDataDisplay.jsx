import styled from 'styled-components';

const StyledEntry = styled.li`
  display: flex;
`;
const StyledSpan = styled.span`
  flex: 1;
`;

export default function PDataDisplay({ personalData, StyledLine }) {
  const { street, houseNr, postcode, city, phone, email } = personalData;
  return (
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
  );
}
