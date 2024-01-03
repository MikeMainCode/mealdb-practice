let cuisine = window.sessionStorage.getItem("cuisine");

if (cuisine !== "" || cuisine !== null) {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine}`)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data.meals);

            let sectionTitle = document.getElementById("page-title");
            sectionTitle.textContent = "🍴 " + cuisine + " Cuisine 🍴";

            let meal = data.meals[0];

            let cardGroupsSect = document.getElementById("card-groups");

            let fourDishes = [];

            let cardGroup = 0;
            let mealObj = {};
            for (let i = 0; i < data.meals.length; i++) {
                mealObj = {
                    dishId: data.meals[i].idMeal,
                    dishTitle: data.meals[i].strMeal,
                    dishThumb: data.meals[i].strMealThumb,
                };

                fourDishes.push(mealObj);

                if (fourDishes.length === 4) {
                    cardGroupsSect.appendChild(
                        createCardGroupRow(fourDishes, ++cardGroup)
                    );
                    fourDishes.length = 0;
                }
                //console.log(data.meals[i]);
            }

            cardGroupsSect.appendChild(
                createCardGroupRow(fourDishes, ++cardGroup)
            );
        });
}

// Create Card Group Row
let createCardGroupRow = (fourDishes, cardGroupId) => {
    let cardGroupSect = document.createElement("section");
    cardGroupSect.setAttribute("class", "row card-group-" + cardGroupId);

    for (let [key, dish] of fourDishes.entries()) {
        let dishCardBox = createCardBox(
            dish.dishId,
            dish.dishTitle,
            dish.dishThumb
        );

        cardGroupSect.appendChild(dishCardBox);

        if (key === 0 || key === 2) {
            let s1 = document.createElement("section");
            s1.setAttribute("class", "col-md col-lg");
            cardGroupSect.append(s1);
        } else if (key === 1) {
            let s2 = document.createElement("section");
            s2.setAttribute("class", "col-lg");
            cardGroupSect.append(s2);
        }
    }
    // console.log(cardGroupSect);

    return cardGroupSect;
};

// Create Card Box section
let createCardBox = (dishId, dishTitle, imgSrc) => {
    let cardImg = document.createElement("img"); //new Image();
    cardImg.src = imgSrc;
    cardImg.alt = dishTitle;
    cardImg.setAttribute("class", "card-img-top img-fluid card-dish-img");
    // console.log(cardImg);

    let dishCuisineDiv = document.createElement("div");
    dishCuisineDiv.setAttribute("class", "dish-cuisine");
    let dishCuisineText = document.createTextNode("Cuisine: " + cuisine);
    dishCuisineDiv.appendChild(dishCuisineText);

    let dishTitleH4 = document.createElement("h4");
    dishTitleH4.id = dishId;
    dishTitleH4.setAttribute("class", "dish-title");
    let dishTitleText = document.createTextNode(dishTitle);
    dishTitleH4.appendChild(dishTitleText);

    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.setAttribute("class", "card-body overlay p-4");
    cardBodyDiv.appendChild(dishTitleH4);
    cardBodyDiv.appendChild(dishCuisineDiv);

    let dishTitleSDH2 = document.createElement("h2");
    dishTitleSDH2.setAttribute("class", "h6 dish-title-sd mt-n3 d-lg-none");
    let dishTitleSDH2Text = document.createTextNode(dishTitle);
    dishTitleSDH2.appendChild(dishTitleSDH2Text);

    let cardSect = document.createElement("section");
    cardSect.setAttribute("class", "card");
    cardSect.appendChild(cardImg);
    cardSect.appendChild(cardBodyDiv);
    cardSect.appendChild(dishTitleSDH2);
    // console.log("root ", cardSect);

    let letsTryBtn = document.createElement("button");
    letsTryBtn.setAttribute(
        "class",
        "btn btn-secondary btn-try-it px-4 py-2 mt-lg-n4 mt-md-4"
    );
    letsTryBtn.setAttribute("title", "Try this dish 🤤");
    letsTryBtn.setAttribute("id", dishId);
    letsTryBtn.innerText = "Let's Try!!";
    letsTryBtn.addEventListener("click", (e) => {
        window.sessionStorage.setItem("mealId", e.target.id);
        location.href = "recipe.html";
    });

    let cardBoxSect = document.createElement("section");
    cardBoxSect.setAttribute("class", "card-box my-5 col-md-4 col-lg-2");
    cardBoxSect.appendChild(cardSect);
    cardBoxSect.appendChild(letsTryBtn);

    return cardBoxSect;
};
