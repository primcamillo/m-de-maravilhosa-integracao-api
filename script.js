const box = document.querySelector(".maravilhosas__box");

//fetch('https://theblackwomanhistory.firebaseio.com/.json') para usar uma API ja feita
fetch('http://localhost:5001/maravilhosas/') //API que fizemos

    .then((response) => {
        return response.json();
    })
    .then((data) => {

        data.content.forEach(mulher => {

            let perfil = document.createElement('div');
            perfil.setAttribute('class', 'maravilhosas__perfil');
            box.appendChild(perfil);

            let link = document.createElement('a');
            link.href = '#!';
            perfil.appendChild(link);

            let imagem = document.createElement('img');
            imagem.setAttribute('class', 'img-responsive');
            imagem.src = '#!';


            if (mulher.metadata) {
                if (mulher.metadata.image) {
                    if (mulher.metadata.image.url) {
                        imagem.setAttribute('src', mulher.metadata.image.url);
                    }
                } 
                else {
                    imagem.setAttribute('src', './img/img-mulher.png');
                }
            }
            else{
                imagem.setAttribute('src', './img/img-mulher.png');
            }
            
            link.appendChild(imagem);

            let nome = document.createElement('p');
            nome.innerHTML = mulher.title;
            link.appendChild(nome);


        })
    })
    .catch((erro) => {
        console.log(erro);
    })
