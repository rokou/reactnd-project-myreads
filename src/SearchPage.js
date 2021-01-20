import React, { Component } from 'react'
import BookSearch from './BookSearch.js'
import { Link } from 'react-router-dom'
class SearchPage extends Component {
  searchTerms = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 
                'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 
                'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 
                'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 
                'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 
                'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 
                'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 
                'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale',
                 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']
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
      //Filter terms so valid searches will be searched
      const filteredSearchTerm = this.searchTerms.filter(term => {
        return (this.state.searchField === term)
      })
      if (filteredSearchTerm.length > 0) {
        const searchPromise = this.props.booksAPISearch(filteredSearchTerm[0])
        searchPromise.then(books =>{
          this.setState({
            searchResults: books
          })
        })
      } else {
        this.setState({
          searchResults: []
        })
      }
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