import jsPDF from 'jspdf';

export default function downloadHTMLAsPDF({ fontFamily }) {
  let target = document.getElementById('cv');
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const doc = new jsPDF();
  doc.setFont(fontFamily);
  doc.html(target, {
    callback: function (doc) {
      doc.deletePage(2);
      doc.save(`CV_${date}`);
    },
    width: 210, //target width in the PDF document
    windowWidth: 500, //window width in CSS pixels
  });
}
