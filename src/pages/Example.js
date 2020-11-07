import React, { Component, } from "react";

import JSONItem from 'json/itemDetails.json'

import InputRadio from "element/Form/InputRadio"

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

export default class Example extends Component {

  constructor(props) {
    super()
    this.state = {
      size: "",
      color: ""
    }
  }

  sizeChangeHandler = (event) => {
    console.log(this.state)
    this.setState({
      size: event.target.value
    })
  }

  colorChangeHandler = (event) => {
    console.log(this.state)
    this.setState({
      color: event.target.value
    })
  }

  render() {
    console.log(JSONItem.testimonial.child)
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center">
          {JSONItem.size.map((item, index) => {
            return (
              <InputRadio
                changed={this.sizeChangeHandler}
                isSelected={
                  this.state.size === item
                }
                value={item}
                key={index}
                name="size"
                innerClass="option-input"
              >{item}</InputRadio>
            )
          })
          }

        </div>
      </div>
    );
  }
}
