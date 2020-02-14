// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response => {
    // console.log(response.data.topics);
// });
    response.data.topics.forEach(topic => {
        // const newThing = Tab(item);
        entryPoint2.appendChild(Tab(topic));
    });
});
// .catch(error => {
//     console.log("No data here", error);
// })
// create function
function Tab(attr) {
    //create elements 
    const newTab = document.createElement('div');
    //add classes
    newTab.classList.add('tab');
    //add content
    newTab.textContent = attr;

    return newTab;
}

const entryPoint2 = document.querySelector('.topics');