import './App.css';
import Header from './components/header/Header';
import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from './pages/home';
import Theatre from './pages/theatre';
import Programming from './pages/programming';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/#/theatre" element={<Theatre />} />
          <Route path="/#/programming" element={<Programming />} />
        </Route>
      </Routes>
    </div>
  );
}

function PageLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      Footer
    </div>
  )
}

export default App;
