<template>
    <section id=timeline>
        <div class="timeline-card-wrapper">
            <div class="demo-card demo-card--step1">
                <div class="head">
                    <div class="number-box">
                        <span>2022/Now</span>
                    </div>
                    <h3><span class="small">Work</span> Smartway Studio</h3>
                </div>
                <div class="body">
                    <p>I am currently employed at Smartway Studio, where I serve as a software developer specializing in
                        Laravel, Vue.js and Docker. My primary responsibilities involve designing and implementing
                        web applications using Laravel's powerful framework. I also leverage Vue.js to create dynamic and
                        intuitive user interfaces that enhance the user experience. Additionally, I utilize Docker for
                        efficient containerization and deployment of applications. Furthermore, I worked in small projects
                        using ruby on Rails.
                        At Smartway Studio, I actively collaborate with cross-functional teams to deliver high-quality
                        software solutions while adhering to industry best practices.</p>
                </div>
            </div>

            <div class="demo-card demo-card--step2">
                <div class="head">
                    <div class="number-box">
                        <span>2021/2022</span>
                    </div>
                    <h3><span class="small">Work</span> Sirokko Open Source Solutions</h3>
                </div>
                <div class="body">
                    <p>I worked at Sirokko Open Source Solutions as a software developer, specializing in <b> Laravel, Ruby
                            On Rails, Docker,
                            Angular, Vue and React Native.</b> I designed and implemented web applications, utilizing
                        Laravel's powerful
                        features
                        for robust solutions. I containerized applications with Docker for efficient deployment. With
                        Angular and Vue.js, I developed dynamic and intuitive user interfaces.
                        I contributed to the full software development lifecycle, ensuring
                        high-quality deliverables. At Sirokko, I honed my expertise in these technologies, enabling me to
                        create innovative web applications while adhering to industry best practices.</p>
                </div>
            </div>

            <div class="demo-card demo-card--step3">
                <div class="head">
                    <div class="number-box">
                        <span>2021/Now</span>
                    </div>
                    <h3><span class="small">Work</span> Freelance</h3>
                </div>
                <div class="body">
                    <p>As a freelance developer, I worked with WordPress, Angular, and Laravel, while also taking on
                        smaller projects involving React Native. With WordPress, I create dynamic and customizable websites,
                        utilizing its extensive plugin ecosystem. I leverage Angular to build robust and scalable web
                        applications. Additionally, I work
                        with Laravel to develop secure and efficient back-end solutions. Furthermore, I have experience in
                        developing mobile applications using React Native, delivering cross-platform functionality. As a
                        freelance developer, I offer versatile expertise in these technologies, delivering tailored
                        solutions to meet client requirements.</p>
                </div>
            </div>
            <div class="demo-card demo-card--step4">
                <div class="head">
                    <div class="number-box">
                        <span>2020/2021</span>
                    </div>
                    <h3><span class="small">Work</span>ElcrealRevolution.SL</h3>
                </div>
                <div class="body">
                    <p>Starting as a Fullstack Developer, I advanced to become Head of the IT Team, leading the design and
                        implementation of IT infrastructure. Proficient in Laravel, PHP vanilla and Docker, I developed
                        robust web
                        applications and managed both front-end and back-end aspects. As Head, I successfully oversaw the
                        team, optimizing operational efficiency, security, and stability. Leveraging my expertise, we
                        delivered high-quality solutions, fostering streamlined operations and supporting organizational
                        growth. Through innovation, collaboration, and adherence to industry best practices, We achieved our
                        shared goals.</p>

                </div>
            </div>
            <div class="demo-card demo-card--step5">
                <div class="head">
                    <div class="number-box">
                        <span>2017/2019</span>
                    </div>
                    <h3><span class="small">Study</span> Multiplatform developer Course (EQF 5)</h3>
                </div>
                <div class="body">
                    <p>Throughout the course, I gained a solid foundation in various technologies and frameworks used for
                        cross-platform development. I learned the fundamentals of programming languages such as JavaScript
                        and gained proficiency in frameworks like Rails and Angular . Additionally, the course covered
                        topics such as UI/UX design, API integration, and testing methodologies. Through practical projects
                        and hands-on exercises, I honed my abilities in creating efficient and user-friendly applications
                        for different platforms. Upon completion, I received a certification validating my competence as a
                        developer.</p>
                </div>
            </div>

            <div class="demo-card demo-card--step6">
                <div class="head">
                    <div class="number-box">
                        <span>2017</span>
                    </div>
                    <h3><span class="small">Travel</span>Erasmus in Denmark</h3>
                </div>
                <div class="body">
                    <p>During my Erasmus experience in Denmark, I immersed myself in an English-speaking environment,
                        strengthening my language skills. Interacting with international students and professionals
                        broadened my cultural understanding. Additionally, I applied and expanded my knowledge of
                        microcomputer systems and networks, building on the foundation from the previous course. Engaging in
                        conversations, presentations, and academic discussions.
                        Overall, my Erasmus experience in Denmark provided a valuable opportunity to reinforce my English
                        skills while deepening my expertise in microcomputer systems and networks, fostering personal and
                        academic growth. Also I had a lot of <b> fun </b></p>
                </div>
            </div>
            <div class="demo-card demo-card--step7">
                <div class="head">
                    <div class="number-box">
                        <span>2015/2017</span>
                    </div>
                    <h3><span class="small">Study</span>microcomputer systems and networks (EQF 5)</h3>
                </div>
                <div class="body">
                    <p>This course provided comprehensive knowledge of managing microcomputer systems and networks. A
                        notable focus was on Linux as the primary operating system. I gained practical experience in Linux
                        installation, configuration, and administration, mastering command-line interfaces, file systems,
                        network protocols, and system security. Discovering Linux expanded my skills, as its flexibility,
                        stability, and wide range of applications became apparent. This understanding empowered me to
                        navigate microcomputer systems and networks effectively, equipping me with valuable expertise in
                        today's technology landscape.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
