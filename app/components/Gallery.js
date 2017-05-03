import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        return {
            <div >
            {
                this.props.items.map(item, index => {
                    let { title, imageLinks, infoLinks } = item.volumeInfo;
                    return {
                        <div key= { index } >
                        <img src={imageLinks.thumbnail} alt="book image">
                            {title}
                        </div>
                }
                })
    }
    Gallery Component
            </div>
        }
    } 
}

export default Gallery;