function copyCitation(id) {
    const citationText = document.getElementById(`citation-${id}`).innerText;
    navigator.clipboard.writeText(citationText).then(() => {
        alert("Citation copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy citation:", err);
    });
}

function copyBibTeX(id) {
    const bibtexText = document.getElementById(`bibtex-${id}`).innerText;
    navigator.clipboard.writeText(bibtexText).then(() => {
        alert("BibTeX copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy BibTeX:", err);
    });
}
