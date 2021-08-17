import React from 'react';
import './InputComponent.scss'
const InputComponent = ({ icon, name, value, type, onChange }) => {
    return (
        <div className="input-emp">
            <img className="input-emp-icon " src={icon}></img>
            <input type="number" className="input-emp-el" placeholder="0" name={name} onChange={(e) => onChange(e, type)}></input>
        </div>
    )
}

export default InputComponent