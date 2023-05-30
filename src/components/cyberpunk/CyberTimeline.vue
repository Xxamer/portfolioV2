<template>
    <ul class="timeline">
        <li class="tl-item" v-for="(tl, index) in timeline" :style="tl.color" :key="index">
            <div class="date">{{ tl.date }}</div>
            <div class="title">{{ tl.title }}</div>
            <div class="descr">{{ tl.body }}</div>
        </li>
    </ul>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap");

*,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    --color: rgba(30, 30, 30);
    --bgColor: rgba(245, 245, 245);
    display: grid;
    align-content: center;
    gap: 2rem;
    font-family: "Poppins", sans-serif;
    color: var(--color);
    background: var(--bgColor);
}

h1 {
    text-align: center;
}

.timeline {
    --col-gap: 2rem;
    --row-gap: 2rem;
    --line-w: 0.25rem;
    display: grid;
    grid-template-columns: var(--line-w) 1fr;
    grid-auto-columns: max-content;
    column-gap: var(--col-gap);
    list-style: none;
    width: min(60rem, 90%);
    margin-inline: auto;
    padding-bottom: 100px;
}

/* line */
.timeline::before {
    content: "";
    grid-column: 1;
    grid-row: 1 / span 20;
    background: rgb(225, 225, 225);
    border-radius: calc(var(--line-w) / 2);
}

/* columns*/

/* row gaps */
.timeline li:not(:last-child) {
    margin-bottom: var(--row-gap);
}

/* card */
.timeline li {
    grid-column: 2;
    --inlineP: 1.5rem;
    margin-inline: var(--inlineP);
    grid-row: span 2;
    display: grid;
    grid-template-rows: min-content min-content min-content;
}

/* date */
.timeline li .date {
    --dateH: 3rem;
    height: var(--dateH);
    margin-inline: calc(var(--inlineP) * -1);
    text-align: center;
    background-color: var(--accent-color);
    color: white;
    font-size: 1.25rem;
    font-weight: 700;
    display: grid;
    place-content: center;
    position: relative;
    border-radius: calc(var(--dateH) / 8) 0 0 calc(var(--dateH) / 1);
}

/* date flap */
.timeline li .date::before {
    content: "";
    width: var(--inlineP);
    aspect-ratio: 1;
    background: var(--accent-color);
    background-image: linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent);
    position: absolute;
    top: 100%;

    clip-path: polygon(0 0, 100% 0, 0 100%);
    right: 0;
}

/* circle */
.timeline li .date::after {
    content: "";
    position: absolute;
    width: 2rem;
    aspect-ratio: 1;
    background: var(--bgColor);
    border: 0.3rem solid var(--accent-color);
    border-radius: 50%;
    top: 50%;

    transform: translate(50%, -50%);
    right: calc(100% + var(--col-gap) + var(--line-w) / 2);
}

/* title descr */
.timeline li .title,
.timeline li .descr {
    background: var(--bgColor);
    position: relative;
    padding-inline: 1.5rem;
}

.timeline li .title {
    overflow: hidden;
    padding-block-start: 1.5rem;
    padding-block-end: 1rem;
    font-weight: 500;
}

.timeline li .descr {
    height: 30px;
    overflow: hidden;
    padding-block-end: 1.5rem;
    font-weight: 300;
    transition: all 0.55s ease-out;
}

.timeline li .descr:hover  {
    height: 100%;
  
}

/* shadows */
.timeline li .title::before,
.timeline li .descr::before {
    content: "";
    position: absolute;
    width: 90%;
    height: 0.5rem;
    background: rgba(0, 0, 0, 0.5);
    left: 50%;
    border-radius: 50%;
    filter: blur(4px);
    transform: translate(-50%, 50%);
}

.timeline li .title::before {
    bottom: calc(100% + 0.125rem);
}

.timeline li .descr::before {
    z-index: -1;
    bottom: 0.25rem;
}

@media (min-width: 40rem) {
    .timeline {
        grid-template-columns: 1fr var(--line-w) 1fr;
    }

    .timeline::before {
        grid-column: 2;
    }

    .timeline li:nth-child(odd) {
        grid-column: 1;
    }

    .timeline li:nth-child(even) {
        grid-column: 3;
    }

    /* start second card */
    .timeline li:nth-child(2) {
        grid-row: 2/4;
    }

    .timeline li:nth-child(odd) .date::before {
        clip-path: polygon(0 0, 100% 0, 100% 100%);
        left: 0;
    }

    .timeline li:nth-child(odd) .date::after {
        transform: translate(-50%, -50%);
        left: calc(100% + var(--col-gap) + var(--line-w) / 2);
    }

    .timeline li:nth-child(odd) .date {
        border-radius: 0 calc(var(--dateH) / 9) calc(var(--dateH) / 2) 0;
    }
}

