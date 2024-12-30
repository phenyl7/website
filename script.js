// script.js
document.addEventListener("DOMContentLoaded", () => {
    const pdfList = document.querySelector(".pdf-list");
    const files = ["file1.pdf", "file2.pdf"]; // Add your PDF file names here.

    files.forEach(file => {
        const link = document.createElement("a");
        link.href = `pdfs/${file}`;
        link.textContent = `View ${file}`;
        link.target = "_blank";
        pdfList.appendChild(link);
    });
});
