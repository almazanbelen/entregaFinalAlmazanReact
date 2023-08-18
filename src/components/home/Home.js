import Carousel from 'react-bootstrap/Carousel';
import ImagenPanoram from "../../assets/ImagenPanoram.png"
import ItemListOutstanding from '../itemListOut/ItemListOutstanding'
import './home.css'
import { Link } from 'react-router-dom';



function Home(){
    return(
    <>
      
      <div className='bannerTop'>
        <h1 className='bannerText'>Envios gratis a partir de $20.000</h1>
      </div>
      <Carousel style={{margin: '8rem 1rem', borderStyle: 'solid', borderColor: 'black', boxShadow: '0px 0px 20px 1px #81A9B0'}}>
        <Carousel.Item interval={5000}>
          <img style={{width: 990, height: 400 ,margin: 50}} text="First slide" src={ImagenPanoram} alt= "imagen default"/>         
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img style={{width: 990, height: 400 ,margin: 50}} text="Second slide" src={ImagenPanoram} alt= "imagen default"/> 
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{width: 990, height: 400 ,margin: 50}} text="Third slide" src={ImagenPanoram} alt= "imagen default"/> 
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        <h2 className='outstanding'>Productos destacados</h2>
        <section className='banner'>
        <ItemListOutstanding title="Producto"/>
        <ItemListOutstanding title="Producto"/>
        <ItemListOutstanding title="Producto"/>
        <Link to= "/productos" className='more'> Ver mas..</Link>
        </section>         
      </div>
    </>
    );
}

export default Home;