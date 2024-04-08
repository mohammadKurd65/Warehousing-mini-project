
import Storage from "./storage.js";
const addNewProductBtn = document.getElementById("add-new-product");
const searchInput = document.getElementById("search-input");
const selectedSort = document.getElementById("sort-products");
// const deleteProduct = document.getElementById("delete-product");
class ProductView{
    constructor(){
addNewProductBtn.addEventListener("click", (e)=> this.addNewProduvt(e));
searchInput.addEventListener("input", (e)=> this.searchProducts(e));
selectedSort.addEventListener("change",(e)=> this.sortProducts(e));
// deleteProduct.addEventListener("click", (e)=> this.deleteProduct(e));
this.products = [];
    }  

    setApp(){
        this.products = Storage.getAllProducts();
    }

    addNewProduvt(e){
e.preventDefault();
const title = document.querySelector("#product-title").value;
const quantity = document.querySelector("#product-Quantity").value;
const category = document.querySelector("#product-category").value;
if(!title || !category || !quantity) return;
Storage.saveProducts({category, title, quantity});
this.products = Storage.getAllProducts();
this.createProductsList(this.products);

    }

    createProductsList(products){
        let result = "";
        products.forEach((item)=>{
            const selectedCategory = Storage.getAllCategories().find((c) => c.id == item.category);
            result += `<div class="flex items-center justify-between" >
            <span class="text-slate-400">${item.title}</span>
            <div class="flex items-center gap-x-4">
            <span class="text-slate-400">${new Date().toLocaleDateString("fa-IR")}</span>
            <span class="block px-3 py-0.5 border border-slate-400 rounded-xl text-sm text-slate-400">${selectedCategory.title}</span>
            <span class="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500  border-2 border-slate-300  text-slate-300">${item.quantity}</span>
            <button class="delete-product border px-2 py-0.5 rounded-2xl border-red-500 text-red-500" data-product-id=${item.id} >delete</button>
            
            </div>
            
            
            </div>`
        });

        
        const productsDom = document.getElementById("products-list");
        productsDom.innerHTML = result;

        const deleteBtns = [...document.querySelectorAll(".delete-product")];
        deleteBtns.forEach((item)=>{
            item.addEventListener("click", (e)=> this.deleteProduct(e));
        })
    }

    searchProducts(e){
        const value = e.target.value.trim().toLowerCase();
        const filteredProducts = this.products.filter((p)=>{
            return p.title.toLowerCase().includes(value);
        });
        
        this.createProductsList(filteredProducts);
        
    }

    sortProducts(e){
const value = e.target.value;
// console.log(value);
this.products = Storage.getAllProducts(value);
// console.log(this.products);
this.createProductsList(this.products);
    }

    deleteProduct(e){
        const productId = e.target.dataset.productId; 
        Storage.deleteProduct(productId);
        this.products = Storage.getAllProducts();
        this.createProductsList(this.products);

    }

}

export default new ProductView();