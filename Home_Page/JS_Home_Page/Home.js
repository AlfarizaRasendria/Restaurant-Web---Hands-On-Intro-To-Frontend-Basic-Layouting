const searchClick = document.getElementById("submit");
searchClick.onclick = () => {
  alert("Berikut merupakan List menu yang tersedia");
  Meal_Search();
};

const inputArea = document.getElementById("Input_Menu");
inputArea.onkeydown = (event) => {
  if (event.key === "Enter") {
    alert("Berikut merupakan List menu yang tersedia");
    Meal_Search();
  }
};

const Meal_Search = () => {
  const value = inputArea.value;
  fetch(`https:www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    .then((response) => response.json())
    .then((data) => {
      menu = document.getElementById("menu");
      menu.innerHTML = "";

      if (data.meals == null) {
        document.getElementById("menu_title").style.visibility="hidden";
        document.getElementById("notif").style.visibility = "visible";
        alert("Menu is not ready");
      } else {
        document.getElementById("menu_title").style.visibility="visible";
        document.getElementById("notif").style.visibility = "hidden";

        for (let i = 0; i < data.meals.length; i++) {
          const meal = data.meals[i];

          const itemDiv = document.createElement("div");

          itemDiv.addEventListener("mouseenter", () => {
            itemDiv.style.border = "10px solid white";

          });

          itemDiv.addEventListener("mouseleave", () => {
            itemDiv.style.border = "none";
          });

          let image_source = "";
          image_source = meal.strMealThumb;

          let Meal_Name = "";
          Meal_Name = meal.strMeal;


          itemDiv.innerHTML = `
              <div class="Wrapper" style=" width: 400px; height: 300px; margin: 20px; background:blue;">
                  <img src="${image_source}" class="card-img-top" style="width: 400px; height: 250px; alt= Menu; object-fit:cover;"> 
                  <div class="Wrapper_Content"> 
                          <p class="Text_Wrapper" style="padding: 8px; font-size: 30px; text-align: center;">${Meal_Name}</p> 
                  </div> 
              </div>`;

          menu.appendChild(itemDiv);
        };
      }
    });
};


