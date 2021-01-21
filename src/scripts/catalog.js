
export const Catalog = (havestedFood) => {
    let foodHTMLRepresentation = "";
    for(let food of havestedFood){
        foodHTMLRepresentation += `<section class="plant">
        <div>${food.type}</div>
        <div>${food.amount}</div>
        </section>`
    }
    const contentElement = document.querySelector(".container")
    contentElement.innerHTML += foodHTMLRepresentation;
}