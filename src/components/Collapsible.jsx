import { useState } from 'react';
import styled from 'styled-components';

/** Collapsible Button */

const StyledCollapsible = styled.div`
  background-color: white;
  border: none;
  border-radius: var(--bar-control);
  margin-right: 10px;
`;
const StyledHeader = styled.h3`
  padding: 10px var(--padding-lr-control);
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  align-items: center;
`;
const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: ${(props) => (props.open ? '1fr' : '0fr')};
  transition: grid-template-rows 400ms ease;
`;
const StyledContent = styled.div`
  overflow: hidden;
`;

export default function Collapsible({ title, content, collapsed = true }) {
  const [open, setOpen] = useState(!collapsed);

  function handleCollapse() {
    setOpen(!open);
  }

  return (
    <StyledCollapsible>
      <StyledHeader onClick={handleCollapse}>
        <span>{title}</span>
        <button className='material-symbols-outlined' onClick={handleCollapse}>
          {open ? 'arrow_drop_down' : 'arrow_right'}
        </button>
      </StyledHeader>
      <StyledWrapper open={open}>
        <StyledContent open={open}>{content}</StyledContent>
      </StyledWrapper>
    </StyledCollapsible>
  );
}
