import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async main() {
    const response = await fetch(API_ENDPOINT.UTAMA);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantDbSource;
