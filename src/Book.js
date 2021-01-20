import React, { Component } from 'react'
import ChangeBookStatus from './ChangeBookStatus.js'

class Book extends Component {
  getShelfChange = (value) => {
    if(this.props.updateBookShelf){
      this.props.updateBookShelf(this.props.id, value)
    }
  }

  render() {
    return (
      <li className="book">
        <div className="book-top">
          <div className="book-cover" style={{ 
            width: 128, 
            height: 193, 
            backgroundImage: 'url(' + this.props.cover + ')'}}>
          </div>
          <ChangeBookStatus
            shelf={this.props.shelf}
            getShelfChange= {this.getShelfChange}/>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.authors ? this.props.authors.map((author,index) => (
          <div key={author + index}>{author}</div>
        )): 
          <div></div>
        }
        </div>
      </li>
    )
  }
}

export default Book

