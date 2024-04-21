import { Link } from "react-router-dom";
export function HomeScreen() {
  return (
    <div>
      <h1>Pagina de Inicio</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">Registro</Link>
    </div>
  );
}
