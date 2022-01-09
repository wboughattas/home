import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
    const bgStyle = {backgroundColor: "#f5f5f5"};

    return (
        <footer style={bgStyle} className="mt-auto py-5 text-center ">
            <Container>
                {props.children}

                Code available <a
                className="badge"
                style={{color: "black"}}
                rel="noopener"
                target=" _blank"
                href="https://github.com/wboughattas/home"
                aria-label="here"
            >
                <i className="fab fa-github"/> Here
            </a>
            </Container>
        </footer>
    );
};

export default Footer;
