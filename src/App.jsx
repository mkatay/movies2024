
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css'
import { Trendings } from './pages/Trendings';
import { Movies } from './pages/Movies';
import { TVSeries } from './pages/TVSeries';
import { NotFound } from './pages/NotFound';
import { Header } from './components/Header';
import { SearchPage } from './pages/SearchPage';

const router = createBrowserRouter([
  {element:<Header/>,
    children:[ 
    {
      path: '/',
      element: <Trendings />,
    },
    {
      path: '/movies',
      element: <Movies />,
    },

    {
      path: '/series',
      element: <TVSeries />,
    },
    {
      path: '/search',
      element: <SearchPage />,
    },
    {path:"*",
      element:<NotFound/>
    }]
  }
],
{
  future: {
    v7_relativeSplatPath: true,
    v7_normalizeFormMethod: true,
    v7_fetcherPersist: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
    
  }});

function App() {
  return <RouterProvider  router={router} future={{
    v7_startTransition: true,
  }}/>;
}

export default App
