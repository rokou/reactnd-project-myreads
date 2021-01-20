import React, { Component } from 'react'
import BookList from './BookList.js'

class Shelf extends Component {
  render() {
    return (
      <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">
              {this.props.shelf === 'currentlyReading'? 'Currently Reading': ''}
              {this.props.shelf === 'wantToRead'? 'Want to Read': ''}
              {this.props.shelf === 'read'? 'Read': ''}
            </h2>
              <div className="bookshelf-books">
                <BookList key={this.props.shelf} 
                          books={this.props.books.filter(book => (
                            book.shelf === this.props.shelf
                          ))}
                          updateBookShelf={this.props.updateBookShelf}
                />
              </div>
          </div>
      </div>
    )
  }
}

export default Shelf