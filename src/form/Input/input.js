import React from 'react';

// jshint ignore : start


export default function Input(props)
{
    return (
        <div>
            <div className="form-group">
                <input
                    name={props.name}
                    className="form-control"
                    type={props.type}
                    value={props.value}
                    onChange={props.functionHandler}
                    placeholder={props.placeholder}
                    autoFocus={props.autofocus}
                    required
                />
            </div>
        </div>
    )
}
