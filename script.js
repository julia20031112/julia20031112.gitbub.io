function toggleInfo(id) {
    console.log("S'ha cridat la funció toggleInfo amb l'id:", id);
    const infoElement = document.getElementById(id);
    if (infoElement.style.display === 'block') {
        infoElement.style.display = 'none';
    } else {
        infoElement.style.display = 'block';
    }
}

