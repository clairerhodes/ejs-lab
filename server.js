const express = require('express');
const app = express();

const RESTAURANT = {
    name: 'The Green Byte Bistro',
    isOpen: true,
    address: '742 Evergreen Rd, Mapleview, OS 45502',
    phone: '555-321-9876',
    menu: [
      { 
        id: 1,
        name: 'Quantum Quinoa Mushroom Burger',
        price: 13.00,
        rating: 4,
        category: 'mains',
        details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
      },
      { 
        id: 2,
        name: 'Binary Berry Cheesecake',
        price: 10.11,
        rating: 3,
        category: 'desserts',
        details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
      },
      { 
        id: 3,
        name: 'Recursive Rigatoni',
        price: 17.00,
        rating: 5,
        category: 'mains',
        details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
      },
      { 
        id: 4,
        name: 'Pumpkin Pi Squared',
        price: 3.14,
        rating: 5,
        category: 'desserts',
        details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
      },
      { 
        id: 5,
        name: 'Fibonacci String Bean Fries',
        price: 11.23,
        rating: 5,
        category: 'sides',
        details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
      }
    ]
}

// run nodemon to continuously run server

// create route to home page
app.get('/', (req, res) => {
    res.render('home.ejs', {RESTAURANT}); // use res.render to display complete HTML pages created with EJS
});

// create route to menu page
app.get('/menu', (req, res) => {
    res.render('menu.ejs', {RESTAURANT});
});

// create a route to category route within menu page
app.get('/menu/:category', (req, res) => {
    // console.log(req.params); // listens for request and shows object being clicked in terminal
    const { category } = req.params; // get the category from the URL or cursor input

    // filter menu items based on their category
    const filteredMenu = RESTAURANT.menu.filter(item => item.category === category); // item IS my menu category
    
    // show filtered menu items on my category.ejs page
    res.render('category.ejs', {
        menuItems: filteredMenu // send filtered data, menuItems is term we use in our EJS file
    });
});



app.listen(3000); // listen after it does everything else in the code