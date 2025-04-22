import React from "react";
import "../css/CertificateGeneration.css"; // For custom styling
import logo from "../../../img/bird.png";


const Certificate = ({ recipientName, courseTitle, date, signature1 }) => {
  return (
    <div className="certificate_view_container">
      <div className="certificate_view_logo_container">
        <img src={logo} alt="Logo" />
      </div>

      <div className="certificate_view_content-container">
        <h1 className="certificate_view_title">CERTIFICATE</h1>
        <div className="certificate_view_sur-title" style={{ backgroundColor: 'hotpink', padding: '10px 20px', borderRadius: '25px', display: 'inline-block', marginBottom: '30px' }}>
  <h1 className="certificate_view_titles" style={{ fontSize: '25px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: '#fff', fontWeight: 'bold' }}>OF COMPLETION</h1>
</div>
        <div className="certificate_view_body">
          <p className="certificate_view_text">Presented To</p>
          <h2 className="certificate_view_recipient-name">{recipientName}</h2>
          <p className="certificate_view_text">has successfully completed the course</p>
          <h3 className="certificate_view_course-title">{courseTitle}</h3>
          <p className="certificate_view_text">Provided By Code Builders</p>
          <p className="certificate_view_text">{date}</p>
        </div>
        <div className="certificate_view_footer">
          <div className="certificate_view_signature-block">
            <img src={signature1} alt="Signature 1" className="certificate_view_signature" />
            <p className="certificate_view_signature-name">Prakash V, Instructor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
