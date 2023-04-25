import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import "../Header/navs.css";
import "../../Styles/navs.css";
import logo from "../../imges/lo.png";

function Navs() {
  return (
    <Navbar bg="light" id="nave">
      <Container>
        {/* <Navbar.Brand href="/"> */}
        <Navbar.Brand href="/">
          <img src={logo} alt=""></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" col-sm-12 " id="lis">
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutme">About me</Nav.Link>
            <Nav.Link href="/explore">Explore Foods</Nav.Link>
            <Nav.Link href="#EnSlide">Reviews</Nav.Link>
            <Nav.Link href="/">FAQ</Nav.Link>
            <Nav.Link href="/AR">
              <button className="ENbtn">AR</button>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navs;
