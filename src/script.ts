const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement
const button = document.querySelector('button') as HTMLElement
const reviewContainer = document.querySelector('.reviews') as HTMLElement
const container = document.querySelector('.container') as HTMLElement

const mainImageContainer = document.querySelector('.main-image') as HTMLElement
const image = document.createElement('img') as HTMLImageElement


// Literal price type (aka type alias)
type Price = 45 | 34 | 23
type Country = 'Colombia' | 'Scotland' | 'Poland'

// Enum
const ADMIN = 'admin';
const READ_ONLY = 'read-only';

enum Permission {
    ADMIN,
    READ_ONLY,
}

enum LoyaltyUser {
    GOLD_USER = 'GOLD_USER',
    SILVER_USER = 'SILVER_USER',
    BRONZE_USER = 'BRONZE_USER',
}

// Interface
interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date?: string;
}

interface Review2 {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
    description: string;
}

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

// Class
class MainProperty {
    src: string
    title: string
    review: Review[]
    constructor(src: string, title: string, review: Review[]) {
     this.src = src
     this.title = title
     this.review = review
    }
}

// An Object
let yourMainProperty = new MainProperty("image/sofa0.jpg", "Italian", [{name: "John", stars: 5, loyaltyUser: LoyaltyUser.GOLD_USER}]);

image.setAttribute('src', yourMainProperty.src)
image.classList.add('image')
image.setAttribute('title', yourMainProperty.title)
mainImageContainer.appendChild(image)

// Use to log users in
let isLoggedIn: boolean

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
let authorityStatus: any;


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

function getTopTwoReviews(reviews: Review[]): Review[] {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
    return sortedReviews.slice(0, 2)
}

function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay.innerHTML = value.toString() + ' review' + makeMultiple(reviews.length) +
        ' | last reviewed by ' + reviewer + ' ' + iconDisplay
}

function populateUser(isReturning: boolean, userName: string) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

function makeMultiple(value: number) {
    if (value > 1 || value === 0) {
        return 's'
    } else return ''
}

function showDetails(authorityStatus: typeof isLoggedIn | Permission, element: HTMLDivElement, price: number) {
    if (authorityStatus) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
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

