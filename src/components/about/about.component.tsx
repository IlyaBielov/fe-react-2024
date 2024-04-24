import styleApp from '@/App.module.css';
import aboutImage from '@/assets/images/about-person.webp';

import stylesAbout from './About.module.css';

export default function About() {
    return (
        <section className={`${styleApp.container} ${stylesAbout.about}`}>
            <div className={stylesAbout.about__description}>
                <h1 className={stylesAbout.about__title}>About me</h1>
                <p className={stylesAbout.about__text}>
                    Hi! My name is Ilya Bielov and I&#39;m a Junior Frontend Developer. I am already familiar with main Web Technologies
                    like React, HTML, CSS, JavaScript and Git version control system.
                </p>
                <p className={stylesAbout.about__text}>
                    This page was page was developed during the course &#39;
                    <a href="https://www.mastersacademy.education/frontend-react-it">Intro to React</a>
                    &#39; from Masters Academy in 2024.
                </p>
                <p className={stylesAbout.about__text}>
                    This is a social project from MOCG company where I got an opportunity to work with Frontend mentors and to create my own
                    small project for the portfolio.
                </p>
                <p className={stylesAbout.about__text}>
                    You can contact me via <a href="https://t.me/MrBiela">Telegram</a> and check out my{' '}
                    <a href="https://github.com/IlyaBielov">GitHub</a>.
                </p>
            </div>
            <img className={stylesAbout.about__image} src={aboutImage} width="500" height="489" alt="About" />
        </section>
    );
}
