import styled from 'styled-components';

const StyledSideNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--side-nav-color);
  padding: 20px 0px;
  border-radius: var(--bar-panel);
`;
const StyledButton = styled.button`
  &&& {
    font-size: 40px;
    color: white;
    border-radius: 0px;
    padding: 4px 8px;
    position: relative;
    &:after {
      background: linear-gradient(
        to bottom,
        transparent,
        var(--accent-color),
        transparent
      );
      content: '';
      width: 2px;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    ${(props) => {
      if (props.$navTab) {
        return `
          background: linear-gradient(to right, var(--accent-color-opaque), transparent);
        `;
      } else {
        return `
          &:hover {
            color: var(--accent-color-opaque);
            background-color: transparent;
          }
          &:after {
            height: 70%;
            opacity: 0;
            top: 50%;
            transition: top 400ms ease, opacity 400ms ease;
          }
          &:hover:after {
            top: 10%;
            opacity: 1;
          }
        `;
      }
    }}
`;
const StyledGithubImg = styled.img`
  width: 30px;
  filter: invert(100%);
  margin: 0px 8px;
`;
const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export default function SideNavigation({ handleNavigation, navTab }) {
  return (
    <>
      <StyledSideNav>
        <StyledList>
          <li>
            <StyledButton
              className='material-symbols-outlined'
              data-nav='data-manager'
              $navTab={navTab === 'data-manager'}
              onClick={handleNavigation}
            >
              description
            </StyledButton>
          </li>
          <li>
            <StyledButton
              className='material-symbols-outlined'
              data-nav='customize'
              $navTab={navTab === 'customize'}
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
              $navTab={navTab === 'download'}
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
    </>
  );
}
