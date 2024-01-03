// Display Dish 1 of the Day Data

let meal1 = document.getElementById("sec1-dish-1");

if (meal1) {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((response) => response.json())
        .then((data) => {
            // Section1 Dish1 Img
            meal1.src = data.meals[0].strMealThumb;

            // Section1 Dish1 Title
            document.getElementById("sec1-dish-1-title").innerHTML =
                data.meals[0].strMeal;

            // Section1 Dish1 Title (Small Screen Devices)
            let elems = document.querySelectorAll(".sec1-dish-1");
            for (let i = 0; i < elems.length; i++) {
                elems[i].innerHTML = data.meals[0].strMeal;
                // console.log(elems[i].innerHTML);
            }

            // Section1 Dish1 Cuisine
            document.getElementById("sec1-dish-1-cuisine").innerHTML =
                data.meals[0].strArea + " Cuisine";

            let tryitBtn = document.getElementById("btn-try-it-1");
            tryitBtn.id = data.meals[0].idMeal;
        });
}

let meal2 = document.getElementById("sec1-dish-2");

if (meal2) {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((response) => response.json())
        .then((data) => {
            // Section1 Dish2 Img
            meal2.src = data.meals[0].strMealThumb;

            // Section1 Dish2 Title
            document.getElementById("sec1-dish-2-title").innerHTML =
                data.meals[0].strMeal;

            // Section1 Dish2 Title (Small Screen Devices)
            let elems = document.querySelectorAll(".sec1-dish-2");
            for (let i = 0; i < elems.length; i++) {
                elems[i].innerHTML = data.meals[0].strMeal;
                // console.log(elems[i].innerHTML);
            }

            // Section1 Dish2 Cuisine
            document.getElementById("sec1-dish-2-cuisine").innerHTML =
                data.meals[0].strArea + " Cuisine";

            let tryitBtn = document.getElementById("btn-try-it-2");
            tryitBtn.id = data.meals[0].idMeal;
        });
}

// Display Dish 1 of the Day Data

let meal3 = document.getElementById("sec1-dish-3");

if (meal3) {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((response) => response.json())
        .then((data) => {
            // Section1 Dish3 Img
            meal3.src = data.meals[0].strMealThumb;

            // Section1 Dish3 Title
            document.getElementById("sec1-dish-3-title").innerHTML =
                data.meals[0].strMeal;

            // Section1 Dish3 Title (Small Screen Devices)
            let elems = document.querySelectorAll(".sec1-dish-3");
            for (let i = 0; i < elems.length; i++) {
                elems[i].innerHTML = data.meals[0].strMeal;
                // console.log(elems[i].innerHTML);
            }

            // Section1 Dish3 Cuisine
            document.getElementById("sec1-dish-3-cuisine").innerHTML =
                data.meals[0].strArea + " Cuisine";

            let tryitBtn = document.getElementById("btn-try-it-3");
            tryitBtn.id = data.meals[0].idMeal;
        });
}

let meal4 = document.getElementById("sec1-dish-4");

if (meal4) {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((response) => response.json())
        .then((data) => {
            // Section1 Dish4 Img
            meal4.src = data.meals[0].strMealThumb;

            // Section1 Dish4 Title
            document.getElementById("sec1-dish-4-title").innerHTML =
                data.meals[0].strMeal;

            // Section1 Dish4 Title (Small Screen Devices)
            let elems = document.querySelectorAll(".sec1-dish-4");
            for (let i = 0; i < elems.length; i++) {
                elems[i].innerHTML = data.meals[0].strMeal;
                // console.log(elems[i].innerHTML);
            }

            // Section1 Dish4 Cuisine
            document.getElementById("sec1-dish-4-cuisine").innerHTML =
                data.meals[0].strArea + " Cuisine";

            let tryitBtn = document.getElementById("btn-try-it-4");
            tryitBtn.id = data.meals[0].idMeal;
        });
}

// Store Meal ID in sesssion storage & redirect to View the Recipe
const viewRecipe = (e) => {
    window.sessionStorage.setItem("mealId", e.target.id);
    // console.log(window.sessionStorage.getItem("mealId"));
    location.href = "recipe.html";
};

let tryBtns = document.getElementsByClassName("btn-try-it");

for (let btn of tryBtns) {
    btn.addEventListener("click", viewRecipe);
}

// Section - Search Dishes by Name or Keywords

let searchByDishName = document.getElementById("search-dish-name");

let dishes = [];
searchByDishName.addEventListener("input", (e) => {
    let search = e.target.value;
    if (search.length > 1) {
        let ddOptions = document.getElementById("search-by-dish");
        if (ddOptions.hasChildNodes) {
            const newNodeToReplace = ddOptions.cloneNode(false);
            ddOptions.replaceWith(newNodeToReplace);
        }
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
            .then((response) => response.json())
            .then((data) => {
                dishes.length = 0;
                for (let meal of data.meals) {
                    let option = document.createElement("option");
                    option.setAttribute("class", "dropdown-item");
                    option.setAttribute("name", "dropdown-item");
                    option.setAttribute("value", meal.strMeal);
                    option.setAttribute("id", meal.idMeal);

                    dishes.push({
                        dishName: meal.strMeal,
                        dishId: meal.idMeal,
                    });
                    document
                        .getElementById("search-by-dish")
                        .appendChild(option);

                    // console.log(meal.idMeal + " " + meal.strMeal);
                }
            })
            .catch((err) => console.log(err));
    }
});

document
    .getElementsByName("search-dish-name")[0]
    .addEventListener("change", (e) => {
        window.sessionStorage.setItem("mealId", dishes[0].dishId);
    });

let btnSearchByDishName = document.getElementById("btnSearchByDishName");
btnSearchByDishName.addEventListener("click", () => {
    location.href = "recipe.html";
});

// Section - Cuisines

let cuisineList = [
    "American",
    "British",
    "Canadian",
    "Chinese",
    "Croatian",
    "Dutch",
    "Egyptian",
    "French",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Jamaican",
    "Kenyan",
    "Malaysian",
    "Moroccan",
    "Polish",
    "Russian",
    "Spanish",
    "Thai",
    "Tunisian",
    "Turkish",
    "Vietnamese",
];

let btnsCuisine = document.querySelector(".btns-cuisine");
btnsCuisine.setAttribute(
    "style",
    "display:flex; flex-direction:row; flex-wrap:wrap; justify-content:center;"
);

// console.log(btnsCuisine.children);

for (let [ind, cuisine] of cuisineList.entries()) {
    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.classList.add("mx-1");
    btn.classList.add("my-2");
    btn.classList.add("px-2");
    btn.classList.add(
        ind % 2 === 0 ? "btn-secondary" : "btn-outline-secondary"
    );
    btn.textContent = cuisine;
    btnsCuisine.appendChild(btn);
}

// Dishes filtered by Cuisine

let viewRecipesByCuisine = (e) => {
    console.log(e.target.textContent);
    window.sessionStorage.setItem("cuisine", e.target.textContent);
    location.href = "cuisine.html";
};

btnsCuisine = btnsCuisine.children;
for (let btn of btnsCuisine) {
    btn.addEventListener("click", viewRecipesByCuisine);
}
