import { Navbar, Nav,Image } from 'react-bootstrap';
import mypic from './asset/img/mypic.jpg';


export default function Navy() {

    return (
        <>
            <Navbar className="et-hero-tabs-container" variant="dark" bg="dark" expand="lg" >
                <Navbar.Brand href="#home">
                    <Image
                        src={mypic}
                        width="30"
                        height="30"
                        roundedCircle
                    />
                AS./Apisak
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#link">Education</Nav.Link>
                        <Nav.Link href="#link">Certificate</Nav.Link>
                        <Nav.Link href="#link">Education</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}