import { v4 as uuidv4 } from 'https://jspm.dev/uuid'

export const breakfasts = [
    {
        food: 'Peanut Butter Bread',
        specification: ['peanut butter', 'bread'],
        price: 3.80,
        image: "images/breakfasts/peanut-butter-bread.jpeg",
        id: uuidv4()
    },
    {
        food: 'American Sandwich',
        specification: ['cheese', 'onion', 'ham', 'salad'],
        price: 7.90,
        image: "images/breakfasts/sandwich.jpeg",
        id: uuidv4()
    },
    {
        food: 'Pancake',
        specification: 'butter included',
        price: 11.95,
        image: "images/breakfasts/pancake.jpeg",
        id: uuidv4()
    },
    {
        food: 'Cereal',
        specification: 'cereal before milk',
        price: 6.50,
        image: "images/breakfasts/cereal.jpeg",
        id: uuidv4()
    },
    {
        food: 'Half Boiled Egg',
        specification: ['egg', 'white pepper'],
        price: 2.20,
        image: "images/breakfasts/half-boiled-egg.jpeg",
        id: uuidv4()
    }
]

export const mainDishes = [
    {
        food: 'Fried Rice',
        specification: ['egg', 'carrot', 'pea', 'onion'],
        price: 12.40,
        image: "images/main-dishes/fried-rice.jpeg",
        id: uuidv4()
    },
    {
        food: 'Nasi Lemak',
        specification: ['egg', 'sambal', 'peanut'],
        price: 12.40,
        image: "images/main-dishes/nasi-lemak.jpeg",
        id: uuidv4()
    },
    {
        food: 'Wonton Noodle',
        specification: ['barbecue pork', 'veges'],
        price: 9.50,
        image: "images/main-dishes/wonton-noodle.jpeg",
        id: uuidv4()
    },
    {
        food: 'Tom Yum W Rice',
        specification: ['prawn','mushroom','clam'],
        price: 14.80,
        image: "images/main-dishes/tomyum-rice.jpeg",
        id: uuidv4()
    },
    {
        food: 'Asam Laksa',
        specification: ['cucumber','pineapple','onion'],
        price: 14.80,
        image: "images/main-dishes/asam-laksa.jpeg",
        id: uuidv4()
    }
]

export const westerns = [
    {
        food: 'Spaghetti',
        specification: ['tomato', 'meat sauce'],
        price: 19.90,
        image: "images/westerns/spaghetti.jpeg",
        id: uuidv4()
    },
    {
        food: 'Sirloin Steak',
        specification: ['mashed potatoes', 'fries'],
        price: 24,
        image: "images/westerns/sirloin-steak.jpeg",
        id: uuidv4()
    },
    {
        food: 'Japanese Curry Rice',
        specification: 'chicken chop',
        price: 13.90,
        image: "images/westerns/japanese-curry.jpeg",
        id: uuidv4()
    },
    {
        food: 'Fish n Chips',
        specification: ['cod', 'fries', 'salad', 'lemon'],
        price: 25,
        image: "images/westerns/fish-n-chips.jpeg",
        id: uuidv4()
    },
    {
        food: 'Pasta',
        specification: ['cheese', 'clam', 'tomato'],
        price: 18,
        image: "images/westerns/pasta.jpeg",
        id: uuidv4()
    }
]

export const addOns = [
    {
        food: 'White Rice',
        specification: 'regular',
        price: 2,
        image: "images/add-ons/rice.jpeg",
        id: uuidv4()
    },
    {
        food: 'Extra Noodles',
        specification: 'regular',
        price: 2.50,
        image: "images/add-ons/extra-noodle.jpeg",
        id: uuidv4()
    },
    {
        food: 'Fries',
        specification: 'sauce included',
        price: 4.50,
        image: "images/add-ons/fries.jpeg",
        id: uuidv4()
    },
    {
        food: 'Mushroom Soup',
        specification: ['mushroom', 'broth'],
        price: 5,
        image: "images/add-ons/mushroom-soup.jpeg",
        id: uuidv4()
    },
    {
        food: 'Curry Soup',
        specification: 'potato',
        price: 5,
        image: "images/add-ons/curry-soup.jpeg",
        id: uuidv4()
    }
]

export const beverages = [
    {
        food: 'Kopi O',
        specification: 'hot',
        price: 8,
        image: "images/beverages/kopi-o.jpeg",
        id: uuidv4()
    },
    {
        food: 'Americano',
        specification: 'hot',
        price: 6.50,
        image: "images/beverages/americano.jpeg",
        id: uuidv4()
    },
    {
        food: 'Lemon Tea',
        specification: 'cold',
        price: 8.20,
        image: "images/beverages/lemon-tea.jpeg",
        id: uuidv4()
    },
    {
        food: 'Three Layer Milktea',
        specification: 'cold',
        price: 12,
        image: "images/beverages/three-layer-milktea.png",
        id: uuidv4()
    },
    {
        food: 'Choco Ice Blended',
        specification: 'cold',
        price: 12.90,
        image: "images/beverages/chocolate-ice-blended.jpeg",
        id: uuidv4()
    }
]

export const desserts = [
    {
        food: 'Chocolate Cake',
        specification: '-',
        price: 5,
        image: "images/desserts/chocolate-cake.jpeg",
        id: uuidv4()
    },
    {
        food: 'Burnt Cheesecake',
        specification: 'cheese',
        price: 5,
        image: "images/desserts/burnt-cheesecake.jpeg",
        id: uuidv4()
    },
    {
        food: 'Pudding',
        specification: 'white cream',
        price: 4.50,
        image: "images/desserts/pudding.jpeg",
        id: uuidv4()
    },
    {
        food: 'Brownies',
        specification: 'chocolate',
        price: 4.80,
        image: "images/desserts/brownies.jpeg",
        id: uuidv4()
    },
    {
        food: 'Mochi',
        specification: 'bean paste',
        price: 6.90,
        image: "images/desserts/mochi.jpeg",
        id: uuidv4()
    }
]