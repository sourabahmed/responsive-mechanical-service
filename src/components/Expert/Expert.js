import React from 'react';

const Expert = (props) => {
    const{name, img , expertize} = props.expert;
    return (
        <div className=" col-12 col-md-6 col-lg-3 bg-light">
            <img className="rounded img-fluid" src={img} alt="" />
            <h4>Name: {name}</h4>
            <h5>Expertize: {expertize}</h5>
        </div>
    );
};

export default Expert;