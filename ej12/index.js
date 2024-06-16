document.getElementById('listar').addEventListener('click', function() {
    const arbol = document.getElementById('arbol');
    recorrerArbol(arbol);
});

function recorrerArbol(nodo) {
    nodo.childNodes.forEach(child => {
        if (child.nodeType === Node.ELEMENT_NODE) {
            alert(child.textContent);
            child.style.color = 'gray';
            // Recursivamente recorrer los hijos
            recorrerArbol(child);
        }
    });
}