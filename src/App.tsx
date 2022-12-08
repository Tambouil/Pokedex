import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pokemon/:pokemonId',
    element: <h1>Single pokemon</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
