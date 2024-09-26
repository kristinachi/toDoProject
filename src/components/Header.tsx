import { Link } from "react-router-dom";
import Container from "./Container";

export default function Header() {
  return (
    <header className="header">
      <Container>
        <div className="headerWrapper">
          <Link to="/" className="headerLogo">
            <img src="./src/images/logo.svg" alt="Logo" />
            <div className="headerText">To Do</div>
          </Link>
        </div>
      </Container>
    </header>
  );
}
