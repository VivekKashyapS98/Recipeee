import React,{Component} from 'react';
import './main.css';

class Recipe extends Component {
    render() {
        return this.props.data.map((item, index) => (
            <div className="cardsize card" key={index} style={{width: "30rem", height: '700px', overflow: 'scroll'}}>
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
        ));
    }
}

export default Recipe;