const navBar = {
    show: true,
};

const mainBody = {
    gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
    firstName: "Wasim",
    middleName: "",
    lastName: "Boughattas",
    message: "Java R Python • SQL Flux Spark • InfluxDB PowerBI • Docker Ubuntu",
    icons: [{
        image: "fa-github", url: "https://github.com/wboughattas",
    }, {
        image: "fa-linkedin", url: "https://www.linkedin.com/in/wasim-boughattas-335849165/",
    }]
};

const about = {
    show: true,
    heading: "About Me",
    imageLink: require("./wasim.png"),
    imageSize: 375,
    message: "I am a final-year undergraduate at Concordia University and pursuing a degree in actuarial math and " +
        "computer science. I am most passionate about data engineering, machine learning, and predictive analysis. " +
        "I have broad knowledge in many fields including: data engineering, machine learning, " +
        "algorithmic trading, risk models, and probabilistic methods.",
    resume: require("./resume.pdf"),
};

const career = {
    show: true, heading: "Career", lists: [{
        CompanyName: "Deloitte Canada",
        Address: "Quebec, MTL",
        Title: "Omnia AI: Data Engineer - Co-op/Intern",
        Time: "January, 2021 – April, 2021",
        Descriptions: [
            ["▪ Created a generalized solution to Big Data case requests by generalizing an existing Python " +
            "code from a previous specific case. Worked on Ubuntu Server and employ Apache tools (Hadoop, Spark, hive) "],
            ["▪ Worked with business managers to understand business objectives and develop automated reporting " +
            "solutions using DAX, and M in Power BI "],
            ["▪ Created automated python processes that enable data manipulation using Pandas and display the console" +
            "into an end-user-friendly GUI application using the Gooey library"]],
        TechStack: ["Python, Spark, HiveSQL, Linux, PowerBI"]
    }, {
        CompanyName: "Deloitte Canada",
        Address: "Quebec, MTL",
        Title: "Omnia AI: Data Engineer - Co-op/Intern",
        Time: "May, 2022 – August, 2022",
        Descriptions: [],
        TechStack: [""]
    }]
};

const education = {
    show: true, heading: "Education", lists: [{
        Name: "Concordia University",
        Address: "Quebec, MTL",
        Title: "BSc, Specialization in Actuarial Mathematics (co-op)",
        Time: "2019 - Expected 2022",
        Descriptions: [
            ["▪ Member of the Golden Key Society"],
            ["▪ Irshad Family Scholarship (Entrance Bursary in Actuarial Mathematics)"],
            ["▪ Dean’s Roll for 3.75+ GPA (2020)"]],
    }, {
        Name: "Concordia University",
        Address: "Quebec, MTL",
        Title: "Minor, Computer Science",
        Time: "2019 - Expected 2022",
        Descriptions: [],
    }]
};

const repos = {
    show: true,
    heading: "Personal Projects",
    gitHubUsername: "wboughattas",
    reposLength: 0,
    specificRepos: ['Stock-Trading-Robot', 'COVID-19-Vaccination-System', 'Electricity-Price-Forecasting'],
};

const skills = {
    show: true,
    heading: "Skills",
    hardSkills: [
        {name: "Python", value: 80},
        {name: "SQL", value: 80},
        {name: "R", value: 70},
        {name: "Flux", value: 70},
        {name: "Java", value: 65},
        {name: "Spark", value: 60},
        {name: "Bash", value: 60},
        {name: "Docker", value: 60}
    ],
    softSkills: [
        {name: "Data Analysis", value: 75},
        {name: "Supervised Machine Learning", value: 70},
        {name: "Data Engineering", value: 70},
        {name: "Algorithmic Trading", value: 70},
        {name: "Probabilistic Methods", value: 55},
        {name: "Actuarial Risk Models", value: 55},
        {name: "Natural Language Processing", value: 55},
        {name: "Multi-Agent Reinforcement Learning", value: 30}
    ]
};

const Publications = {
    show: true, heading: "Publications", list: [{
        title: "The Science Behind Losing Fat",
        url: "https://wasimboga.wordpress.com/2022/01/08/the-science-behind-losing-fat/",
        description:
            "There are lots of contradictory diet theories that when it comes to losing fat makes you want to dive " +
            "into that chocolate sundae. Losing weight isn't easy and doing it in a sustainable way can make the " +
            "task feel difficult. While there isn’t an easy fix to losing weight, there are plenty of steps you can " +
            "take to develop a healthier relationship with food."
    }]
}

const getInTouch = {
    show: true,
    heading: "Get In Touch",
    message: "I'm currently looking for a 3rd internship that involves data engineering, machine learning, " +
        "and predictive analysis! If you know of any positions available, if you have any questions, or if you just "
        + "want to say hi, please feel free to email me at",
    email: "wboughattas@outlook.com",
};

const experiences = {
    show: false, heading: "Experiences", data: [{
        role: 'Software Engineer', company_logo: require('../assets/img/dell.png'), date: 'June 2018 – Present',
    }, {
        role: 'Front-End Developer', company_logo: require('../assets/img/boeing.png'), date: 'May 2017 – May 2018',
    }]
}

export {
    navBar,
    mainBody,
    about,
    repos,
    skills,
    getInTouch,
    experiences,
    career,
    education,
    Publications
};
