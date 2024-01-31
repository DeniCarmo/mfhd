import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import './scss/index.scss';
import { Home } from './routes/Home';
import { Footer } from './components/Footer';
import { Admin } from './routes/Admin';
import { AddSection } from './components/admin/footer.jsx/AddSection';
import { AddSocial } from './components/admin/footer.jsx/AddSocial';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/admin/footer/add-sections" element={<AddSection />}></Route>
        <Route path="/admin/footer/add-socials" element={<AddSocial />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
