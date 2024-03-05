import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Admin } from './pages/Admin';
import { AddSection } from './components/admin/footer.jsx/AddSection';
import { EditSection } from './components/admin/footer.jsx/EditSection';
import { AddSocial } from './components/admin/footer.jsx/AddSocial';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin" element={<Admin />}>
            <Route path="footer/add-sections" element={<AddSection />} />
            <Route path="footer/Edit-sections" element={<EditSection />} />
            <Route path="footer/add-socials" element={<AddSocial />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