/* Media Queries */

@mixin mq-xs {
    @media (min-width: 320px) {
        @content;
    }
}

@mixin mq-sm {
    @media (min-width: 480px) {
        @content;
    }
}

@mixin mq-md {
    @media (min-width: 720px) {
        @content;
    }
}

@mixin mq-lg {
    @media (min-width: 1000px) {
        @content;
    }
}

$background: #E8E101;
$box-shadow: 0px 1px 22px 4px rgba(0, 0, 0, 0.07);
$border: 0px solid rgba(191, 191, 191, 0.4);
$items: 7;
$rows: ceil($items/2);

/* Card sizing */

$card-height: 300px;
$card-width: 550px;
$inner-margin: 15px;
$number-size: 15px;
$stagger: 180px;
$outer-margin: 90px;
$marker-size: 9px;

/* Colors */

$steps: #E8E100;
$colors: #333333,
    #FF003C,
    #446D44,
    #ce43eb,
    #000000,
    #123B76,
    #542FDA;


$timeline: #800080;

/* Calculations */

$container-height: $rows * ($card-height + $outer-margin) + $stagger;
$container-width: $card-width*2 + $outer-margin*3;
$head-height: $number-size + 50;
$body-height: $card-height - $head-height;
$marker-dist: $card-width + $outer-margin/2 - $marker-size/2;

/* Placeholders */

@include mq-lg {
    %arrow {
        position: absolute;
        content: "";
        width: 0;
        height: 0;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;
    }

    %marker {
        position: absolute;
        content: "";
        width: $marker-size;
        height: $marker-size;
        background-color: $timeline;
        border-radius: $marker-size;
        box-shadow: 0px 0px 2px 8px $background;
    }
}


/* Some Cool Stuff */
$counter: $items - $rows + 2;

