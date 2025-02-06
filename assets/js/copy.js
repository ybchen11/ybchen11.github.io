function copyBibTeX(id) {
    const bibtexData = {
        "2025-holographic-mimo": `@Article{chen-cm,
    author   = {Chen, Yuanbin and Guo, Xufeng and Zhou, Gui and Jin, Shi and Ng, Derrick Wing Kwan and Wang, Zhaocheng},
    journal  = {IEEE Commun. Mag.},
    title    = {Unified Far-Field and Near-Field in Holographic {MIMO}: A Wavenumber-Domain Perspective},
    year     = {2025},
    month    = jan,
    number   = {1},
    pages    = {30-36},
    volume   = {63},
    doi      = {10.1109/MCOM.001.2300845},
    keywords = {Philosophical considerations;Discrete Fourier transforms;Signal processing;Harmonic analysis;System analysis and design;MIMO communication},
}`
    };

    if (bibtexData[id]) {
        navigator.clipboard.writeText(bibtexData[id]).then(() => {
            alert("BibTeX copied to clipboard!");
        }).catch(err => {
            console.error("Failed to copy BibTeX:", err);
        });
    } else {
        alert("BibTeX not found!");
    }
}
