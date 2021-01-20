
import React, { Component } from 'react'
import BookList from './BookList.js'

class BookSearch extends Component {
  render() {
    return (
      <BookList books={this.props.books}
        updateBookShelf={this.props.updateBookShelf}
      />
    )
  }
}


export default BookSearch