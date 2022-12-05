// Select elements

const quoteTitle = document.querySelector(".title")
const quotes = document.querySelector(".quote")
const author = document.querySelector(".author")
const getQuotes = document.querySelector(".quote-button")   


const myQuotes = [
    {
        title: 'Child Care',
        quote: "Be there for your children... you're the first person that'd teach them how connection works.",
        author: "B.J"
    },

    {
        title: 'Honesty',
        quote: "An honest person is like a comfy sofa... Its got what it takes to keep you seated all day!",
        author: "J.B"
    },

    {
        title: 'Child Rearing',
        quote: "Before you start having kids decide what sort of contribution you want to make to the world.",
        author: 'O.K'
    },

    {
        title: 'Laziness',
        quote: "Laziness is like weeds, if you don't take them out, they would soon destroy your feild.",
        author: 'K.O'
    },

    {
        title: 'Hard-Work',
        quote: "Hardwork is like constipation, getting shit done ain't easy, but you feel satisfied afterwards.",
        author: 'I.K'
    },

    {
        title: 'Hygiene',
        quote: "Your space, dwelling, room, house is a reflection of your mind!",
        author: 'K.I'
    },

    {
        title: 'Food',
        quote: "Food is meant to nourish your body, not to ruin your life.",
        author: 'B.J.K'
    },

    {
        title: 'Money',
        quote: "The love of money is the root of all evil",
        author: 'B.K.J'
    }, 
    
    {
        title: 'Sleep',
        quote: "Sleep is like meds... when taken in the right proportion, it nourishes, when not, it destroys",
        author: 'K.B.J'
    },  
    
    {
        title: 'Beliefs',
        quote: `When you meet a person, bear it in mind that you're not relating with eyes, nose, hair, facial shape, boobs, butt,
                body shape, complexion, legs etc, you're relating with cleaninliness, trustworthiness, fraudulence, inconsistency, 
                integrity, sense of humour, God-fearing, dependability. Be wise!.`,
        author: 'K.J.B'
    }, 
    
    {
        title: 'Salvation',
        quote: `Guy, you can't change your life! You don't know how to! Stop trying cos before you even started trying you've already failed. 
                Don't say you'd figure it out on your own cos you can't, even in a thousand years!. That's how hopeless shit is!
                You and God are'nt cool... can't be cool.
                There's only one person that knows how to change you. And that's Jesus Christ. 
                If you yeild yourself up to him, make him Lord and Saviour over your life and your life would be changed forever.
                Remember! he's the one doing the changing... don't think you have to change first before you come to him. 
                He changes you when you come to him! `,
        author: 'J.B.K'
    },

    {
        title: 'My greatest fear',
        quote: "My greatest fear is me being ignorant and thinking that I'm not.",
        author: 'J.K.B'
    },

]
                    
console.log(myQuotes.length)

function quoteGen() {
    const randomIndex = Math.floor(Math.random() * myQuotes.length)

    quoteTitle.innerText = myQuotes[randomIndex].title
    quotes.innerText = myQuotes[randomIndex].quote
    author.innerText = myQuotes[randomIndex].author
}

getQuotes.addEventListener('click', quoteGen)


