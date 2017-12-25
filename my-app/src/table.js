import React, { Component } from 'react';

class Grid extends Component {
    constructor(props) {    
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="App">
                <div>
                    <h3>Past Calculations</h3>
                </div>
                <div>
                    <table className="grid">
                        <thead>
                            <tr>
                                <th>Number1</th>
                                <th>Number2</th>
                                <th>Operator</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.props.previous.map(function (arr, index) {
                                return (
                                    <tr key={index}>
                                        <td>{arr.n1}</td>
                                        <td>{arr.n2}</td>
                                        <td>{arr.operator}</td>
                                        <td>{arr.res}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default Grid;