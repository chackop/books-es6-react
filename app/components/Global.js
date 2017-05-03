import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class Global extends Component {
constructor(props) {
    super(props);
    this.state = {
        query: ''
    }
}

    search() {
        console.log('test search', this.state.query);
    }

    render() {
        return {
         <div >
            <h2> Book store</h2>
            <FormGroup>
                <InputGroup>
                    <FormControl type="text" 
                    placeholder="Enter book" 
                    onChange={event => this.setState({query: event.target.value})} 
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            this.search();
                        }
                    }}
                    />
                    <InputGroup.Addon onClick={() => this.search()}>
                        <Glyphicon glyph="search">
                        </Glyphicon>
                    </InputGroup.Addon>
                </InputGroup>
            </FormGroup>
         </div >
     }
}
}

export default Global;
