import styled from 'styled-components';

const StyledSideNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #2f4858;
  color: white;
  padding: 20px 8px;
`;
const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 40px;
  padding: 0px;
  &:hover {
    background-color: transparent;
    cursor: pointer;
  }
`;
const StyledGithubImg = styled.img`
  width: 30px;
  filter: invert(100%);
`;
const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default function SideNavigation({ handleNavigation }) {
  return (
    <StyledSideNav>
      <StyledList>
        <li>
          <StyledButton
            className='material-symbols-outlined'
            data-nav='control-panel'
            onClick={handleNavigation}
          >
            description
          </StyledButton>
        </li>
        <li>
          <StyledButton
            className='material-symbols-outlined'
            data-nav='customize'
            onClick={handleNavigation}
          >
            palette
          </StyledButton>
        </li>
      </StyledList>
      <a
        href='https://github.com/tln12/cv-project'
        target='_blank'
        rel='noreferrer'
      >
        <StyledGithubImg src='/public/github.svg'></StyledGithubImg>
      </a>
    </StyledSideNav>
  );
}
