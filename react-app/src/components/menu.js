import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function MenuBar() {
    return (
        <div id="navbarContainer">
            <Navbar bg="dark" variant="dark">
                <Container className="justify-content-end bg-dark">
                    <Form className="d-flex justify-content-start">
                        <Form.Control
                            type="search"
                            placeholder="Arama"
                            className="me-2F"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Arama</Button>
                    </Form>
                    <Nav className="me-right">
                        <Nav.Link href="#members/member-id">Kullanıcı Adı</Nav.Link>
                        <Nav.Link href="#cart">Sepet</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Navbar bg="light" expand="lg" sticky="top">
                <Container className="bg-light">
                    <Navbar.Brand href="/">React E-ticaret</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown drop="down" title="Elektronik" id="nav-dropdown">
                                <NavDropdown drop="end" title="Bilgisayar" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/1.1">Bilgisayar Bileşenleri</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/1.2">Dizüstü Bilgisayar</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/1.3">Masaüstü Bilgisayar</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop="end" title="Telefon" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/2.1">Akıllı Telefonlar</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/2.2">Telefon Aksesuarları</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown drop="end" title="TV, Görüntü & Ses Sistemleri" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Televizyon</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Ev Sinema Sistemleri</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Müzik Sistemleri</NavDropdown.Item>
                                </NavDropdown>
                            </NavDropdown>
                            <Nav.Link href="#moda">Moda</Nav.Link>
                            <Nav.Link href="#ev-yasam">Ev, Yaşam</Nav.Link>
                            <Nav.Link href="#otomobil">Otomobil</Nav.Link>
                            <Nav.Link href="#spor-outdoor">Spor, Outdoor</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
}

export { MenuBar };