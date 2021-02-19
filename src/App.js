import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link, Route } from 'react-router-dom'
import Shelf from './Shelf.js'
import SearchPage from './SearchPage.js'
class BooksApp extends React.Component {
  state = {
    books: [],
  }
  shelves = [
    'currentlyReading',
    "wantToRead",
    "read"]
  
  componentDidMount() {
    this.refreshBookShelves()
  }

  refreshBookShelves = () => {
    BooksAPI.getAll()
     .then((books) =>{
       this.setState(() => ({
         books
       }))
     })
  }
  updateBookShelf = (bookId, shelf) =>{
    BooksAPI.get(bookId).then(book => {
      console.log('book: ')
      console.log(book)
      BooksAPI.update(book, shelf)
      .then(value => {
        console.log('value: ')
        console.log(value)
        this.refreshBookShelves()
      })
    })
  }

  booksAPISearch = query => {
    return BooksAPI.search(query)
    .then(value => {
      return value
    }, reason => {
      console.log('reason: ' + reason)
      return []
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' 
        render = {() => (
          <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {this.shelves.map(shelf => (
              <Shelf key={shelf}
                     shelf={shelf}
                     books={this.state.books}
                     updateBookShelf={this.updateBookShelf}/>
            ))}
          </div>
          <div className="open-search">
            <Link 
              to='/search'
              className='search-page'>
                Add a book
            </Link>
          </div>
        </div>
        )}/>
        <Route path='/search'
          render = {() => (
            <div>
              {console.log('this.state.books', this.state.books)}
              <SearchPage updateBookShelf={this.updateBookShelf}
                          books={this.state.books}/>
            </div>
          )}
        />
      </div>
    )
  }
}

export default BooksApp
