import { Link } from 'react-router-dom';

const LobbyPage = () => (
  <div>
    <div>
      <h1>Olá usuário</h1>
    </div>
    <li>
      <Link to="/users">Usuários</Link>
    </li>
    <li>
      <Link to="/">Sair</Link>
    </li>
  </div>
);

export default LobbyPage;
