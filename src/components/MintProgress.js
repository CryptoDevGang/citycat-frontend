import React from 'react';

import '../css/MintProgress.css'

export const MINT_PROGRESS_DEFAULT_PROP = [
    {
        name: 'Completed',
        label: 'Mint completed: 400',
        value: 19,
        color: '#e66465',
        leftColor: '#e66465',
        rightColor: '#9198e5',
    },
    {
        name: 'Remaining',
        label: 'Remaining: 1650',
        value: 81,
        color: 'grey',
        leftColor: 'grey',
        rightColor: 'grey',
    }
];

export class MintProgress extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const parent = this.props;

        let values = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
            if(item.value > 0) {
                return (
                    <div className="value" style={{'color': item.color, 'width': item.value + '%'}}  key={i}>
                        <span>{item.label}</span>
                    </div>
                )
            }
        }, this);

        let calibrations = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
            if(item.value > 0) {
                return (
                    <div className="graduation" style={{'color': item.color, 'width': item.value + '%'}}  key={i}>
                        <span>|</span>
                    </div>
                )
            }
        }, this);

        let bars = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
            if(item.value > 0) {
                return (
                    <div className="bar" style={{background: 'linear-gradient(to right, ' + item.leftColor +', ' + item.rightColor + ')', 'width': item.value + '%'}}  key={i}>

                    </div>
                )
            }
        }, this);

        let legends = parent.readings && parent.readings.length && parent.readings.map(function(item, i) {
            if(item.value > 0) {
                return (
                    <div className="legend" key={i}>
                        <span className="dot" style={{'color': item.color}}>●</span>
                        <span className="label">{item.name}</span>
                    </div>
                )
            }
        }, this);

        return (
            <div className="multicolor-bar">
                <div className="values">
                    {values == ''?'':values}
                </div>
                <div className="scale">
                    {calibrations == ''?'':calibrations}
                </div>
                <div className="bars">
                    {bars == ''?'':bars}
                </div>
                <div className="legends">
                    {/*{legends == ''?'':legends}*/}
                    <span className="label">Total amount: 2050</span>
                </div>
            </div>
        );
    }
}