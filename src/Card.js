import React from 'react'
function Card(props) {
    return (
        <>
            <div className="col-md-12 mx-auto h-50 w-100">
                <div className="card w-50 h-50 mx-auto"  >
                    <img className="card-img-top" src={props.imageurl} alt="Card image cap" width="200px"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <hr/>
                        {/* <p className="card-text">Duration : {props.duration}</p> */}
                        <p className="card-text fw-bold">Price : {props.price}</p>
                        <p className="card-text fw-bold">Owner : {props.owner}</p>
                        <p className="card-text fw-bold">Contact : {props.contact}</p>
                        <p className="card-text fw-bold">Description : <br/> </p>
                        <p className="card-text">{props.description}</p>
                        <a target="_" href={""} className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
