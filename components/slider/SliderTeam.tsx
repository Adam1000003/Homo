import s from './SliderTeam.module.sass'
import React, { Component } from "react";
import Slider from "react-slick";
import CardSlider from 'components/Card/CardTeam';


type Props = {}

export default class SilderTeam extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          <Slider {...settings}>
            <div className={s.block_team}>
              <CardSlider />
              <CardSlider />
              <CardSlider />
              <CardSlider />
              <CardSlider />
              <CardSlider />
              <CardSlider />
              <CardSlider />
              <CardSlider />
              <CardSlider />
            </div>
          </Slider>
        </div>
      );
    }
  }