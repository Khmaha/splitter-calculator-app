import React from 'react';
import './SelectTipComponent.scss'
const SelectTipComponent = ({ title, tips, onChange, selectedTip, valueTip, isCustomTip }) => {
    return (
        <div className="select-tip-emp">
            <span className="select-tip-emp__title">{title}</span>
            <div className="select-tip-emp__percent">
                {
                    tips.map(tip => (
                        tip.type === 'btn' ?
                            <span
                                className={"select-tip-emp__percent__value " + (selectedTip === tip.id ? ' selected' : '')}
                                key={tip.id} onClick={() => onChange(null, tip)}>{tip.value + '%'}</span>
                            : <input key={tip.id}
                                className={"select-tip-emp__percent__custom " + (selectedTip === tip.id ? ' selected' : '')}
                                type='number'
                                onChange={(e) => onChange(e, tip)}
                                placeholder={tip.name}></input>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default SelectTipComponent