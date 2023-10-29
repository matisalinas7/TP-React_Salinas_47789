import { Carousel } from "react-bootstrap";

const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxHeight: "500px", objectFit: "cover" }}
          src="https://th.bing.com/th/id/R.9243f086683e23007b5cf9e37c7dcd6f?rik=dY1FNXi%2fFcSjRw&riu=http%3a%2f%2fwww.pixolo.it%2fwp-content%2fuploads%2f2012%2f12%2fanimals_dogs_puppies_canine_1920x1080_wallpaper_Wallpaper_2560x1600_www.wall321.com_-627x391.jpg&ehk=kHE5artRivcHA6iet%2bhXaginXbWe6jHDDAQHOfsOoKU%3d&risl=&pid=ImgRaw&r=0"
          alt="perritos1"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxHeight: "500px", objectFit: "cover" }}
          src="https://data.1freewallpapers.com/detail/a-bunch-of-labrador-puppies.jpg"
          alt="perritos2"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxHeight: "500px", objectFit: "cover" }}
          src="https://www.wallpaperflare.com/static/674/395/760/husky-puppy-cute-animals-4k-wallpaper-preview.jpg"
          alt="perritos3"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;
