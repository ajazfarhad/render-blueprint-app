import React from 'react';
import '../index.css';

class ImageCard extends React.Component {
  render() {
    const { caption, description, link } = this.props.image;
    const image = this.props.image
    return (
      <>
         <div className="col">
              <div className="card shadow-sm">
                <img ref={this.imageRef} src={link} alt="Placeholder" className="img-thumbnail"/>
                <div className="card-body">
                  <h6 class="card-title">{caption}</h6>
                  <p className="card-text">{description}</p>
                </div>
              </div>
            </div>
      </>
      )
    }
  };

  export default ImageCard;
