import { useState } from 'react';
import styled from 'styled-components';

/** Collapsible Button */

const StyledCollapsible = styled.div`
  background-color: white;
  border-radius: var(--bar-control);
  border: solid var(--side-font-color);
`;
const StyledHeader = styled.h2`
  padding: 15px var(--padding-lr-control);
  display: flex;
  justify-content: space-between;
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  display: ${(props) => !props.open && 'none'};
`;

export default function Collapsible({ title, content, collapsed = true }) {
  const [open, setOpen] = useState(!collapsed);

  function handleCollapse() {
    setOpen(!open);
  }

  return (
    <StyledCollapsible>
      <StyledHeader>
        <span>{title}</span>
        <button className='material-symbols-outlined' onClick={handleCollapse}>
          {open ? 'arrow_drop_down' : 'arrow_right'}
        </button>
      </StyledHeader>
      <StyledContent open={open}>{content}</StyledContent>
    </StyledCollapsible>
  );
}
