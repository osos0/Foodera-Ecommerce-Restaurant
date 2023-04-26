import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import "./navs.css";
// import "./Ar-navs.css";
import "../../Styles/Ar-navs.css";
// import logo from "../../imges/logo.png";
// import logo from "../../AR/Ar-imges/lo.png";
import logo from "../../Ar-imges/lo.png";

function ArNavs() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" col-sm-12 " id="ARlis">
            {/* <Nav.Link href="/"> */}
            <Nav.Link href="/">
              <button className="ENbtn">EN</button>{" "}
            </Nav.Link>
            {/* <Nav.Link href="/"> التعلميات </Nav.Link> */}
            <Nav.Link href="/ar"> ملخص </Nav.Link>
            <Nav.Link href="/ar"> تقيمات </Nav.Link>
            <Nav.Link href="/arexplore"> اكتشف </Nav.Link>
            <Nav.Link href="/araboutme"> من نحن </Nav.Link>
            <Nav.Link href="/ar"> الرئيسيه </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/ar">
          <img src={logo} alt=""></img>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default ArNavs;
