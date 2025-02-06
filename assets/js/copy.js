function copyBibTeX(id) {
    // 尝试从 HTML 中获取 BibTeX 数据
    const bibtexElement = document.getElementById(`bibtex-${id}`);

    if (bibtexElement) {
        const bibtexText = bibtexElement.innerText;
        navigator.clipboard.writeText(bibtexText).then(() => {
            alert("BibTeX copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy BibTeX:", err);
        });
    } else {
        alert("BibTeX not found! Please check the element ID.");
    }
}
