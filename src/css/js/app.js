
import categoryview from "./categoryview.js";
import productview from "./productview.js";

document.addEventListener("DOMContentLoaded",()=>{
    //setApp => categories : ok
    categoryview.setApp();
    productview.setApp();
    console.log(productview);
    // create categories options
    categoryview.createCategoriesList();
    productview.createProductsList(productview.products);
})
class App{
    
}

//* target:
//*1. create category
//* 2. create product based on selected category
//* 3. edit product
//* 4. remove product
//* 5. save product in local storage
//? storage class for hanle application methods
//? productview class
//? categoryview class
//? main and App class