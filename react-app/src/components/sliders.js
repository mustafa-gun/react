import Carousel from 'react-bootstrap/Carousel';

function ReklamSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75"
          src="./assests/images/reklam1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75"
          src="./assests/images/reklam2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-75"
          src="./assests/images/reklam4.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

function OnSale() {
  return (
    <Carousel id="slider" className="me-2 mb-2">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assests/images/indirimli1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assests/images/indirimli2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assests/images/indirimli3.jpg "
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assests/images/indirimli4.jpg "
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}


export { ReklamSlider, OnSale };