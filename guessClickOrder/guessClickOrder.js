//Selecting Elements
const allBoxes = document.querySelectorAll("boxes-container")
console.log(allBoxes)

const firstInnerBox = document.querySelector('.box-1')
const secondInnerBox = document.querySelector('.box-2')
const thirdInnerBox = document.querySelector('.box-3')
const fourthInnerBox = document.querySelector('.box-4')
const fifthInnerBox = document.querySelector('.box-5')
const sixthInnerBox = document.querySelector('.box-6')



// clickSequence

const order = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth']
const hasBeenClicked = [false, false, false, false, false, false]
let currentOrder = 0
let orderOfClicks = []



function first() { 
    if(hasBeenClicked[0]) return
    currentOrder++ 
    hasBeenClicked[0] = true
    orderOfClicks.push(currentOrder)
    // orderOfClicks.pop()
    
    // orderOfClicks[0] = order[currentOrder-1]
    numberOfClicks()
}

function second() { 
    if(hasBeenClicked[1]) return
    currentOrder++
    hasBeenClicked[1] = true
    orderOfClicks[1] = order[currentOrder-1]
    numberOfClicks()
}

function third() { 
    if(hasBeenClicked[2]) return
    currentOrder++
    hasBeenClicked[2] = true
    orderOfClicks[2] = order[currentOrder-1]
    numberOfClicks()
}

function fourth() { 
    if(hasBeenClicked[3]) return
    currentOrder++
    hasBeenClicked[3] = true
    orderOfClicks[3] = order[currentOrder-1]
    numberOfClicks()
}

function fifth() { 
    if(hasBeenClicked[4]) return 
    currentOrder++
    hasBeenClicked[4] = true
    orderOfClicks[4] = order[currentOrder-1]
    numberOfClicks()
}

function sixth() { 
    if(hasBeenClicked[5]) return
    currentOrder++
    hasBeenClicked[5] = true 
    orderOfClicks[5] = order[currentOrder-1]
    numberOfClicks()
}

// function festus() { 
//     for( i = 0; i < smallBox.length; i++){
//         const lastItem = order.pop()
//         smallBox[i].innerText = lastItem;
//     }
// }


// function myfirst() { 
//     const lastItem = order.pop()
//         parentBox.childNodes.forEach(element => {
//             element.innerText = lastItem
//         }
//     )
// }


function numberOfClicks() {
    console.log(orderOfClicks)

    if (currentOrder === 6) {

        firstInnerBox.innerText = orderOfClicks[0] 
        secondInnerBox.innerText = orderOfClicks[1] 
        thirdInnerBox.innerText = orderOfClicks[2] 
        fourthInnerBox.innerText = orderOfClicks[3] 
        fifthInnerBox.innerText = orderOfClicks[4] 
        sixthInnerBox.innerText = orderOfClicks[5] 
    }
}



firstInnerBox.addEventListener('click', first)
secondInnerBox.addEventListener('click', second)
thirdInnerBox.addEventListener('click', third)
fourthInnerBox.addEventListener('click', fourth)
fifthInnerBox.addEventListener('click', fifth)
sixthInnerBox.addEventListener('click', sixth)