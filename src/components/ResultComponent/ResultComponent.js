import React from 'react';
import './ResultComponent.scss'
import TipsComppnent from '../TipsComponent/TipsComponent'
const ResultComponent = ({ resultEls, amount, total, resetCalcul }) => {
    return (
        <div className="result-emp">
            <div className="result-emp__list">
                {
                    resultEls.map(result => (
                        <div className="result-emp__list-tip" key={result.id}>
                            <div className="result-emp__list-tip__per-person">
                                <span className="result-emp__list-tip__per-person--title">{result.title}</span>
                                <span className="result-emp__list-tip__per-person--subtitle">{result.subtitle}</span>
                            </div>
                            <div className="result-emp__list-tip__result">
                                <i className={result.icon}></i>
                                <span className="result-emp__list-tip__result--value">{"$" + result.value}</span>
                            </div>
                        </div>
                    ))
                }

            </div>
            <button className={"result-emp__reset " + (!amount && !total ? 'result-emp__reset--disabled' : '')} onClick={resetCalcul}>RESET</button>
        </div>
    )
}

export default ResultComponent