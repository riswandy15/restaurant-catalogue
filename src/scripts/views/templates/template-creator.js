import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__overview">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Categories</h4>
    <p>${restaurant.categories.map((category) => `<li >${category.name}</li>`).join(' ')}</p>
    <h4>Menu Makanan</h4>
    ${restaurant.menus.foods.map((food) => `<li >${food.name}</li>`).join(' ')}
    <h4>Menu Minuman</h4>
    ${restaurant.menus.drinks.map((drink) => `<li >${drink.name}</li>`).join(' ')}
    <h4>Rating</h4>
    <p>⭐️${restaurant.rating}</p>
  </div>
  <div class="restaurant__review">
    <h3>Review</h3>
    ${restaurant.customerReviews.map((review) => `<li><h4>${review.name}</h4> <p>${review.review}</p> <p>${review.date}</p></li>`).join(' ')}</p>
  </div>
 
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
            data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <span><i class="fa fa-location-arrow" aria-hidden="true"></i> ${restaurant.city}</span>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createFavoriteRestaurantButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnfavoriteRestaurantButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFavoriteRestaurantButtonTemplate,
  createUnfavoriteRestaurantButtonTemplate,
};
