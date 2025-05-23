const createPost = document.querySelector("#createPost");

for(let index =1; index <= 826; index++) {
    fetch("https://rickandmortyapi.com/api/character/" + index)
        .then((response) => response.json())
        .then( personaje => {
            const div = document.createElement("div");
            div.classList.add("cuadro");

            const imagen = document.createElement("img");
            imagen.setAttribute("src", personaje.image);
            imagen.classList.add("cuadro-imagen")
            div.append(imagen);

            const nombre = document.createElement("nombre");
            nombre.innerText = `Character# ${index}`;
            nombre.classList.add("texto-nombre")
            div.append(nombre);

            const texto = document.createElement("texto");
            texto.innerText = `Esta es mi publicación número ${index} esto es una prueba de generación de relleno`;
            texto.classList.add("texto-parrafo")
            div.append(texto);

            createPost.append(div);
        });
}