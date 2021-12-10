// 1) Creazione array di oggetti
    // - Ogni oggetto deve contenere:
        // a) nome autore;
        // b) foto profilo;
        // c) data (formato americano);
        // d) testo del post;
        // e) Immagine;
        // f) numero likes
      
// SECTION Object: post //
const post = [
    {
        authorName: 'Phil Mangione',
        profilePic: 'https://unsplash.it/300/300?image=',
        data: '08/10/2021',
        caption: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: 'https://unsplash.it/600/300?image=171',
        numberLikes: 80
    },
    {
        authorName: 'Sofia Perlari',
        profilePic: 'https://unsplash.it/300/300?image=15',
        data: '08/10/2021',
        caption: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: 'https://unsplash.it/600/300?image=171',
        numberLikes: 80
    },
    {
        authorName: 'Vito Alloggio',
        profilePic: 'https://unsplash.it/300/300?image',
        data: '08/10/2021',
        caption: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: 'https://unsplash.it/600/300?image=171',
        numberLikes: 80
    },
    {
        authorName: 'Guido La Moto',
        profilePic: 'https://unsplash.it/300/300?image=187',
        data: '08/10/2021',
        caption: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: 'https://unsplash.it/600/300?image=171',
        numberLikes: 80
    },
    {
        authorName: 'Massimo Delapena',
        profilePic: 'https://unsplash.it/300/300?image=203',
        data: '03/25/2021',
        caption: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: 'https://unsplash.it/600/300?image=171',
        numberLikes: 2500
    }
];

// SECTION Functions //
function calcDate(postDate) {
    let date1 = new Date(postDate);
    let date2 = new Date();
    let difference = date2.getTime() - date1.getTime();
    let days = Math.ceil(difference / (1000 * 3600 * 24));
    return days;
}

// 2) Stampare post nel DOM
// SECTION post filler //
const containerPost = document.getElementById('container');
for (let i = 0; i < post.length; i++) {
const obj = post[i];
const templatePost = `
<div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${obj.profilePic}" alt="${obj.authorName}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${obj.authorName}</div>
                    <div class="post-meta__time">${calcDate(obj.data)} giorni fa</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${obj.caption}</div>
        <div class="post__image">
            <img src="${obj.postImage}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${obj.numberLikes}</b> persone
                </div>
            </div> 
        </div>            
    </div>`;
    containerPost.innerHTML += templatePost;

    // 3) Creare Bottone dei likes cliccabile
    let btnLike = document.querySelector('.like-button');
    let numberLike = document.getElementById('like-counter-1');
    btnLike.addEventListener('click', function() {
        btnLike.classList.add('like-button--liked');
        if (btnLike.classList.contains('like-button--liked')) {
            numberLike.innerText = obj.numberLikes;
            console.log(obj.numberLikes);
        }
    });
}


