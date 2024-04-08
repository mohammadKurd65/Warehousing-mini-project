const products =[
    {
        id:1,
        title: "React.js",
        category: "frontend",
        createdAt:"2021-10-31T15:02:00.411Z",
    },
    {
        id:2,
        title: "Node.js",
        category: "frontend",
        createdAt:"2021-10-31T15:03:21.556Z",
    },
    {
        id:3,
        title: "Vue.js",
        category: "backend",
        createdAt:"2021-11-01T10:47:26.889Z",
    },

];


const category = [
    {
        id:1,
        title: "frontend",
        desceription: "frontend of application",
        createdAt: "2021-11-01T10:47:26.889Z",
    },
    {
        id:2,
        title: "backend",
        desceription: "backend of application",
        createdAt: "2021-10-01T10:47:26.889Z",
    },

];



export default class Storage{
//add new category
//save category
//getAllCategoryes
static getAllCategories(){
//product
//categories => local storage
const savedCategories = JSON.parse(localStorage.getItem("category")) || [];
// sort =>desecnding
const sortedCategories = savedCategories.sort((a, b)=>{
    return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
});
return sortedCategories;
};

static saveCategory(categoryToSave){
    const savedCategories = Storage.getAllCategories();
    //edit => ... save
    //new => ...save
    const existedItem = savedCategories.find((c)=> c.id === categoryToSave.id);
    if(existedItem){
//edit
existedItem.title = categoryToSave.title;
existedItem.desceription = categoryToSave.desceription;
    }else{
//new
categoryToSave.id = new Date().getTime();
categoryToSave.createdAt = new Date().toISOString();
savedCategories.push(categoryToSave);
    }


    localStorage.setItem("category", JSON.stringify(savedCategories))


};

static getAllProducts(sort = "newest"){
const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
//newest : default
return savedProducts.sort((a, b)=>{
    if(sort === "newest"){
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
    }else if(sort === "oldest"){
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
    }
});

};

static saveProducts(productToSave){
    const savedProducts = Storage.getAllProducts();
    //edit => ... save
    //new => ...save
    const existedItem = savedProducts.find((c)=> c.id === productToSave.id);
    if(existedItem){
//edit
existedItem.title = productToSave.title;
existedItem.quantity = productToSave.quantity;
existedItem.category = productToSave.category;
    }else{
//new
productToSave.id = new Date().getTime();
productToSave.createdAt = new Date().toISOString();
savedProducts.push(productToSave);
    }


    localStorage.setItem("products", JSON.stringify(savedProducts))
};

static deleteProduct(id){
const savedProducts = Storage.getAllProducts();
const fillteredProducts = savedProducts.fillter((p)=> p.id != parseInt(id) );
localStorage.setItem("products", JSON.stringify(fillteredProducts));
}

};