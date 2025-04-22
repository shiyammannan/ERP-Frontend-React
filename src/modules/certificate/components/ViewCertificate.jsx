import React, { useRef } from 'react';
import CertificateGeneration from './CertificateGeneration';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import "../css/Print.css"

const ViewCertificate = ({ certificate }) => {
  const certificateRef = useRef();

  if (!certificate) return null;

  const downloadAsPDF = () => {
    html2canvas(certificateRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save(`${certificate.studentname}_certificate.pdf`);
    });
  };

  const downloadAsJPEG = () => {
    html2canvas(certificateRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/jpeg');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = `${certificate.studentname}_certificate.jpeg`;
      link.click();
    });
  };

  return (
    <div>
      <div className="certificate_view_download-options">
        <button className="certificate_view_download-button">Download</button>
        <div className="certificate_view_dropdown-content">
          <button onClick={downloadAsPDF}>Download as PDF</button>
          <button onClick={downloadAsJPEG}>Download as JPEG</button>
        </div>
      </div>
      <div ref={certificateRef}>
        <CertificateGeneration
          recipientName={certificate.studentname}
          courseTitle={certificate.courses}
          date={certificate.date}
          signature1="/path/to/signature1.png"
        />
      </div>
    </div>
  );
};

export default ViewCertificate;
