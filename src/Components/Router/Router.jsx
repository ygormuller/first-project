import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorPage } from '../../pages';
import HomePage from '../../pages/Home.page';
import LoginPage from '../../pages/Login.page';
import LobbyPage from '../../pages/Lobby.page';
import ProfilePage from '../../pages/Profile.page';
import RegisterPage from '../../pages/Register.page';
import UsersPage from '../../pages/Users.page';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/lobby" element={<LobbyPage />} />
      <Route path="/profile/:userId" element={<ProfilePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
