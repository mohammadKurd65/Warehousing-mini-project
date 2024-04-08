//title, description => {}=>saveCategory => ...
import Storage from "./storage.js";
const categoryTitle = document.querySelector("#category-title");
const categoryDescription = document.querySelector("#category-description");
const addNewCategoryBtn = document.querySelector("#add-new-category");
const togglrAddCategoryBtn = document.getElementById("toggle-add-category");
const categoryWrapper = document.getElementById("category-wrapper");
const cancelAddCategoryBtn = document.getElementById("cancel-add-category");


class Categotyview{
    constructor(){
addNewCategoryBtn.addEventListener("click",(e) => this.addNewCategory(e));
togglrAddCategoryBtn.addEventListener("click", (e)=> this.toggleAddCategory(e));
cancelAddCategoryBtn.addEventListener("click", (e)=> this.cancelAddCategory(e));
this.categoriees= [];
    }

    addNewCategory(e){
e.preventDefault();
const title = categoryTitle.value;
const desceription = categoryDescription.value;
if(!title || !desceription) return;
Storage.saveCategory({title, desceription});
this.categories = Storage.getAllCategories();
//update Dome: update select option in categoies
this.createCategoriesList();
categoryDescription.value = "";
categoryTitle.value = "";
categoryWrapper.classList.add("hidden");
togglrAddCategoryBtn.classList.remove("hidden");
    }
    setApp(){
        this.categories = Storage.getAllCategories();
    }

    createCategoriesList(){
let result = ` <option class="bg-slate-500 text-slate-300" value="">select a catagory</option>`
this.categories.forEach((Element)=>{
    result += ` <option class="bg-slate-500 text-slate-300" value=${Element.id}>${Element.title}</option>`
});

const categoryDom = document.getElementById("product-category");
categoryDom.innerHTML = result;
    }

    toggleAddCategory(e){
        e.preventDefault();
categoryWrapper.classList.remove("hidden");
togglrAddCategoryBtn.classList.add("hidden");
    }

    cancelAddCategory(e){
        e.preventDefault();
        categoryWrapper.classList.add("hidden");
togglrAddCategoryBtn.classList.remove("hidden");
    }
}
export default new Categotyview();
