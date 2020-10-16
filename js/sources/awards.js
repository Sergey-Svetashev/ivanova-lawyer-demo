import React from 'react';
import Slider from "react-slick/lib";

import skill_pict from '@i/skill_pict.png'
import skill_item_01 from '@i/skill_item_01.jpg'
import skill_item_02 from '@i/skill_item_02.jpg'
import skill_item_03 from '@i/skill_item_03.jpg'
import skill_item_04 from '@i/skill_item_04.jpg'
import skill_item_05 from '@i/skill_item_05.jpg'
import skill_item_06 from '@i/skill_item_06.jpg'
import skill_item_07 from '@i/skill_item_07.jpg'
import skill_item_08 from '@i/skill_item_08.jpg'
import skill_item_09 from '@i/skill_item_09.jpg'
import skill_item_10 from '@i/skill_item_10.jpg'
import skill_item_11 from '@i/skill_item_11.jpg'
import skill_item_12 from '@i/skill_item_12.jpg'
import skill_item_13 from '@i/skill_item_13.jpg'
import skill_item_14 from '@i/skill_item_14.jpg'
import skill_item_15 from '@i/skill_item_15.jpg'

class Slider__cell extends React.Component {
  render() {
    return (
      <div className="skill__cell">
        <div className="skill__item">
          <img src={this.props.image} alt={this.props.name} className={this.props.class} />
        </div>
      </div>
    )
  }
}

class Awards extends React.Component {

  render() {
    let sliderOption = {
      adaptiveHeight: false,
      autoplay: true,
      speed: 700,
      dots: false,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
          }
        }
      ]
    };
    return (
      <Slider className="skill__slider" {...sliderOption}>
        <Slider__cell image={skill_item_01} name={'награждение адвокат воронеж'} />
        <Slider__cell image={skill_pict} name={'медаль адвокат воронеж'} class={'no-shadow'} />
        <Slider__cell image={skill_item_02} name={'награждение адвокат воронеж'} />
        <Slider__cell image={skill_item_03} name={'награждение адвокат воронеж'} />
        <Slider__cell image={skill_item_04} name={'награждение адвокат воронеж'} />
        <Slider__cell image={skill_item_05} name={'награждение адвокат воронеж'} />
        <Slider__cell image={skill_item_06} name={'награждение адвокат воронеж'} />
        <Slider__cell image={skill_item_07} name={'награждение адвокат воронеж'} />
        <Slider__cell image={skill_item_08} name={'награждение адвокат воронеж'} />
        <Slider__cell image={skill_item_09} name={'награждение адвокат воронеж'} />
        <Slider__cell image={skill_item_10} name={'награждение адвокат воронеж'} />
        <Slider__cell image={skill_item_11} name={'награждение адвокат воронеж'} />
        <Slider__cell image={skill_item_12} name={'награждение адвокат воронеж'} />
        <Slider__cell image={skill_item_13} name={'награждение адвокат воронеж'} />
        <Slider__cell image={skill_item_14} name={'награждение адвокат воронеж'} />
        <Slider__cell image={skill_item_15} name={'награждение адвокат воронеж'} />
      </Slider>
    )
  }

}

export default Awards