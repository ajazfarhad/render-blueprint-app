import React from 'react'

class SearchBar extends React.Component {
  state = { term: '' };
  onSearchSubmit = (e) => {
    const value = e.target.value
    this.setState({ term: value })
    this.props.onSearch(this.state.term)
  }
  render() {
    return (
      <>
        <input type="text"
        className="form-control form-control-lg shadow-lg p-3 mb-5 bg-body rounded"
        placeholder="search...."
        onChange={this.onSearchSubmit}/>
      </>
    )
  }
}
export default SearchBar;
