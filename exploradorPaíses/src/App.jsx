import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import CountryDetails from './components/CountryDetails';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    id: "root", 
    errorElement: <ErrorPage />,
    loader: async () => {
      const response = await fetch("https://restcountries.com/v3.1/region/europe");
      if (!response.ok) throw new Error("Error al obtener los países");
      return response.json();
    },
    children: [
      {
        index: true, 
        element: (
          <div style={{ textAlign: 'center', color: '#666', padding: '2rem' }}>
            <h2>Bienvenido al Explorador de Países</h2>
            <p>Selecciona un país de la lista de la izquierda para ver su información.</p>
          </div>
        )
      },
      {
        path: "country/:countryName",
        element: <CountryDetails />,
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}