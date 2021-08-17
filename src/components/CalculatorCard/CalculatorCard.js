import React, { useState } from 'react';
import ResultComponent from '../ResultComponent/ResultComponent'
import TipsListComponent from '../TipsListComponent/TipsListComponent'
import './CalculatorCard.scss';
import iconDollar from '../../assets/images/icon-dollar.svg'
import iconPerson from '../../assets/images/icon-person.svg';
var bill = 0;
var nbPerson = 0;
const CalculatorCard = () => {
    const [tipObject, setTipObject] = useState({
        valueTip: "",
        selectedTip: 0,
        isCustomTip: false,
        billValue: 0,
        nbPeople: 0,
        total: 0,
        amount: 0,

    })
    const tips = [
        {
            id: 1,
            value: 5,
            type: 'btn',
            selected: false
        },
        {
            id: 2,
            value: 10,
            type: 'btn',
        },
        {
            id: 3,
            value: 15,
            type: 'btn',
        },
        {
            id: 4,
            value: 25,
            type: 'btn',
        },
        {
            id: 5,
            value: 50,
            type: 'btn',
        },
        {
            id: 6,
            value: 'Custom',
            type: 'text',
        },
    ]
    const tipsContent = [
        {
            id: 1,
            title: "Bill",
            icon: iconDollar,
            type: 'bill'
        },
        {
            id: 2,
            title: "Number of People",
            icon: iconPerson,
            type: 'people'
        }
    ]
    let resultEls = [
        {
            id: 1,
            title: 'Tip Amount',
            subtitle: '/ person',
            icon: 'icon-dollar',
            value: tipObject.amount ? tipObject.amount : '0.00'
        },
        {
            id: 2,
            title: 'Total',
            subtitle: '/ person',
            icon: 'icon-dollar',
            value: tipObject.total ? tipObject.total : '0.00'
        },
    ]
    const handleChangeTip = (e, tip) => {
        console.log("handleChangeTip", tip)
        var valueTip = "";
        var customValueTip = "";
        let customInput = document.querySelector('.select-tip-emp__percent__custom')

        var isCustomTip = tipObject.isCustomTip;
        if (e && e.target.value) {
            valueTip = e.target.value;
            customValueTip = e.target.value;
            isCustomTip = true
        } else {
            valueTip = tip.value;
            customValueTip = "";
            if (customInput) {
                customInput.value = ''
            }
            isCustomTip = false
        }
        console.log("bill*******", bill)
        console.log("tipObject.billValue*******", tipObject.billValue)

        var billValue = (tipObject.billValue ? tipObject.billValue : 0)//else bill
        var nbPersonValue = (tipObject.nbPerson ? tipObject.nbPerson : 1)//else nbPerson
        if (nbPersonValue) {
            var amount = (billValue * ((valueTip) / 100)) / nbPersonValue
            var total = ((billValue / nbPersonValue) + amount)
        }
        setTipObject({
            ...tipObject,
            selectedTip: tip.id,
            valueTip: valueTip,
            isCustomTip: isCustomTip,
            amount: amount && amount.toFixed(2),
            total: total && total.toFixed(2)
        })

    }
    const handleInputTip = (e, type) => {

        if (type === 'bill') {
            bill = parseInt(e.target.value)
        } else {
            nbPerson = parseInt(e.target.value)
        }
        console.log("bill", bill)
        console.log("nbPerson", nbPerson)
        console.log("tipObject.valueTip", tipObject.valueTip)
        // if (!bill) {
        //     bill = tipObject.billValue
        // }
        // if (!nbPerson) {
        //     nbPerson = tipObject.nbPerson
        // }
        if (nbPerson) {
            var amount = ((bill ? bill : 0) * (tipObject.valueTip / 100)) / (nbPerson ? nbPerson : 1)
            var total = ((bill ? bill : 0) / (nbPerson ? nbPerson : 1) + amount)
        }
        console.log("amount", amount)
        console.log("total", total)
        setTipObject({
            ...tipObject,
            billValue: bill,
            nbPerson: nbPerson,
            amount: amount && amount.toFixed(2),
            total: total && total.toFixed(2)
        })

    }
    const handleResetCalcul = () => {
        setTipObject({
            valueTip: "",
            selectedTip: 0,
            isCustomTip: false,
            billValue: 0,
            numberPeople: 0,
            total: 0,
            amount: 0,
        })
        let customInput = document.querySelector('.select-tip-emp__percent__custom')
        let InputTips = document.querySelectorAll('.input-emp-el')
        if (customInput) {
            customInput.value = ''
        }
        if (InputTips && InputTips.length) {
            InputTips.forEach(input => {
                input.value = ''
            })
        }
    }
    return (
        <div className="calculator-emp">
            <TipsListComponent
                tips={tips}
                tipsContent={tipsContent}
                handleChangeTip={handleChangeTip}
                handleInputTip={handleInputTip}
                selectedTip={tipObject.selectedTip}
                valueTip={tipObject.valueTip}
                isCustomTip={tipObject.isCustomTip}
            ></TipsListComponent>
            <span></span>
            <ResultComponent
                resultEls={resultEls}
                resetCalcul={handleResetCalcul}
                total={tipObject.total}
                amount={tipObject.amount}
            ></ResultComponent>
        </div>
    )
}

export default CalculatorCard