import Image from "next/image";
import aboutMePic from "../assets/images/about_me.png";
import '../css/About.css';

const About = (props: {}) => {
    const mult = 0.3

    return (
        <div id="about-me-container">
            <div id="title-container">
                <h1 id="about-me-title">About</h1>
            </div>

            <div id="about-me-section">
                <Image 
                    id="about-me-image"
                    src={aboutMePic}
                    height={1920 * mult}
                    width={1080 * mult}
                    alt="Pictures of H.J. Cartwright" />

                <div id="about-me-text">
                    <p>I was born and raised in a small town in Utah. With that comes a hick accent and a million catch-phrases. I currently live with my husband, our two cats and an unnecessary amount of house plants.</p>
                    <p>I hold a BS in Political Science as well as minors in Marketing and Management. I did most of my college career during the pandemic and was able to finish my degree at only twenty years old.</p>
                    <p>Life caught up to me and I took a moment to slow down. During that time I fell back in love with reading and it struck the need to create so I began writing. Before I knew it, I finished my first book, Diluted Truths.</p>
                    <p>I never planned to publish, but here I am. I love writing and I love creating. It struck joy in me I didn&#39;t know was possible. I only hope I continue to write and find this joy.</p>
                </div>
            </div>
        </div>

        
    )
}

export default About;