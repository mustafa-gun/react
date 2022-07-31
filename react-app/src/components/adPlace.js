import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ReklamSlider } from './sliders';

// Günün ürünü için bulunan günün tarihini alır
const current = new Date();
const date = `${current.getDate()}${current.getMonth() + 1}${current.getFullYear()}`;

// Rastgele ürün görselleri için rastgele sayı oluşturur
function randomNum(min, max) {
    var n = [];
    for (var i = 0; i < 2; i++) {
        n.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return n;
}
var a = randomNum(1,15);

function AdContainer() {
    return (
        <Container>
            <Row>
                <Col sm={8}>
                    <ReklamSlider />
                </Col>
                <Col sm={4}>
                    <img
                        className='brandLogo'
                        src="./assests/images/logo.png"
                        alt="Brand Logo"
                    />
                    <h5 class="text-center font-weight-bold">React E-TİCARET</h5>
                </Col>
            </Row>
            <Row className="my-3">
                <Col sm className="flex product mx-2 py-2">
                    <img className='randomProduct' src={`./assests/images/products/product${a[0]}.jpg`} alt="" />
                </Col>
                <Col sm className="flex product mx-2 py-2">
                    <img className='randomProduct' src={`./assests/images/products/product${a[1]}.jpg`} alt="" />

                </Col>
                <Col sm className="flex product mx-2 py-2">
                    <img className='productOfDay' src={`./assests/images/products/${date}.jpg`} alt="Günün Ürünü" />

                </Col>
            </Row>
        </Container>
    );
}

export { AdContainer };