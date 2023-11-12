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
export default function ContentBox({ title, children }) {
  return (
    <StyledBox>
      <StyledHeading>{title}</StyledHeading>
      <StyledContent>{children}</StyledContent>
    </StyledBox>
  );
}
