//const app = document.getElementById('root');
const authors = document.createElement('div');
authors.setAttribute('class', 'authors');
//app.appendChild(authors);

fetch('https://theblackwomanhistory.firebaseio.com/.json')
.then(function(response){
    return response.json()
})
.then(function(data){const box = document.querySelector(".maravilhosas__box");


fetch('https://theblackwomanhistory.firebaseio.com/.json')

.then((response) =>{
    return response.json();
})
.then((data) => {
    data.content.forEach(mulher =>{

        let perfil = document.createElement('div');
        perfil.setAttribute('class', 'maravilhosas__perfil');
        box.appendChild(perfil);
        
        let link = document.createElement('a');
        link.href = '#!';
        perfil.appendChild(link);

        let imagem = document.createElement('img');
        imagem.setAttribute('class', 'img-responsive');
        imagem.src = '#!';
        link.appendChild(imagem);

        if 
        else

        let nome = document.createElement('p');
        nome.innerHTML = mulher.title;
        link.appendChild(nome);

        
    })
})
.catch((erro) => {
    console.log(erro);
})
    console.log("SUCESSO!!")
    console.log(data)
    data.content.forEach(pessoas => {
        const maravilhosas__box = document.createElement('div');
        maravilhosas__box.setAttribute('class', 'card');
        authors.appendChild(maravilhosas__box);

        const maravilhosas__perfil = document.createElement('img');
        maravilhosas__perfil.setAttribute("src", pessoas.image);
        maravilhosas__box.appendChild(maravilhosas__perfil);

        /* const name = document.createElement('h2');
        name.textContent = pessoas.name.first + " " + pessoas.name.last;
        card.appendChild(name);

        const local = document.createElement('h3');
        local.textContent = pessoas.location.city + ", " + pessoas.nat;
        card.appendChild(local);

        const email = document.createElement('p');
        email.textContent = pessoas.email;
        card.appendChild(email);

        const phone = document.createElement ('p');
        phone.textContent = pessoas.cell;
        card.appendChild(phone);  */

    });
    
})
.catch(function(erro){
    console.log(erro)
})