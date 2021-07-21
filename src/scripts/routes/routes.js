import Main from '../views/pages/main';
import Detail from '../views/pages/detail';
import Favor from '../views/pages/favorite';

const routes = {
  '/': Main, // default page
  '/list': Main,
  '/detail/:id': Detail,
  '/favoriteku': Favor,
};

export default routes;
