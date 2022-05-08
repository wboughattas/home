import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {
    navBar,
    mainBody,
    about,
    repos,
    skills,
    getInTouch,
    career,
    education,
    Publications
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
import GetInTouch from "./components/home/GetInTouch.jsx";

import Career from "./components/home/Career";
import Education from "./components/home/Education";
import Publication from "./components/home/Publication";

const Home = React.forwardRef((props, ref) => {
    return (
        <>
            <MainBody
                gradient={mainBody.gradientColors}
                title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
                message={mainBody.message}
                icons={mainBody.icons}
                ref={ref}
            />
            {about.show && (
                <AboutMe
                    heading={about.heading}
                    message={about.message}
                    link={about.imageLink}
                    imgSize={about.imageSize}
                    resume={about.resume}
                />
            )}
            {career.show && (
                <Career
                    heading={career.heading}
                    careerList={career.lists}
                />
            )}
            {education.show && (
                <Education
                    heading={education.heading}
                    careerList={education.lists}
                />
            )}
            {repos.show && (
                <Project
                    heading={repos.heading}
                    username={repos.gitHubUsername}
                    length={repos.reposLength}
                    specfic={repos.specificRepos}
                />
            )}
            {skills.show && (
                <Skills
                    heading={skills.heading}
                    hardSkills={skills.hardSkills}
                    softSkills={skills.softSkills}
                />
            )}
            {Publications.show && (
                <Publication
                    heading={Publications.heading}
                    list={Publications.list}
                />
            )}
        </>
    );
});

const App = () => {
    const titleRef = React.useRef();

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
            {navBar.show && <Navbar ref={titleRef}/>}
            <Route path="/" exact component={() => <Home ref={titleRef}/>}/>
            <Footer>
                {getInTouch.show && (
                    <GetInTouch
                        heading={getInTouch.heading}
                        message={getInTouch.message}
                        email={getInTouch.email}
                    />
                )}
            </Footer>
        </BrowserRouter>
    );
};

export default App;