.credits {
    margin-top: 1rem;
    text-align: right;
}

.credits a {
    color: var(--color);
}
</style>
<script lang="ts" setup>
const timeline = [{
    'date': '2022 - Now',
    'title': 'Smartway Studio',
    'body': "I am currently employed at Smartway Studio, where I serve as a software developerspecializing in Laravel, Vue.js and Docker.My primary responsibilities involve designing and implementing web applications using Laravel's powerful framework. I also leverage Vue.js to create dynamic and intuitive user interfaces that enhance the user experience.Additionally, I utilize Docker for efficient  containerization and deployment of applications.Furthermore, I worked in small projects using ruby on Rails.At Smartway Studio, I actively collaborate with cross - functional teams to deliver high- quality software solutions while adhering to industry best practices.",
    'color': '--accent-color:#41516C'
},
{
    'date': '2021/2022',
    'title': 'Sirokko Open Source Solutions',
    'body': "I worked at Sirokko Open Source Solutions as a software developer, specializing in Laravel, Ruby On Rails, Docker, Angular, Vue and React Native. I designed and implemented web applications, utilizing Laravel's powerful features for robust solutions. I containerized applications with Docker for efficient deployment. With Angular and Vue.js, I developed dynamic and intuitive user interfaces. I contributed to the full software development lifecycle, ensuring high-quality deliverables. At Sirokko, I honed my expertise in these technologies, enabling me to create innovative web applications while adhering to industry best practices.",
    'color': '--accent-color:#FF003C'
},
{
    'date': '2021/Now',
    'title': 'Freelancer',
    'body': "As a freelance developer, I worked with WordPress, Angular, and Laravel, while also taking on smaller projects involving React Native. With WordPress, I create dynamic and customizable websites, utilizing its extensive plugin ecosystem. I leverage Angular to build robust and scalable web applications. Additionally, I work with Laravel to develop secure and efficient back-end solutions. Furthermore, I have experience in developing mobile applications using React Native, delivering cross-platform functionality. As a freelance developer, I offer versatile expertise in these technologies, delivering tailored solutions to meet client requirements.",
    'color': '--accent-color:#446D44'
},
{
    'date': '2020/2021',
    'title': 'ElcrealRevolution.SL',
    'body': "Starting as a Fullstack Developer, I advanced to become Head of the IT Team, leading the design and implementation of IT infrastructure. Proficient in Laravel, PHP vanilla and Docker, I developed robust web applications and managed both front-end and back-end aspects. As Head, I successfully oversaw the team, optimizing operational efficiency, security, and stability. Leveraging my expertise, we delivered high-quality solutions, fostering streamlined operations and supporting organizational growth. Through innovation, collaboration, and adherence to industry best practices, We achieved our shared goals.",
    'color': '--accent-color:#CE43EB'
},
{
    'date': '2017/2019',
    'title': 'Multiplatform developer Course (EQF 5)',
    'body': "Throughout the course, I gained a solid foundation in various technologies and frameworks used for cross-platform development. I learned the fundamentals of programming languages such as JavaScript and gained proficiency in frameworks like Rails and Angular . Additionally, the course covered topics such as UI/UX design, API integration, and testing methodologies. Through practical projects and hands-on exercises, I honed my abilities in creating efficient and user-friendly applications for different platforms. Upon completion, I received a certification validating my competence as a developer.",
    'color': '--accent-color:#000000'
},
{
    'date': '2017',
    'title': 'Erasmus in Denmark',
    'body': "During my Erasmus experience in Denmark, I immersed myself in an English-speaking environment, strengthening my language skills. Interacting with international students and professionals broadened my cultural understanding. Additionally, I applied and expanded my knowledge of microcomputer systems and networks, building on the foundation from the previous course. Engaging in conversations, presentations, and academic discussions. Overall, my Erasmus experience in Denmark provided a valuable opportunity to reinforce my English skills while deepening my expertise in microcomputer systems and networks, fostering personal and academic growth. Also I had a lot of fun",
    'color': '--accent-color:#123B76'
},
{
    'date': '2015/2017',
    'title': 'microcomputer systems and networks (EQF 5)',
    'body': "This course provided comprehensive knowledge of managing microcomputer systems and networks. A notable focus was on Linux as the primary operating system. I gained practical experience in Linux installation, configuration, and administration, mastering command-line interfaces, file systems, network protocols, and system security. Discovering Linux expanded my skills, as its flexibility, stability, and wide range of applications became apparent. This understanding empowered me to navigate microcomputer systems and networks effectively, equipping me with valuable expertise in today's technology landscape.",
    'color': '--accent-color:#123B76'
},
];

</script>