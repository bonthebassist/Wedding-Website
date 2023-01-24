import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../../resources/images/SlideShow/FrankieTheCreative-Bonnie&amp;MaxEngagementPhotos-20.jpg';
import Img2 from '../../resources/images/SlideShow/FrankieTheCreative-Bonnie&amp;MaxEngagementPhotos-53.jpg';
import Img3 from '../../resources/images/SlideShow/FrankieTheCreative-Bonnie&amp;MaxEngagementPhotos-49.jpg'

function SlideShow() {
  return (
    <Carousel variant="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideShow;