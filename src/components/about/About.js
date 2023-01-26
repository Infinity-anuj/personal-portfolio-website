import React from 'react';
import './About.css'
import ME from '../../assets/me1-about.png'
import {FaAward} from "react-icons/fa"
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id={"about"}>
            <h5>Get to know</h5>
            <h2>About me</h2>
            <div className={"container about__container"}>
                <div className={"about__me"}>
                    <div className={"about__me-image"}>
                        <img src={ME} alt={"About Image"}/>
                    </div>
                </div>
                <div className={"about__content"}>
                    <div className={"about__cards"}>
                        <article className={'about__card'}>
                            <FaAward className={"about__icon"}/>
                            <h5>Experience</h5>
                            <small>1.5+ Years Working</small>
                        </article>
                        <article className={'about__card'}>
                            <FiUsers className={"about__icon"}/>
                            <h5>NetWork</h5>
                            <small>500+  </small>
                        </article>
                        <article className={'about__card'}>
                            <VscFolderLibrary className={"about__icon"}/>
                            <h5>Acadamic Score</h5>
                            <small> 9.0+ CGPA </small>
                        </article>
                    </div>
                    <p>Innovative optimized solution seeker. Excited to be at the
            deployment phase of my new career as a web developer. i am
            ambitious, adventurous, assiduous, animated and an repetition task
            developer.</p>
                    <a href={"#contact"} className={"btn btn-primary"}>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About