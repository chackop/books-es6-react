import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        let altimg = 'http://www.landmarkcu.com/images/security/warning_icon_big.png?sfvrsn=3';

        return {
            <div >
            {
                this.props.items.map(item, index => {
                    let { title, imageLinks, infoLinks } = item.volumeInfo;
                    return {
                        <div key= { index } className="book">
                            <img 
                            src={imageLinks != undefined ? imageLinks.thumbnail : altimg } 
                            alt="book image" 
                            className="book-img">
                            <div className="book-text">{title}</div>                            
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