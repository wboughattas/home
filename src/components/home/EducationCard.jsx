import React from "react";
import Col from "react-bootstrap/Col";

const CareerCard = ({value}) => {
    const {
        Name,
        Address,
        Title,
        Time,
        Descriptions,
    } = value;
    return (
        <Col md="12">
            < div className="p-3 mb-2">
                <h5>{Name} - <span className="text-muted text-secondary">{Address}</span></h5>

                <div className="card-text">
                    <div>{Title} - <span className="text-secondary">{Time}</span></div>
                    <div className="my-2"> {
                        Descriptions.map((description, index) => (
                            <p className="lead"
                               key={`career-description-${index}`}
                            >{description}</p>
                        ))
                    }</div>
                </div>
                <hr/>
            </div>
        </Col>
    );
};


export default CareerCard;