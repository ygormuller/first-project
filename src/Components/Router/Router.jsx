import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorPage } from '../../pages';
import HomePage from '../../pages/Home.page';
import LoginPage from '../../pages/Login.page';
import RegisterPage from '../../pages/Register.page';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
