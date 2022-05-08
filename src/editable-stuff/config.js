const navBar = {
    show: true,
};

const mainBody = {
    gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
    firstName: "Wasim",
    middleName: "",
    lastName: "Boughattas",
    message: "Python: Scikit-Learn, PyTorch, Keras • SQL: MySQL, HiveQL, SPARQL • R • Flux • Java",
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
        Address: "Montreal, QC",
        Title: "Omnia AI: Data Engineer - Co-op/Intern",
        Time: "May, 2022 – August, 2022",
        Descriptions: [
            ["▪ Implemented business intelligence solutions and advanced analytics to identify opportunities to meet " +
            "business goals"],
            ["▪ Automated ETL processes and ingested data from different data sources: SQL and multiple APIs using " +
            "Python"]
        ],
        TechStack: ["Python, Spark, HiveSQL, Linux, PowerBI"]
    }, {
        CompanyName: "Deloitte Canada",
        Address: "Montreal, QC",
        Title: "Omnia AI: Data Engineer - Co-op/Intern",
        Time: "January, 2021 – April, 2021",
        Descriptions: [
            ["▪ Built an in-house scalable database capable of ETL processes using HiveQL and Spark"],
            ["▪ Presented and communicated actionable insights in a way tailored to specific audience and client’s " +
            "needs using PowerBI"],
            ["▪ Translated client’s propositions into quantitative queries and collected/cleaned the necessary data " +
            "using Pandas"]
        ],
        TechStack: ["Python, Spark, HiveSQL, Linux, PowerBI"]
    }, {
        CompanyName: "Vanier College",
        Address: "Montreal, QC",
        Title: "Science/Math Tutor & Nominations and Elections officer",
        Time: "Sep, 2018 – May, 2019",
        Descriptions: [
            ["▪ Tutored peers in math and science and guided them to find better study methodologies"],
            ["▪ Implemented electoral procedures, established electoral lists, and organized elections"]
        ],
        TechStack: ["Communication skills, Teaching methods"]
    }, {
        CompanyName: "Concordia University & McGill University",
        Address: "Montreal, QC",
        Title: "Laboratory Research Assistant",
        Time: "2018 – 2019",
        Descriptions: [
            ["▪ Participated in two graduate projects: Convex Lens Induced Confinement Microscopy and Eco-Evo-Devo, " +
            "respectively"],
            ["▪ Worked with sensitive instruments alongside post-graduate students under the supervisions of Dr. Valter " +
            "Zazubovits and Dr. Ehab Abouheif, respectively"]
        ],
        TechStack: ["Advanced reading and comprehension skills, Advanced writing skills, Full-focus listening, Detailed " +
        "note-taking"]
    }]
};

const education = {
    show: true, heading: "Education", lists: [{
        Name: "Concordia University",
        Address: "Montreal, QC",
        Title: "BSc, Specialization in Actuarial Mathematics (co-op) & Minor, Computer Science",
        Time: "2019 - Expected 2022",
        Descriptions: [
            ["▪ Member of the Golden Key Society"],
            ["▪ Irshad Family Scholarship (Entrance Bursary in Actuarial Mathematics)"],
            ["▪ Dean’s Roll for 3.75+ GPA (2020)"]],
    }, {
        Name: "Vanier College",
        Address: "Montreal, QC",
        Title: "DEC, Honours Pure & Applied Sciences",
        Time: "2017 - 2019",
        Descriptions: [["▪ Dean’s Honours Roll for 85%+ overall average (2019)"]],
    }]
};

const repos = {
    show: true,
    heading: "Personal Projects",
    gitHubUsername: "wboughattas",
    reposLength: 0,
    specificRepos: [
        'wboughattas/Stock-Trading-Robot',
        'wboughattas/UCI-CIFAR-Various-Analyses',
        'wboughattas/COVID-19-Vaccination-System',
        'rmanaem/unibot'
    ],
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
        {name: "PowerBI", value: 70},
        {name: "Spark", value: 60},
        {name: "Linux", value: 60},
    ],
    softSkills: [
        {name: "Scikit-Learn", value: 70},
        {name: "PyTorch", value: 70},
        {name: "Keras", value: 70},
        {name: "MySQL", value: 70},
        {name: "HiveQL", value: 70},
        {name: "SPARQL", value: 70},
        {name: "Tidyverse", value: 70},
        {name: "JUnit", value: 70}
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

export {
    navBar,
    mainBody,
    about,
    repos,
    skills,
    getInTouch,
    career,
    education,
    Publications
};
