import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Container, NavDropdown } from 'react-bootstrap'
import NavLastBlock from "./NavLastBlock";
//import MetamaskConnect from './MetamaskConnect'
//                    <MetamaskConnect web3Handler={web3Handler} account={account} networkName={networkName} />

const Navigation = ({ web3Handler, setNetwork, account, networkName, stats }) => {
    return (

        <Navbar expand="lg"variant="dark" classMap="NavBar">
            <Container>
                <Navbar.Brand href="/" >
                    <img
                        src="/logo192.png"
                        width="32"
                        height="32"
                        className="d-inline-block align-top"
                        />
                    &nbsp; <span className="navbar-brand ">Dymension</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
                <NavLastBlock stats={stats} network={networkName}/>

            </Container>
        </Navbar>
    )

}

export default Navigation;

//<Nav.Link as={Link} to="/apps">Applications</Nav.Link>
//<Nav.Link as={Link} to="/">Blockchain</Nav.Link>
//<Nav.Link as={Link} to="/">Analytics</Nav.Link>
//<Nav.Link as={Link} to="/">Resources</Nav.Link>