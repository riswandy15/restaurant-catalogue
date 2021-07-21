Feature('Favoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favoriteku');
});

Scenario('favoriting one restaurant', ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');
});
