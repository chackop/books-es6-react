import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class Global extends Component {
    search() {
        console.log('test search');
    }

    render() {
        return {
         <div >
            <h2> Book store</h2>
            <FormGroup>
                <InputGroup>
                    <FormControl type="text" placeholder="Enter book" />
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
