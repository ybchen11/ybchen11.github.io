function copyBibTeX(id) {
    const bibtexElement = document.getElementById(`bibtex-${id}`);
    
    if (bibtexElement) {
        const bibtexText = bibtexElement.innerText;
        navigator.clipboard.writeText(bibtexText).then(() => {
            alert("BibTeX copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy BibTeX:", err);
        });
    } else {
        console.error(`BibTeX not found! Expected ID: bibtex-${id}`);
        alert(`BibTeX not found! Expected ID: bibtex-${id}`);
    }
}
