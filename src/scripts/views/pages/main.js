import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Main = {
  async render() {
    return `
      <div class="hero">
        <div class="hero__inner">
          <h1 class="hero__title">Discover The Best Restaurant Around You</h1>
          <p class="hero__tagline">
              Temukan restoran terbaik di daerah anda
          </p>
        </div>
      </div>

      
      <div class="container">
        <div class="content">
            <h2 class="content__heading">Explore Restaurant</h2>
            <div id="restaurants" class="restaurants">
            
            </div>
        </div>
      </div>
      `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    try {
      const restaurants = await RestaurantDbSource.main();

      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (err) {
      restaurantsContainer.innerHTML = err;
    }

    // TODO: tampilkan movies di dalam DOM
    // Fungsi ini akan dipanggil setelah render()
    // <picture>
    //   <source media="(max-width: 800px)" srcset="./images/hero-image_3-small.jpg">
    //   <img
    //     src="./images/hero-image_3-large.jpg">
    //   </img>
    // </picture>
  },
};

export default Main;
