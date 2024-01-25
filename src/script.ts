const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement

function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    // reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
    reviewTotalDisplay.innerHTML = value.toString() + ' review' +makeMultiple(reviews.length) +
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

// Use to log users in
let isLoggedIn: boolean

const propertyContainer = document.querySelector('.properties') as HTMLElement
const footer = document.querySelector('.footer') as HTMLElement

// Enum

// const GOLD_USER = 'GOLD_USER';
// const SILVER_USER = 'SILVER_USER';
// const BRONZE_USER = 'BRONZE_USER';

// enum LoyaltyUser {
//     GOLD_USER,
//     SILVER_USER,
//     BRONZE_USER
// }

enum LoyaltyUser {
    GOLD_USER = 'GOLD_USER',
    SILVER_USER = 'SILVER_USER',
    BRONZE_USER = 'BRONZE_USER',
}

// Reviews
const reviews: (
    {
        name: string;
        stars: number;
        loyaltyUser: LoyaltyUser;
        date: string;
    }
    |
    {
        name: string;
        stars: number;
        loyaltyUser: LoyaltyUser;
        date: string;
        description: string;
    })[] = [
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

// Enum
const ADMIN = 'admin';
const READ_ONLY = 'read-only';


enum Permission {
    ADMIN,
    READ_ONLY,
}


// User
const you: {
    firstName: string;
    lastName: string;
    age: number;
    permission: Permission;
    isReturning: boolean;
    stayAt: string[];
} = {
    firstName: 'Bobby',
    lastName: 'John',
    age: 40,
    permission: Permission.ADMIN,
    isReturning: true,
    stayAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

// Literal price type (aka type alias)
type Price = 45 | 34 | 23
type Country = 'Colombia' | 'Scotland' | 'Poland'

// Array Properties
const properties: {
    image: string;
    title: string;
    price: Price;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: [number, string];
    isAvailable: boolean;
}[] = [
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


// Function calls
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.firstName)
// makeMultiple(reviews.length)

let authorityStatus : any;

function showDetails(authorityStatus: typeof isLoggedIn | Permission, element : HTMLDivElement, price: number) {
   if (authorityStatus) {
       const priceDisplay = document.createElement('div')
       priceDisplay.innerHTML = price.toString() + '/night'
       element.appendChild(priceDisplay)
   }
}

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

// Footer
let currentLocation: [string, string] = ['Istanbul', '07:53'];
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1];

