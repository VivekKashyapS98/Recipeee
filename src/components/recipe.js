import React,{Component} from 'react';
import './main.css';

class Recipe extends Component {
    render() {
        return this.props.data.map((item, index) => (
            <div className="card" key={index} style={{width: "30rem"}}>
                <img src={item.img} className="card-img-top" alt="Recipe item"></img>
                <div className="card-body" alt="item body">
                    <h5 className="card-title">{item.name}</h5>
                    
                </div>
            </div>
        ));
    }
}

export default Recipe;