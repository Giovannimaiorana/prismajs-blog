const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { kebabCase } = require("lodash");

const postData = [
    {
        title: 'Titolo del Post 1',
        slug: 'slug-post-1',
        image: 'url_immagine_1',
        content: 'Contenuto del Post 1',
        published: true,
    },
    {
        title: 'Titolo del Post 2',
        slug: 'slug-post-2',
        image: 'url_immagine_2',
        content: 'Contenuto del Post 2',
        published: false,
    },
];
// funzione per creare post
/*function createPost(postsData) {
    return Promise.all(postsData.map(post =>
        prisma.post.create({
            data: post,
        })
    ))
        .then((createdPosts) => {
            console.log('Nuovi Post Creati', createdPosts);
            return createdPosts;
        })
        .catch((error) => {
            console.error('Errore durante la creazione dei post:', error);
            throw error;
        });
}
*/
// Utilizzo della funzione per creare il post
/*createPost(postData)
    .then((createdPosts) => {
        console.log('Nuovi Post Creati', createdPosts);
    })
    .catch((error) => {
        console.error('Errore durante la creazione dei post:', error);
    });
    */

// funzione per leggere post usando slug 
function getPostBySlug(slug) {
    return prisma.post.findUnique({
        where: {
            slug: slug,
        },
    });
}
//utilizzo funzione per slug
const searchSlug = 'slug-post-2';
/*getPostBySlug(searchSlug)
    .then((post) => {
        if (post) {
            console.log('Post trovato:', post);
        } else {
            console.log('Nessun post trovato con lo slug:', targetSlug);
        }
    })
    .catch((error) => {
        console.error('Errore durante la lettura del post:', error);
    });*/


//funzione che mostra tutti i post
function getAllPosts() {
    return prisma.post.findMany();
}

//eseguo funzione che mostra tutti i post 
/*getAllPosts()
    .then((posts) => {
        console.log('Elenco di tutti i post:', posts);
    })
    .catch((error) => {
        console.error('Errore durante il recupero degli elenchi dei post:', error);
    });
    */


// funzione che consente di modificare un post 
function updatePost(slug, updatedData) {
    return prisma.post.update({
        where: {
            slug: slug
        },
        data: updatedData,
    });
}

//utilizzo modifica post 
const updatedData = {
    title: 'Nuovo Titolo del Post',
    content: 'Nuovo Contenuto del Post'
};


/*updatePost(searchSlug, updatedData)
    .then((updatedPost) => {
        console.log('Post aggiornato con successo:', updatedPost);
    })
    .catch((error) => {
        console.error('Errore durante aggiornamento post:', error);
    });
*/

//creo funzione per eliminare post 
function deletePost(slug) {
    return prisma.post.delete({
        where: {
            slug: slug,
        },
    });
}

// eseguo funzione per eliminre post 
/*deletePost(searchSlug)
    .then(() => {
        console.log('Post eliminato con successo');
    })
    .catch((error) => {
        console.error('Errore durante l\'eliminazine', error);
    })*/

//funzione per creare un postsingolo
/*
function createPost(newPostData) {
    return prisma.post.create({
        data: newPostData,
    });
}

const newPostData = {
    title: 'titolo del post 3 ',
    slug: 'slug-post-3',
    content: 'Contenuto del post 3 ',
    published: true,
};

//utilizzo funzione
/*createPost(newPostData)
    .then((newPost) => {
        console.log('Nuovo post creato con successo:', newPost);
    })
    .catch((error) => {
        console.error('Errore durante la creazione del nuovo post:', error);
    });
*/

//funziona per ottenere elenco di post pubblicati 
function getPublishedPosts() {
    return prisma.post.findMany({
        where: {
            published: true,
        },
    });
}

//utilizzo funzione per ottenere post pubblicati 

/*getPublishedPosts()
    .then((publishedPosts) => {
        console.log('Elenco di tutti i post pubblicati:', publishedPosts);
    })
    .catch((error) => {
        console.error('Errore durante il recupero degli elenchi dei post pubblicati:', error);
    })
*/


// funzione per restituire solo post che contentono un determinata stringa nel contenuto
function getPostsByContentSubstring(substring) {
    return prisma.post.findMany({
        where: {
            content: {
                contains: substring,
            },
        },
    });
}

const searchString = 'del';
//utilizzo funzione 
getPostsByContentSubstring(searchString)
    .then((posts) => {
        if (posts.length === 0) {
            console.log(`Nessun post contenente "${searchString}" trovato.`);
        } else {
            console.log(`Elenco di post contenenti "${searchString}":`, posts);
        }
    })
    .catch((error) => {
        console.error('Errore durante il recupero dei post:', error);
    });

