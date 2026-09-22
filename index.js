const { initializeDatabase } = require("./db/db.connect");

const Restaurant = require("./models/restaurant.models");

initializeDatabase();

//1. Write a function to create a new restaurant data given below.
const newRestaurant = {
  name: "Somi",
  cuisine: ["Greek"],
  location: "11 Main Road, Gem",
  rating: 4.3,
  reviews: [],
  website: "https://somi-example.com",
  phoneNumber: "+1234997390",
  openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationsNeeded: false,
  isDeliveryAvailable: true,
  menuUrl: "https://somi-example.com/menu",
  photos: ["https://example.com/somi-photo1.jpg", "https://example.com/somi-photo2.jpg"],
};

//2. Run the same function to create another restaurant data in the database.
const newRestaurant2 = {
  name: "Yo China",
  cuisine: ["Chinese", "Italian"],
  location: "MG Road, Bangalore",
  rating: 3.9,
  reviews: [],
  website: "https://yo-example.com",
  phoneNumber: "+1288997392",
  openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isDeliveryAvailable: false,
  menuUrl: "https://yo-example.com/menu",
  photos: ["https://example.com/yo-photo1.jpg", "https://example.com/yo-photo2.jpg", "https://example.com/yo-photo3.jpg"]
};

async function createRestaurant(newRestaurant) {
    try {
        const restaurant = new Restaurant(newRestaurant);
        const saveRestaurant = await restaurant.save();
        console.log("New Restaurant Data", saveRestaurant);
    } catch (error) {
        throw error;
    }
};

// createRestaurant(newRestaurant);
// createRestaurant(newRestaurant2);

//3.Create a function to read all restaurants from the database. Console all the restaurants. Use proper function and variable names.

//to get all restaurants from the database.
async function getAllRestaurant() {
    try {
        const allRestaurants = await Restaurant.find();
        console.log(allRestaurants);
        
    } catch (error) {
        throw error
    }
}

// getAllRestaurant();

//4. Create a function to read a restaurant by its name ("New Restaurant"). Console the restaurant details. Use proper function and variable names.
async function readRestaurantByName(restaurantName) {
    try {
        const restaurant = await Restaurant.findOne({name: restaurantName});
        console.log(restaurant);
    } catch (error) {
        throw error
    }
}

// readRestaurantByName("New Restaurant")

//5. Create a function to read all restaurants which offers reservations. Console the restaurant details.
async function findRestaurantWithReservations() {
    try {
        const restaurantWithReservations = await Restaurant.find({reservationsNeeded: true});
        console.log(restaurantWithReservations);
    } catch (error) {
        throw error;
    }
}

// findRestaurantWithReservations();

// 6. Create a function to read all restaurants which offers delivery. Console the restaurant details.

async function findIsDeliveryAvailable() {
    try {
        const isDeliveryAvailable = await Restaurant.find({isDeliveryAvailable: true});
        console.log(isDeliveryAvailable);
    } catch (error) {
        throw error
    }
}

// findIsDeliveryAvailable();

// 7.Create a function to read a restaurant by phone number (+1288997392). Console the restaurant details.
async function findRestaurantByPhone(number) {
    try {
        const restaurantByPhone = await Restaurant.findOne({phoneNumber: number})
        console.log(restaurantByPhone)
    } catch (error) {
        console.log("Error finding restaurant", error)
    }
}

// findRestaurantByPhone("+1288997392");

//8. Create a function to read all restaurants by cuisine ("Italian"). Console all the restaurants with Italian cuisine.
async function readRestaurantByCuisine(cuisine) {
    try {
        const restaurantByCuisine = await Restaurant.find({cuisine: cuisine})
        console.log(restaurantByCuisine);
        
    } catch (error) {
        throw error
    }
}

// readRestaurantByCuisine("Italian");

// 1. Create a function that accepts a restaurant ID and an object with updated data, and updates the restaurant with the provided ID. Take the _id of the restaurant which has the name Yo China and update its rating from 3.9 to 4.1. Console the updated restaurant.
async function updateRestaurant(restaurantId, dataToUpdate) {
    try {
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId, dataToUpdate, {new: true} )
        console.log(updatedRestaurant); 
        
    } catch (error) {
        throw error
    }

}

// updateRestaurant("6ab15756b46d1a2c1418a6fd", { rating: 4.1 })

//2. Create a function that accepts a restaurant name and an object with updated data, and updates the restaurant. Take the restaurant which has the name "Somi" and update its name from "Somi" to "Som Sarovar". Console the updated restaurant.
async function updateRestaurantDetails(restaurantName, dataToUpdate) {
    try {
        const updatedRestaurantDetails = await Restaurant.findOneAndUpdate({name: restaurantName }, dataToUpdate, {new: true})
        console.log(updatedRestaurantDetails);
    } catch (error) {
        throw error;
    }
}

// updateRestaurantDetails("Somi", {name: "Som Sarovar"});

// 3. Create a function that accepts a restaurant's phone number and an object with updated data, and updates the restaurant. Take the restaurant which has the phone number "+1288997392" and update isDeliveryAvailable option to true. Console the updated restaurant.
async function updateRestaurantPhone(number, dataToUpdate) {
    try {
        const updatedRestaurantPhone = await Restaurant.findOneAndUpdate({phoneNumber: number}, dataToUpdate, {new: true});
        console.log(updatedRestaurantPhone);
        
    } catch (error) {
        throw error;
    }
}

// updateRestaurantPhone("+1288997392", {isDeliveryAvailable: true} );

//1. Create a function deleteRestaurantById that accepts a restaurant ID and deletes the restaurant data from the db. Take any restaurant id from your database and delete the records of that restaurant.
async function deleteRestaurantById(restaurantId) {
    try {
        const deletedRestaurant = await Restaurant.findByIdAndDelete(restaurantId);
        console.log(deletedRestaurant);
    } catch (error) {
        throw error
    }
}

// deleteRestaurantById("6ab15756b46d1a2c1418a6fd")

// 2. Create a function deleteRestaurantByName that accepts a restaurant name and deletes the restaurant data from the db. Take any restaurant name from your database and delete the records of that restaurant.
async function deleteRestaurantByName(name) {
    try {
        const deletedRestaurant = await Restaurant.findOneAndDelete({name: name});
        console.log(deletedRestaurant)
    } catch (error) {
        throw error
    }
}

deleteRestaurantByName("Som Sarovar");
