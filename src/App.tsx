import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import PokemonInfos from './pages/PokemonInfos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pokemon/:pokemonId',
    element: <PokemonInfos />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
