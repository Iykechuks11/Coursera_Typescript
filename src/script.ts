import { Permission, LoyaltyUser } from "./enum"
import { Price, Country } from "./types"
import { Review, Review2 } from "./interface"
import { getTopTwoReviews, populateUser, showReviewTotal, showDetails } from "./util"
import { MainProperty } from "./class"

const button = document.querySelector('button') as HTMLElement
const reviewContainer = document.querySelector('.reviews') as HTMLElement
const container = document.querySelector('.container') as HTMLElement

const mainImageContainer = document.querySelector('.main-image') as HTMLElement
const image = document.createElement('img') as HTMLImageElement

interface User {
    firstName: string;
    lastName: string;
    age: number;
    permission: Permission;
    isReturning: boolean;
    stayAt: string[];
}

interface Properties {
    image: string;
    title: string;
    price: Price;
    location: {
        firstLine: string;
        city: string;
        code: number | string;
        country: Country;
    };
    contact: [number, string];
    isAvailable: boolean;
}

// An Object
let yourMainProperty = new MainProperty("image/sofa0.jpg", "Italian", [{ name: "John", stars: 5, loyaltyUser: LoyaltyUser.GOLD_USER }]);

image.setAttribute('src', yourMainProperty.src)
image.classList.add('image')
image.setAttribute('title', yourMainProperty.title)
mainImageContainer.appendChild(image)

const propertyContainer = document.querySelector('.properties') as HTMLElement
const footer = document.querySelector('.footer') as HTMLElement

// Reviews
const reviews: (Review | Review2)[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021',
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021',
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
        description: 'Great hosts, travel to Istanbul and have a great time at omars',
    },
]


// User
const you: User = {
    firstName: 'Bobby',
    lastName: 'John',
    age: 40,
    permission: Permission.ADMIN,
    isReturning: true,
    stayAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

// Array Properties
const properties: Properties[] = [
    {
        image: 'image/sofa1.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+1123495082908, 'marywinkle@gmail.com'],
        isAvailable: true
    },
    {
        image: 'image/sofa2.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Scotland'
        },
        contact: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: false
    },
    {
        image: 'image/sofa3.jpg',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'Poland'
        },
        contact: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: false
    }
]

let currentLocation: [string, string] = ['Istanbul', '07:53'];
// let authorityStatus: any;


// Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;

    const img = document.createElement('img');
    img.classList.add('surf_img')
    img.setAttribute('src', properties[i].image);

    card.appendChild(img);

    propertyContainer.appendChild(card);

    showDetails(you.permission, card, properties[i].price)
}


//Broken code
let count: number = 0
function addReviews(array: Review[]): void {
    if (!count) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button)
    }
}

// Function calls
button.addEventListener('click', () => addReviews(reviews))
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.firstName)
// makeMultiple(reviews.length)

// Footer
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1];

