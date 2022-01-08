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
                <br/>
                Original code <i className="fas fa-code"/> by{" "}
                <a
                    className="badge badge-dark"
                    rel="noopener"
                    href="https://github.com/hashirshoaeb/home"
                    aria-label="My GitHub"
                >
                    Hashir Shoaib
                </a>{" "}

                <p>
                    <small className="text-muted">
                        Project code is open source. Feel free to fork and make your own
                        version.
                    </small>
                </p>
            </Container>
        </footer>
    );
};

export default Footer;
