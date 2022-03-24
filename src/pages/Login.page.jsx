import { Link } from 'react-router-dom';

const LoginPage = () => (
  <div>
    <h1>Login</h1>
    <form>
      <input name="email" />
      <input name="password" />
      <button type="submit">Entrar</button>
    </form>
    <Link to="/register">Não possui uma conta? Cadastre-se</Link>
  </div>
);

export default LoginPage;
