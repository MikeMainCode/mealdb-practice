let mealId = window.sessionStorage.getItem("mealId");

if (mealId !== "" || mealId !== null) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then((response) => response.json())
        .then((data) => {
            // // console.log(data.meals[0]);

            // // Web page (Tab) title
            // document.title = `${data.meals[0].strMeal} Recipe | 👨🏻‍🍳 Cook with Book 📖`;

            // // Recipe Thumbnail
            // let recipeThumb = document.getElementById("recipe-thumbnail");
            // recipeThumb.src = data.meals[0].strMealThumb;

            // // Recipe Figure Caption
            // let recipeFigCaption = document.getElementById("recipe-figcaption");
            // recipeFigCaption.innerHTML =
            //     "Source: " + data.meals[0].strMealThumb;

            // // Page Title/Heading
            // let pageTitle = document.getElementById("page-title");
            // pageTitle.innerHTML = data.meals[0].strMeal + " Recipe 🥣";

            // // Cuisine Title in sidebar
            // let cuisine = document.getElementById("cuisine-title");
            // cuisine.innerHTML = data.meals[0].strArea + " Cuisine";

            // // Recipe Instructions
            // let recipeInstrs = document.getElementById("recipe-instructions");

            //recipeInstrs.innerHTML = data.meals[0].strInstructions;

            let paras = data.meals[0].strInstructions.split("\n");

            paras = paras.filter((text) => {
                return text !== "\r";
            });

            //console.log(paras);

            // let parText = document.createElement("span");
            // for (let para of paras) {
            //     let li = document.createElement("li");
            //     li.setAttribute(
            //         "style",
            //         "line-height: 35px; margin-left:1.3rem"
            //     );
            //     let text = document.createTextNode(para);
            //     li.appendChild(text);
            //     recipeInstrs.appendChild(li);
            // }

            // Recipe Ingredients
            let recipeIngredients =
                document.getElementById("recipe-ingredients");
            for (const property in data.meals[0]) {
                if (
                    property.includes("strIngredient") &&
                    data.meals[0][property] !== ""
                ) {
                    let span = document.createElement("span");
                    span.setAttribute(
                        "style",
                        "padding:0.8rem; margin:0.5rem 0.5rem 0 0; font-size:0.8rem"
                    );
                    span.setAttribute(
                        "class",
                        "badge badge-pill badge-secondary"
                    );
                    let text = document.createTextNode(
                        data.meals[0][property] + "\r\n"
                    );
                    span.appendChild(text);
                    recipeIngredients.appendChild(span);
                }
            }
            // console.log(recipeIngredients);

            // Recipe Tags
            //let recipeTags = document.getElementById("recipe-tags");

            // let tags = data.meals[0].strTags;

            // // console.log(tags);

            // if (tags !== null) {
            //     tags = tags.split(",");
            //     for (const tag of tags) {
            //         let span = document.createElement("span");
            //         span.setAttribute(
            //             "style",
            //             "padding:0.8rem; margin:0.5rem 0.5rem 0 0; font-size:0.8rem"
            //         );
            //         span.setAttribute(
            //             "class",
            //             "badge badge-pill badge-secondary"
            //         );
            //         let text = document.createTextNode(tag + "\r\n");
            //         span.appendChild(text);
            //         recipeTags.appendChild(span);
            //     }
            //     // console.log(recipeTags);
            // } else document.getElementById("tag-box").style.display = "none";

            // // Recipe Tutorial
            // let recipeTutorial = document.getElementById("recipe-tutorial");
            // // console.log(recipeTutorial);
            // recipeTutorial.href = data.meals[0].strYoutube;
        });
}
