/* Index HTML JS */

// Declare global variable for initializing an array that contains all the html elements that have the desired css class
const dishes = document.querySelectorAll('.dishes-div-reg');

// Declared for loop to go through the dishes array that'll add an eventlistener to call the function expand()
for (let i = 0; i < dishes.length; i++) {
    const element = dishes[i];
    element.addEventListener("click", expand);
}

/**
 * Declare the function expand(event) that'll add/remove a css class to make the clicked image larger than the rest
 * @param {*} event 
 */
function expand(event) {
    // Declare variables
    const currentDish = event.currentTarget;
    const largeImg = document.querySelector('.img-size-large');
    const shownArticle = document.querySelector('.dish-div-article-show');

    // Declare If loop to check if elements in the html page aren't null to prevent an error when the page is first loaded
    if (largeImg != null && shownArticle != null) {
        // Removes a css class and adds another
        largeImg.classList.remove('img-size-large');
        largeImg.classList.add('img-size-reg');

        shownArticle.classList.remove('dish-div-article-show');
        shownArticle.classList.add('dish-div-article');
    }

    // Declare variable that is initialized by the image 
    const currentImg = currentDish.firstElementChild.firstElementChild;

    // Removes a css class and adds another
    currentImg.classList.remove('img-size-reg');
    currentImg.classList.add('img-size-large');

    // Declare variable that is initialized by an article 
    const currentArticle = currentDish.lastElementChild;

    // Removes a css class and adds another
    currentArticle.classList.remove('dish-div-article');
    currentArticle.classList.add('dish-div-article-show');
} // End expand function

/* Meal Plan HTML JS */

// Declare global variable for initializing an array that contains all the html elements that have the desired css class
const mealPlanDishes = document.querySelectorAll('.aside-meal-dish-div');

// Declared for loop to go through the dishes array that'll add an eventlistener to call the function createMealPlanItem()
for (let i = 0; i < mealPlanDishes.length; i++) {
    const element = mealPlanDishes[i];
    element.addEventListener("click", createMealPlanItem);
}

/**
 * Declare the function createMealPlanItem(event) that'll create a div containing the selected element's name and price. This'll be placed
 * into the right side of the meal plan.
 * @param {*} event 
 */
function createMealPlanItem(event) {
    // Declare variables
    const currentDish = event.currentTarget;
    const currentDishName = currentDish.firstElementChild.lastElementChild.firstElementChild.textContent;
    const currentDishPrice = currentDish.lastElementChild.lastElementChild.textContent;

    // Create a new div element for the selected dish
    const newDishDiv = document.createElement('div');
    newDishDiv.classList.add('meal-plan-dish-div');

    // Create a div for dish information
    const dishInfoDiv = document.createElement('div');
    dishInfoDiv.classList.add('meal-plan-dish-info-flex-div');

    // Create a paragraph element for dish name and price
    const dishNamePara = document.createElement('p');
    dishNamePara.innerHTML = `<strong>${currentDishName}</strong>`;

    const dishPricePara = document.createElement('p');
    dishPricePara.textContent = currentDishPrice;

    // Append dish name and price paragraphs to the dish info div
    dishInfoDiv.appendChild(dishNamePara);
    dishInfoDiv.appendChild(dishPricePara);

    // Create a div for buttons
    const btnDiv = document.createElement('div');
    btnDiv.classList.add('meal-plan-dish-btn-div');

    // Create Add and Remove buttons
    const addBtn = document.createElement('button');
    addBtn.type = 'button';
    addBtn.classList.add('dish-add-btn');
    addBtn.textContent = 'Add Another Order';
    addBtn.setAttribute('onclick', 'addAnotherDishItem(event)');


    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.classList.add('dish-remove-btn');
    removeBtn.textContent = 'Remove';
    removeBtn.setAttribute('onclick', 'removeDishItem(event)');

    // Append buttons to the button div
    btnDiv.appendChild(addBtn);
    btnDiv.appendChild(removeBtn);

    // Append dish info div and button div to the new dish div
    newDishDiv.appendChild(dishInfoDiv);
    newDishDiv.appendChild(btnDiv);

    // Append the new dish div to the form in the rightside-meal-section
    const rightSideMealSection = document.getElementById('rightside-meal-dishes-div');
    rightSideMealSection.appendChild(newDishDiv);


    // Call the function updateTotalPrice()
    updateTotalPrice();
} // End createMealPlanItem

/**
 * Declare the function addAnotherDishItem(event) that'll basically duplicate the div.
 * @param {*} event 
 */
function addAnotherDishItem(event) {
    // Declare variable
    const mealPlanDishDiv = event.currentTarget.parentElement.parentElement;

    // Declare variable from cloned parent node
    const clonedDishDiv = mealPlanDishDiv.cloneNode(true);

    // Declare variable to find the div to insert duplicated div
    const rightSideMealSection = document.getElementById('rightside-meal-dishes-div');

    // Append the div
    rightSideMealSection.appendChild(clonedDishDiv);

    // Call the function updateTotalPrice()
    updateTotalPrice();
} // End addAnotherDishItem

/**
 * Declare the function removeDishItem(event) that'll basically delelte the div.
 * @param {*} event 
 */
function removeDishItem(event) {
    event.currentTarget.parentElement.parentElement.remove();

    // Call the function updateTotalPrice()
    updateTotalPrice();
} // End removeDishItem


/**
 * Declare the function updateTotalPrice(event) that'll basically update the price.
 */
function updateTotalPrice() {
    // Declare varibles
    const dishesPriceElements = document.querySelectorAll('.meal-plan-dish-info-flex-div');
    const totalPriceDisplay = document.getElementById('rightside-meal-info-bottom-div');
    let totalPrice = 0;

    // Declare for loop to go through the divs that are in the meal plan div and parse the price to add onto the total
    for (let i = 0; i < dishesPriceElements.length; i++) {
        const priceString = dishesPriceElements[i].lastElementChild.textContent.replace('$', '');
        const price = parseFloat(priceString);
        totalPrice += price;
    }

    // Add decimal to price and display
    let totalPricing = totalPrice.toFixed(2);
    totalPriceDisplay.lastElementChild.textContent = '$' + totalPricing;
} // End updateTotalPrice