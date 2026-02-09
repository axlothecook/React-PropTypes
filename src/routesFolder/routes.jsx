import App from "../App";
import About from '../aboutFolder/About';
import Products from '../productsFolder/Products';
import Bow1 from '../productsFolder/productsList/Bow1';
import Bow2 from '../productsFolder/productsList/Bow2';
import Bow3 from '../productsFolder/productsList/Bow3';
import ErrorPage from '../errorFolder/404';
import Archers from '../archersFolder/Archers';
import Archer from '../archersFolder/components/Archer';
import '../index.css';

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'about',
    element: <About />
  },
  {
    path: 'products',
    element: <Products />,
    children: [
      {path: 'bow1', element: <Bow1 />},
      {path: 'bow2', element: <Bow2 />},
      {path: 'bow3', element: <Bow3 />}
    ]
  },
  {
    path: '/archers',
    element: <Archers />,
    children: [
      {
        path: '/archers/:archerId',
        element: <Archer />
      },
    ],
  },
  { path: '*', 
    element: <ErrorPage />
  },
];

export default routes;