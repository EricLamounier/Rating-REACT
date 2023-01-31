import './App.css';
import { Link } from "react-router-dom";
import Rotas from './Routes/Rotas';

function App() {
  return (
    <main>
      <div>
        <nav>
            <ul id="navigation">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/thanks">Thanks</Link>
                </li>
            </ul>
        </nav>
        <Rotas/>
    </div>
    </main>
  );
}

export default App;
