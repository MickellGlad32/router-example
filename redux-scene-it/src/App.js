import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SearchPage from './pages/SearchPage';
import FavoritesPage from './pages/FavoritesPage'
import { Navbar, Container, Nav } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default function App() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to="/" as={Link}>Reel 'Em In</Navbar.Brand>
                    <Nav className="me-auto">
                        {/* <Nav.Link to="/" as={Link}>Home</Nav.Link> */}
                        <Nav.Link to="/favorites" as={Link}>Favorites</Nav.Link>
                    </Nav>
                </Container>
            </Navbar><br/>


            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <SearchPage />
                    </Route>
                    <Route path="/favorites">
                        <FavoritesPage />
                    </Route>

                </Switch>


            </div>

        </Router>
    );
}