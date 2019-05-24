const nome = document.querySelector('.nome')
const img = document.querySelector('.img')
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
            } else if (mulher.image) {
                imagem.setAttribute('src', mulher.image)
            }

            else {
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

const button = document.querySelector('.button');
button.addEventListener('click', () => {  //no meio dos parenteses era eventoq1
    // evento.preventDefault();


    fetch('http://localhost:5001/maravilhosas/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'title': nome.value,
            'image': img.value,
        })
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
        })

        .catch((erro) => {
            console.log('erro')
        })
})

const bdeletar = document.querySelector('.deletar');
bdeletar.addEventListener('click', () => {

    fetch('http://localhost:5001/maravilhosas/', {
        method: 'DELETE ',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "id": deletar.getAttribute("data-id")

        })
    })
        .then((response) => {
            return response.json();
        })
        .then(() =>{
            cardPai.removeChild(thisCard)
        })

        .catch((erro) => {
            console.log('erro')
        })
         
})