import styled from 'styled-components';

const StyledEntry = styled.li`
  display: flex;
`;
const StyledSpan = styled.span`
  flex: 1;
`;

export default function PDataDisplay({ personalData, StyledLine }) {
  const { address, phone, email } = personalData;
  return (
    <section>
      <h3>PERSONAL DETAILS</h3>
      <StyledLine />
      <ul>
        {address !== '' && (
          <StyledEntry>
            <StyledSpan>Address</StyledSpan>
            <StyledSpan>{address}</StyledSpan>
          </StyledEntry>
        )}
        {phone !== '' && (
          <StyledEntry>
            <StyledSpan>Tel.</StyledSpan>
            <StyledSpan>{phone}</StyledSpan>
          </StyledEntry>
        )}
        {email !== '' && (
          <StyledEntry>
            <StyledSpan>Email</StyledSpan>
            <StyledSpan>{email}</StyledSpan>
          </StyledEntry>
        )}
      </ul>
    </section>
  );
}
