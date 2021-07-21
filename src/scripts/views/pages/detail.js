import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';

const Detail = {
  async render() {
    return `
    <div class="container">
      <div id="restaurant" class="restaurant"></div>
      <div id="favoriteButtonContainer"></div>
    </div>
      `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#restaurant');
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantDbSource.detail(url.id);
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      FavoriteButtonPresenter.init({
        favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          pictureId: restaurant.pictureId,
          description: restaurant.description,
          address: restaurant.address,
          city: restaurant.city,
          rating: restaurant.rating,
        },
      });
    } catch (err) {
      restaurantContainer.innerHTML = err;
    }

    // TODO: tampilkan movie di dalam DOM
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Detail;
