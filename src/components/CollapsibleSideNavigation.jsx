import styled from 'styled-components';
import { useState } from 'react';

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
  font-size: 40px;
  color: white;
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

export default function CollapsibleSideNavigation({
  handleNavigation,
  children,
}) {
  const [open, setOpen] = useState(true);

  function handleCollapse() {
    setOpen(!open);
  }

  return (
    <>
      <StyledSideNav>
        <StyledList>
          <li>
            <StyledButton
              className='material-symbols-outlined'
              onClick={handleCollapse}
            >
              {open
                ? 'keyboard_double_arrow_left'
                : 'keyboard_double_arrow_right'}
            </StyledButton>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <StyledButton
              className='material-symbols-outlined'
              data-nav='data-manager'
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
          <li>
            {' '}
            <StyledButton
              className='material-symbols-outlined'
              data-nav='download'
              onClick={handleNavigation}
            >
              download
            </StyledButton>
          </li>
        </StyledList>
        <a
          href='https://github.com/tln12/cv-project'
          target='_blank'
          rel='noreferrer'
        >
          <StyledGithubImg src='/github.svg'></StyledGithubImg>
        </a>
      </StyledSideNav>
      {open && children}
    </>
  );
}
