import './App.css';

// router
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

/* existing imports */
import Home from './pages/Home';
import NewEmployee from './pages/NewEmployee';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/new",
    element: <NewEmployee />,
  },
]);

function App() {
  return (
    <div>
      <nav className="bg-stone-800 text-stone-100 min-w-full flex justify-between items-center p-4">
        <a href="/" title="ir a inicio">
          <h1 className="text-3xl font-bold uppercase">titulo principal</h1>
          <h2 className="text-xl font-bold">subtitulo - slogan</h2>
        </a>

        {
          <button>➰</button> ||
          <button>〰</button>
        }

        <ul className="flex gap-4">
          <li><a href="/home" className="font-bold hover:bg-stone-100 px-4 py-2 hover:text-stone-900" title="ir a inicio">Inicio</a></li>
          <li><a href="/new" className="font-bold hover:bg-stone-100 px-4 py-2 hover:text-stone-900" title="ir a empleados">Empleados</a></li>
          <li><a href="/info" className="font-bold hover:bg-stone-100 px-4 py-2 hover:text-stone-900" title="ir a informacion">Información</a></li>
        </ul>
      </nav>

      <main className="min-h-screen bg-cyan-500">
        <RouterProvider router={router} />
      </main>

      <footer className="bg-stone-800 text-white text-center p-4">
        <address>copyright@kernel6995</address>
      </footer>
    </div>
  );
}

export default App;
