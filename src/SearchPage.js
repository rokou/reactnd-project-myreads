import React, { Component } from 'react'
import BookSearch from './BookSearch.js'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
class SearchPage extends Component {
  state = {
    searchField: '',
    searchResults: []
  }

  handleChange = e => {
    this.setState({
      searchField: e.target.value
    }, (() => {
      this.filterbySearchTerms()
    }))
  }

  filterbySearchTerms = () => {
    BooksAPI.search(this.state.searchField).then((books) => {
      if (typeof books != "undefined" && !books.error) {
        let checkBooks = []
        for (const item in this.props.books){
          checkBooks = books.map(book => {
            if (book.title === this.props.books[item].title){
              book.shelf = this.props.books[item].shelf
            }
            return book
          })
        }
        console.log('checkBooks', checkBooks)
        this.setState({
          searchResults: checkBooks
        })
      } else {
        this.setState({
          searchResults: []
        })
      }
    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" 
                to='/'
          >Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input  type="text" 
                    placeholder="Search by title or author"
                    onChange={this.handleChange}
                    value={this.state.searchField}
            />
          </div>
        </div>
        <div className="search-books-results">
        <BookSearch books={this.state.searchResults}
                    updateBookShelf={this.props.updateBookShelf}/>
        </div>
      </div>
    )
  }
}

export default SearchPage