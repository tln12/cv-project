import jsPDF from 'jspdf';

export default function downloadHTMLAsPDF() {
  let target = document.getElementById('cv');
  const doc = new jsPDF();
  doc.setFont('helvetica');
  doc.html(target, {
    callback: function (doc) {
      doc.deletePage(2);
      doc.save('sample-document.pdf');
    },
    width: 210, //target width in the PDF document
    windowWidth: 750, //window width in CSS pixels
  });
}
