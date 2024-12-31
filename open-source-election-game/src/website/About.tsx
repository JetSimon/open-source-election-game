import "./About.css"

import aboutEditor from "../assets/about-editor.png";
import gore from "../assets/gore.jpg";

function About() {
    return (
        <div className="About">
            <h1>About</h1>

            <div className="AboutImage">
                <img src={gore}></img>
            </div>

            <h2>What is OSEG?</h2>
            <p>OSEG (Open Source Election Game) is an open source game engine heavily inspired by the browswer based game "The Campaign Trail" (or, TCT) originally made by Jet Simon (the person writing this).</p>
            <p>The reason it exists is because there is a community of people who make mods for The Campaign Trail using it's minimized javascript code. Frankly the code base is a mess. I wanted to make a way to make election scenario games that was more flexible and was open source</p>
        
            <h2>What Does Open Source Mean?</h2>
            <p>OSEG is open source, which means you can use it to make a browser based game, desktop based game (packaged using something like electron) and you can keep any proceeds. We just ask that you give credit to OSEG if possible.</p>
        
            <h2>Why Do I Care As a Player?</h2>
            <p>You will be able to play more complex election scenarios! OSEG allows creators direct access to the source code, which makes it much easier to add complex systems. OSEG was also built from the ground up with the idea of custom endings and CYOA in mind. The data is much more organized and easier to edit.</p>
            <p>Additionally, OSEG has been built with mobile in mind. This means the game plays/looks good on mobile!</p>

            <h2>Why Do I Care as a Modder?</h2>
            <p>
                Here is a list of some reasons why you should care:
                <ul>
                    <li>All data about the scenario is stored in a file called data.json. <span className="AboutBold">No more jumping between code 1 and code 2s!</span> All information related to a question and answer is stored in a JSON object for that question/answer. Which means you don't need to hop around and keep track of answer_feedback_jsons or other results of TCT being stored in a database.</li>
                    <li>All CYOA/ending logic is stored in a file called logic.js. The OSEG engine has tons of functions to make previously hard to implement features as easy as calling an engine function.</li>
                    <li>All mapping data is just stored in an svg. You don't need to convert the SVG to a map anymore, just use an SVG where the path ids are the abbreviations of states and OSEG takes care of the rest!</li>
                    <li>OSEG has a web based IDE! Check out the Editor section of this site. You can <span>edit code directly in browser</span> as well as see changes to margins in real time.</li>
                    <li>OSEG has a Play In Editor feature. <span className="AboutBold">Test directly from the web editor!</span></li>
                    <li><span className="AboutBold">Simulate 500 games at once and see the results!</span> In the OSEG editor there is a tab called Simulation and it gives you the average, best, and worst results after playing automatically 500 times. This makes balancing a breeze.</li>
                </ul>
            </p>

            <h2>"This Site Doesn't Have As Many Features As CTS/NCT/etc!!!"</h2>

            <p>Yeah, this site is more of a demo site for the OSEG engine itself. I'm working on my own site that uses OSEG that will have more features like achivements, more scenarios, etc. My dream is to have a website with accounts and easy user submitted scenarios.</p>

            <h2>Some Images</h2>

            <div className="AboutImage">
                <img src={aboutEditor}></img>
                <p>A picture of the OSEG editor with integrated coding and live map view!</p>
            </div>
            

        </div>
    )
}

export default About;