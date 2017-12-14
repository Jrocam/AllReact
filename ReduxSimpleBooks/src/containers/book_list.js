import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  state = {  }
  renderList(){
    return this.props.books.map( (book)=>{
      return (
        <li 
        key={book.title}
        onClick={()=> this.props.selectBook(book)} 
        className="list-group-item">
          {book.title}
        </li>
      )
    })
  }
  render() {
    return (
      <div> 
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state){
  // Whatever is return here will show up as props inside book_list
  return{
    books: state.books
  }
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch){
  // Whenever select book is called the resulti should be
  // passed to all of our reducers
  return bindActionCreators( {selectBook: selectBook }, dispatch )
}
// Promote book List from a component to a container
// it needs to know about this new dispatch method, selectBook.
// Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);