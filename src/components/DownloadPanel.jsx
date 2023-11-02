import downloadPDF from '../downloadPdf';

export default function DownloadPanel({ cvFont }) {
  return (
    <>
      <button onClick={() => downloadPDF({ cvFont })}>
        <span className='material-symbols-outlined'>download</span>Download as
        PDF
      </button>
    </>
  );
}
