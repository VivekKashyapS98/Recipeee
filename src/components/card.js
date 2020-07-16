import React, { Component } from 'react';

class Card extends Component {
    render() {
        const item = this.props.info;
        return (
            <div className="cardsize card" style={{maxWidth: "30rem", maxHeight: 'auto', overflow: 'scroll'}}>
                <img style={{maxHeight: '200px'}} src={item.img} className="card-img-top" alt="Item type" />
                <div className="card-body" alt="item body">
                    <h5 className="card-title">{item.name}</h5>
                    <ol className="card-text">
                    {item.instr.map((rule,id) =>(
                            <li key={id}>{rule}</li>
                    ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Card;