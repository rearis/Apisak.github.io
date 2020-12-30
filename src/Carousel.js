import Cosel1 from "./asset/img/25405.jpg"
import Cosel2 from "./asset/img/25406.jpg"
import Cosel3 from "./asset/img/25411.jpg"
import { Carousel } from 'react-bootstrap';

export default function Corsel() {

    return (
        <Carousel>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={Cosel1}
                    alt="First slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={Cosel2}
                    alt="Third slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={Cosel3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                  
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}