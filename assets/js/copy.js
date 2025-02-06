function toggleBibTeX(id) {
    const bibtexContainer = document.getElementById(`bibtex-container-${id}`);
    const toggleBtn = event.target;

    if (bibtexContainer.style.display === "none") {
        bibtexContainer.style.display = "block";
        toggleBtn.innerText = "📂 Hide BibTeX";
    } else {
        bibtexContainer.style.display = "none";
        toggleBtn.innerText = "📂 Show BibTeX";
    }
}

function copyBibTeX(id) {
    const bibtexElement = document.getElementById(`bibtex-${id}`);
    if (!bibtexElement) {
        console.error("BibTeX element not found:", id);
        return;
    }

    navigator.clipboard.writeText(bibtexElement.innerText)
        .then(() => {
            alert("BibTeX copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy BibTeX:", err);
        });
}
