import React from 'react';
import './heading.css';

// style={{backgroundColor: "yellow"}}

// jshint ignore : start
export default function Heading(props)
{
    return (
        <div>
            <header id="header">
                <div>
                    <div className="centerText headingFont">
                        <div className="logo">
                            <span className="fas fa-gem"></span>
                        </div>
                        <h1>Leo Zhang</h1>
                        <div>Mobile, Web, and Game developer</div>
                        <p>A passionate student on the road of self-improvement
                        and making the world a better place</p>

                        <div className="debug">
                            click on any of the drop-downs below for more info
                        </div>
                    </div>
                </div>
                {/* <nav className="centerText">
                    <a href="#intro">Intro</a> |
                    <a href="#work">&nbsp;Work</a> |
                    <a href="#about">&nbsp;About</a> |
                    <a href="#contact">&nbsp;Contact</a>
                </nav> */}
            </header>
        </div>
    );
}


