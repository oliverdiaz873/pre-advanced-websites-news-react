import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Article } from '../pages/Article';
import { Category } from '../pages/Category';
import { Home } from '../pages/Home';
import { Opinion } from '../pages/Opinion';
import { Search } from '../pages/Search';
import { Privacy, Terms } from '../pages/legal';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/category/:slug',
        element: <Category />,
      },
      {
        path: '/search',
        element: <Search />,
      },

      {
        path: '/news/:category/:slug',
        element: <Article />,
      },
      {
        path: '/opiniones/:slug',
        element: <Opinion />,
      },
      {
        path: '/legal/privacy',
        element: <Privacy />,
      },
      {
        path: '/legal/terms',
        element: <Terms />,
      },
    ],
  },
]);
