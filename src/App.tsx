import './App.css';
import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { ROUTES } from './config';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <>
            {ROUTES.map((nav) => (
              <Route key={nav.path} path={nav.path} element={nav.element} />
            ))}
          </>
        </Route>
      </Routes>
    </div>
  );
}

function PageLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
