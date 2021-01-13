export const Catalog = (havestedFood) => {
    let foodHTMLRepresentation = "";
    for(let food of havestedFood){
        foodHTMLRepresentation += `<section class="plant">${food.type}</section>`
    }
    const contentElement = document.querySelector(".container")
    contentElement.innerHTML += foodHTMLRepresentation;
}