import React from 'react';
import './collapsible.css';
import propTypes from 'prop-types';

// jshint ignore : start

export default function Collapsible(props)
{
    return (
        <div className="centerText collapsibleFont collapsibleContentColor">
            <button type="button" className="btn btn-dark btn-block" data-toggle="collapse" data-target={"#" + props.stringId}>
                <div className="collapsibleFont collapsibleColor">
                    {props.title}
                </div>
            </button>

            <article id={props.stringId} className="collapse jumbotron">
                <p></p>
                {/* add image here */}
                <img className="resizeSelfie" src={props.imageURL} alt="" />
                <p>{props.text}</p>
                <div>{props.moreText}</div>



                {/* show your projects */}
                {/* Senior design C# Backend API  */}
                {/* Vacation Website */}

                {/* React keeper App */}
                {/* Unity AR project (real-time and historical) */}
                {/* Desperate Escape */}
                {/* Showcase a native iOS application eventually */}
                {
                    props.isWork && props.myResume
                }
                {
                    props.isWork && <div>
                        <a href="https://wayneheucf.itch.io/desperate-escape"
                        target="_blank" rel="noopener noreferrer">
                            My Top Down 2D game
                        </a>
                    </div>
                }

            </article>
        </div>
    );
}


// typecheck component properties
Collapsible.propTypes = {
    imageURL: propTypes.string,
    text: propTypes.string,
    title: propTypes.string,
    moreText: propTypes.string
}