@for $i from 1 through $rows {
    .demo-card:nth-child(#{$i*2-1}) {
        order: $i
    }

    .demo-card:nth-child(#{$i*2}) {
        order: $counter
    }

    $counter: $counter + 1;
}

/* Border Box */

* {
    box-sizing: border-box;
}

/* Fonts */

body {
    font-family: "Orbitron", sans-serif;

}

#timeline {
    padding: 20px 0;
    background: $background;
    border-top: $border;
    border-bottom: $border;

    h1 {
        text-align: center;
        font-size: 3rem;
        font-weight: 200;
        margin-bottom: 20px;
    }

    p.leader {
        text-align: center;
        max-width: 90%;
        margin: auto;
        margin-bottom: 45px;
    }

    .timeline-card-wrapper {
        position: relative;
        margin: auto;

        @include mq-lg {
            display: flex;
            flex-flow: column wrap;
            width: $container-width;
            height: $container-height;
            margin: 0 auto;
        }

        &::after {
            z-index: 1;
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            border-left: $border;

            @include mq-lg {
                border-left: 1px solid $timeline;
            }
        }
    }

    .demo-card {
        position: relative;
        display: block;
        margin: 10px auto 80px;
        max-width: 94%;
        z-index: 2;

        @include mq-sm {
            max-width: 60%;
            box-shadow: $box-shadow;
        }

        @include mq-md {
            max-width: 40%;
        }

        @include mq-lg {
            max-width: $card-width;
            height: $card-height;
            margin: $outer-margin;
            margin-top: $outer-margin/2;
            margin-bottom: $outer-margin/2;

            &:nth-child(odd) {
                margin-right: $outer-margin/2;

                .head::after {
                    @extend %arrow;
                    border-left-width: 15px;
                    border-left-style: solid;
                    left: 100%;
                }

                .head::before {
                    @extend %marker;
                    left: $marker-dist + 1;
                }
            }

            &:nth-child(even) {
                margin-left: $outer-margin/2;

                .head::after {
                    @extend %arrow;
                    border-right-width: 15px;
                    border-right-style: solid;
                    right: 100%;
                }

                .head::before {
                    @extend %marker;
                    right: $marker-dist - 1;
                }
            }

            &:nth-child(2) {
                margin-top: $stagger;
            }
        }

        .head {
            position: relative;
            display: flex;
            align-items: center;
            color: #fff;
            font-weight: 400;

            .number-box {
                display: inline;
                float: left;
                margin: $inner-margin;
                padding: 10px;
                font-size: $number-size;
                line-height: $number-size;
                background: rgba(0, 0, 0, 0.17);
            }

            h3 {
                text-transform: uppercase;
                font-size: 1.3rem;
                font-weight: inherit;
                letter-spacing: 2px;
                margin: 0;
                padding-bottom: 6px;
                line-height: 1rem;

                @include mq-sm {
                    font-size: 115%;
                    line-height: 1.2rem;
                }

                span {
                    display: block;
                    font-size: 0.6rem;
                    margin: 0;

                    @include mq-sm {
                        font-size: 0.8rem;
                    }
                }
            }
        }

        .body {
            justify-content: center;
            background: #fff;
            border: $border;
            border-top: 0;
            clip-path: polygon(0 10%,
                    10% 0,
                    90% 0,
                    100% 0%,
                    100% 80%,
                    90% 100%,
                    0% 100%,
                    0% 90%,
                    0% 10%);
            overflow: hidden;
            padding: $inner-margin;

            @include mq-lg {
                height: $body-height;
            }
            p {
                font-weight: 500;
                word-spacing: 25%;
                font-size: 14px;
                line-height: 18px;
                margin-bottom: $inner-margin;
            }
        }

        @for $i from 1 through $items {
            &--step#{$i} {
                $color: nth($colors, ((($i - 1) % 7) + 1));
                background-color: $color;

                .head::after {
                    border-color: $color;
                }
            }
        }
    }
}
</style>
<script lang="ts" setup></script>