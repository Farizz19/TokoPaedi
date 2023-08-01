import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../public/Logo/TokoPaedi.png";
import Lens from "../../public/Logo/Lens.png";
import Cart from "../../public/Logo/Keranjang.png";

import "../css/Header.css";

function Header() {
  return (
    <Navbar expand="lg" className="fixed-top bg-light shadow">
      <Container fluid>
        <img width={70} src={Logo} />
        <Navbar.Brand id="title" className="text-success" href="#">
          <b>TokoPaedi</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        {/* <Navbar.Collapse id="navbarScroll"> */}
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        ></Nav>
        <Form id="pencarian" className="d-flex" style={{ height: "45px" }}>
          <Form.Control
            style={{ width: "100%" }}
            type="search"
            placeholder="Pencarian"
            className="me-3"
            aria-label="Search"
          />
        </Form>
        <Button
          id="search"
          style={{ width: "100px" }}
          // className="bg-light"
          variant="outline-success"
        >
          <img width={40} src={Lens} />
        </Button>

        <Button
          id="cart"
          style={{ width: "100px" }}
          // className="bg-light"
          variant="outline-success"
        >
          <img width={30} src={Cart} />
        </Button>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default Header;
