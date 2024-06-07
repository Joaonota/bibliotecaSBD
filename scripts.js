function openModal(pdfUrl, description) {
    document.getElementById('pdf-embed').src = pdfUrl;
    document.getElementById('pdf-description').innerText = description;
    document.getElementById('pdf-download').href = pdfUrl;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
