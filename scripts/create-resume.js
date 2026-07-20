const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Minimal valid PDF binary content for Atul Bhagwat's Resume
const pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 4 0 R >> >> /MediaBox [0 0 612 792] /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< /Length 220 >>
stream
BT
/F1 24 Tf
50 720 Td
(ATUL BHAGWAT - SENIOR MOBILE APP DEVELOPER) Tj
/F1 12 Tf
0 -30 Td
(Flutter Expert | Full Stack Engineer | Node.js Specialist) Tj
0 -20 Td
(Email: atulbhagwat.dev@gmail.com | Phone: +91 87665 43210) Tj
0 -40 Td
(SUMMARY:) Tj
0 -15 Td
(2+ Years Experience building 20+ Cross-Platform iOS & Android Apps.) Tj
ET
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000315 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
587
%%EOF`;

fs.writeFileSync(path.join(publicDir, 'resume.pdf'), pdfContent);
console.log('Successfully created public/resume.pdf!');
