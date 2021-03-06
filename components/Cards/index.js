// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
//     console.log(response.data);
// });
    const entryPoint3 = document.querySelector('.cards-container')
    Object.values(response.data.articles).forEach(topic => {
        topic.forEach(article => {
        entryPoint3.appendChild(Cards(article))
        })
    })
})
//     or could use:
//     const keys = Object.keys(response.data.articles);
//     for (let index = 0; index < keys.length; index++) {
//         const key = keys[index];
//         response.data.articles[`${key}`].forEach(article => {
//             Cards(article);
//             entry.Point.appendChild(Cards(article));
//         })
//     }
// })
//     or could use:
//     const keys = Object.values(response.data.articles);
//     keys.forEach(topic => {
//         topic.forEach(article => {
//             entryPoint.appendChild(Cards(article));
//         })
//     })
// })
.catch(error => {
console.log("No data here.", error)
})
// create function
function Cards(attr) {
    //create elements 
        const newCard = document.createElement('div'),
            newHeadline = document.createElement('div'),
            newAuthor = document.createElement('div'),
            newImg = document.createElement('div'),
                newImgSrc = document.createElement('img'),
            newBy = document.createElement('span');
    //add classes
        newCard.classList.add('card');
        newHeadline.classList.add('headline');
        newAuthor.classList.add('author');
        newImg.classList.add('img-container')
    //add content
        newHeadline.textContent = attr.headline;
        newImgSrc.src = attr.authorPhoto;
        newBy.textContent = `By ${attr.authorName}`;
    //add structure
        newCard.append(newHeadline, newAuthor);
        newAuthor.append(newImg, newBy);
        newImg.append(newImgSrc);

    return newCard;
}