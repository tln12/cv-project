import downloadPDF from '../downloadPdf';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: var(--shadow-color);
  border: none;
`;

export default function DownloadPanel({ cvFont }) {
  return (
    <>
      <StyledButton onClick={() => downloadPDF({ cvFont })}>
        <span className='material-symbols-outlined'>download</span>Download as
        PDF
      </StyledButton>
    </>
  );
}
