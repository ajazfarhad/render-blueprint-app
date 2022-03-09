import React from 'react';
import '../index.css';
import SearchBar from './SearchBar';
import showcase from '../api/showcase';
import Images from './Images';

class Hero extends React.Component {
  state = { images: []}

  onSearchPerform = async (term) => {
    const response = await showcase.get('/images/search', {
      params: { query: term }
    });

    this.setState({ images: response.data })
  }

  onComponentLoad = async () => {
    const response = await showcase.get('/images');

    this.setState({ images: response.data })
  }

  componentDidMount(){
    this.onComponentLoad()
  }

  render() {
    const images = this.state.images
    const imagesCount = <p><mark>{images.length}</mark> <strong>Images Found</strong></p>;
    return (
      <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-3 fw-bold">Showcase</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Beautiful Free Pictures Showcase</p>
          <SearchBar onSearch={this.onSearchPerform} />
          {imagesCount}
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <Images images={images}/>
          </div>
        </div>
      </div>
      </>
      )
    }
  };

  export default Hero;
