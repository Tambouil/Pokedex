import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Hello</h1>,
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
