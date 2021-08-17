import React from 'react';
import './TipsListComponent.scss'
import TipsComponent from '../TipsComponent/TipsComponent'
import SelectTipComponent from '../SelectTipComponent/SelectTipComponent'

const TipsListComponent = ({ tips, tipsContent, handleChangeTip, handleInputTip, selectedTip, valueTip, isCustomTip }) => {
    return (
        <div className="tips-list-emp">
            {
                tipsContent.map(tip =>
                    <TipsComponent
                        title={tip.title}
                        icon={tip.icon}
                        onChange={handleInputTip}
                        type={tip.type}
                        key={tip.id}
                    ></TipsComponent>
                )
            }
            <SelectTipComponent
                title="Select Tip %"
                tips={tips}
                onChange={handleChangeTip}
                selectedTip={selectedTip}
                valueTip={valueTip}
                isCustomTip={isCustomTip}
            ></SelectTipComponent>
        </div>
    )
}

export default TipsListComponent


