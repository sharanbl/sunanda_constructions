import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'



class Reviews extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
             
            <Carousel fade interval="3000">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="../../r1.jpeg"
                alt="First slide"
                />
              <Carousel.Caption>
                <h3>What out Clients have to say</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img
                className="d-block w-100"
                src="../../r2.jpeg" 
                alt="First slide"
                />
          
              <Carousel.Caption>
                <h3>What out Clients have to say</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src="../../r3.jpeg"
                alt="First slide"
                />
          
              <Carousel.Caption>
                <h3>What out Clients have to say</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
            
        );
    }

}

export default Reviews;