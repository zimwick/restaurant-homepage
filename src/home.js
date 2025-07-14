import food from "./food.jpg";
import restaurant from "./restaurant.jpg";

const displayContact = function () {
  const html = `<main>
    <div class="hero-container">
      <div class="hero-text-container">
        <h1>The Saffron Table</h1>
      </div>
      <div class="hero-image-container">
        <img class="hero-img" src="${food}" alt="restaurant" />
        <img class="hero-img" src="${restaurant}" alt="plate-of-food" />
      </div>
    </div>
    <div>
      <p class="home-paragraph">
        Welcome to The Saffron Table Established in 2012, The Saffron Table has
        been a local favorite for over a decade, bringing bold flavors and
        heartfelt hospitality to every plate. What began as a cozy kitchen dream
        has grown into a beloved gathering place for friends, families, and food
        lovers alike.
      </p>
      <p class="home-paragraph">
        Our chefs blend traditional techniques with creative flair, crafting
        unforgettable dishes you won’t find anywhere else. Whether you're here
        for a quick lunch, a romantic dinner, or our weekend specials, there's
        always something to savor. Come join us—your table is ready.
      </p>
    </div>
  </main>`;
  return html;
};

export default displayContact();
