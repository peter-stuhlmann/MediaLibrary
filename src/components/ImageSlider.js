import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import slides from '../data/slides';

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <Carousel {...settings}>
        {slides.map((slide, index) => (
          <Wrap key={index}>
            <Link to={slide.href}>
              <img src={slide.image} alt={slide.alt} />
            </Link>
          </Wrap>
        ))}
      </Carousel>
    </div>
  );
}

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul {
    li {
      button {
        &:before {
          font-size: 10px;
          color: rgb(150, 158, 171);
        }
      }

      &.slick-active button:before {
        color: #fff;
      }
    }
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    width: 100px;
  }

  .slick-next {
    width: 100px;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 70%) 0px 25px 30px -10px,
      rgb(0 0 0 / 75%) 0px 15px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    border: 4px solid rgba(250, 250, 250, 0);

    &:hover {
      border: 4px solid rgba(250, 250, 250, 0.8);
      transition-duration: 300ms;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }
  }
`;
