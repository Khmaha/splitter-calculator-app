import React from 'react';
import './TipsComponent.scss'
import InputComponent from '../InputComponent/InputComponent'
const TipsComponent = ({ icon, type, title, name, value, onChange }) => {
    return (
        <div className={"tip-emp " + ("tip-emp--" + type)}>
            <span className="tip-emp__title">{title}</span>
            <InputComponent name={name} onChange={onChange} icon={icon} type={type}></InputComponent>
        </div>
    )
}

export default TipsComponent