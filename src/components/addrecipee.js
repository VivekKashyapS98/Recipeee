import React, { Component } from 'react';
import './main.css';

class Addrecipee extends Component {
    static defaultProps = {
        addNew() {}
    }
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            img: '',
            instr: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeState = this.changeState.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addNew({...this.state});
        this.setState({name: '', img: '', instr: []});
    }
    changeState(event) {
        if(event.target.name === 'instr') {
            const instrs = event.target.value.split(',');
            this.setState({instr: instrs});
        } else {
            this.setState({[event.target.name]: event.target.value});
        }
    }

    render() {
        return (
            <div className="add-recipee">
                <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Add Recipee
                </button>
                <div class="collapse" id="collapseExample">
                    <form onSubmit={this.handleSubmit} class="jumbotron">
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" for="recipeename">Name</label>
                            <input id="recipeename" type="text" className="col-sm-10 form-control" name="name" onChange={this.changeState} />
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" for="recipeeimg">Image URL</label>
                            <input id="recipeeimg" type="url" className="col-sm-10 form-control" name="url" onChange={this.changeState} />
                        </div><br/>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" for="recipeename">Instructions</label>
                            <textarea id="recipeinstr" type="text" className="col-sm-10 form-control" name="instr" placeholder="Seperate each instructions with commas" onChange={this.changeState} />
                        </div>
                        <input type="submit" className="btn btn-primary" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Addrecipee;