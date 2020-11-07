import React from 'react';

import Star from 'element/Star'

import ReactHtmlParser from 'react-html-parser';
import FormatDate from "utils/FormatDate"

const Testimonial = (props) => {
    
    return (
        <div className={["testimonial", props.outerClassName].join(" ")}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 d-flex mb-3">
                        <img className="img-profile" alt={`img-profile`} src={props.data.url_image}/>
                        <span>
                            <p className="text-title mb-0">{props.data.name}</p>
                            <Star className="mt-1" value={5} width={30} height={30} spacing={2} isBig={true} />
                        </span>
                    </div>
                    <div className="col-12">
                        <span className="text-left text-gray-600">
                            {ReactHtmlParser(props.data.content)}
                        </span>
                        <span className="d-flex mb-3">
                        {
                            props.data.testimonial_image.map((item, index) => {
                                return (
                                    <img src={item} key={index} alt={`testimonial-${index}`} className="img-testimonial"/>
                                )
                            })
                        }
                        </span>
                        <span className="text-left text-gray-500 text-caption-large">
                           <p>{ FormatDate(props.data.created_at)}</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
