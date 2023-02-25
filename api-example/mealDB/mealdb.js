const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeal(data.meals))
}

const displayMeal = meals => {
    // console.log(meals);
    // step 1: container element
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.innerText = '';
    meals.forEach(meal => {
        // console.log(meal);
        // step 2: create child for each element
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        // step 3: set content of the child
        mealDiv.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="Meal Photo">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.</p>
            </div>
            <button onclick="loadMealDetails2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
            Details
            </button>

        </div>
        `;
        // step 4: appendChild
        mealsContainer.appendChild(mealDiv);
    })
}

const searchMeals = () => {
    const searchText = document.getElementById('search-field').value;
    console.log(searchText);
    loadMeals(searchText);
}

const loadMealDetails = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
        .catch(error => {
            console.log(error);
        })
}

// async await
const loadMealDetails2 = async (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayMealDetails(data.meals[0]);
    }
    catch (error) {
        console.log(error);
    }
}


const displayMealDetails = meal => {
    document.getElementById('mealDetailsLabel').innerText = meal.strMeal;
    const mealDetails = document.getElementById('mealDetailsBody');
    mealDetails.innerHTML = `
    <img src="${meal.strMealThumb}" class="img-fluid" alt="Meal Photo">
    `
}



loadMeals('fish');