import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    // const [experts, setExperts] = useState([]);
    // console.log(experts);
    // useEffect(() => {
    //     fetch('experts.json')
    //     .then(res => res.json)
    //     .then(data => setExperts(data))
    // },[])
    const ourExperts = [
        {
            img: "https://i.ibb.co/340rR0J/mechanic-4.jpg",
            name: "Andrew smith",
            expertize: "-Engine Expert-",
            id: 1
        },
        {
            img: "https://i.ibb.co/nzPdS4p/mechanic-3.jpg",
            name: "John Anderson",
            expertize: "-Polsih Expert-",
            id: 2
        },
        {
            img: "https://i.ibb.co/NFJyYFJ/mechanic-1.jpg",
            name: "James Bond",
            expertize: "-Coloring Expert-",
            id: 3
        },
        {
            img: "https://i.ibb.co/KzLcTT2/mechanic-2.jpg",
            name: "Tiger Shorf",
            expertize: "-Alrounder-",
            id: 4
        }
    ]
    return (
        <div id="experts">
            <h1 className="mt-4">Our Expertize</h1>
            <div className="row m-2 m-md-4 m-lg-5 gx-3 ">
                {
                    ourExperts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;