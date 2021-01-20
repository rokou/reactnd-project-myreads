import React, { Component } from 'react'

class ChangeBookStatus extends Component {
  static defaultProps = {
    shelf: 'none'
  }
  state = {
    shelf: this.props.shelf
  }

  handleSelection = event => {
    event.preventDefault();
    this.setState({
      shelf: event.target.value
    }, (() => {
      if (this.props.getShelfChange) {
        this.props.getShelfChange(this.state.shelf)
      }
    }))
  }
  
  render() {
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleSelection} value={this.state.shelf}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading" disabled={this.state.shelf === "currentlyReading" ? true : false}>Currently Reading</option>
          <option value="wantToRead" disabled={this.state.shelf === "wantToRead" ? true : false}>Want to Read</option>
          <option value="read" disabled={this.state.shelf === "read" ? true : false}>Read</option>
          <option value="none" disabled={this.state.shelf === "none" ? true : false}>None</option>
        </select>
      </div>
    )
  }
}

export default ChangeBookStatus