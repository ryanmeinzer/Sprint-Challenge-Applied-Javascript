// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const entryPoint = document.querySelector('.header-container')
entryPoint.appendChild(Header())
// create function
function Header() {
    //create elements 
    const newHeader = document.createElement('div'),
        newDate = document.createElement('span'),
        newHeader2 = document.createElement('h1'),
        newTemp = document.createElement('span');
    //add classes
    newHeader.classList.add('header');
    newDate.classList.add('date');
    newTemp.classList.add('temp');
    //add content
    newDate.textContent = 'SMARCH 28, 2019';
    newHeader2.textContent = 'Lambda Times';
    newTemp.textContent = '98°';
    //add structure
    newHeader.append(newDate, newHeader2, newTemp);

    return newHeader;
}

// console.log(Header);
