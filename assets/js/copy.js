function copyCitation(id) {
    const citationElement = document.getElementById(`citation-${id}`);
    if (!citationElement) {
        console.error("Citation element not found:", id);
        return;
    }
    
    const citationText = citationElement.innerText;
    navigator.clipboard.writeText(citationText)
        .then(() => {
            alert("Citation copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy citation:", err);
        });
}

function copyBibTeX(id) {
    const bibtexElement = document.getElementById(`bibtex-${id}`);
    if (!bibtexElement) {
        console.error("BibTeX element not found:", id);
        return;
    }

    const bibtexText = bibtexElement.innerText;
    navigator.clipboard.writeText(bibtexText)
        .then(() => {
            alert("BibTeX copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy BibTeX:", err);
        });
}
