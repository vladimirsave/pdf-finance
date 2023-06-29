const PDFDocument = require("pdfkit");

PDFDocument
function buildPDF(dataCallback, endCallback) {

    const doc = new PDFDocument();
    doc.on('data', dataCallback);
    doc.on('end', endCallback);
    doc.fontSize(25).text('Some heading');
    doc.end();

}

module.exports = { buildPDF };