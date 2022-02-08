
import React,{Component} from 'react';
import "../css/BookList.css";
import Book from './Book.js';


class BookList extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
    
  }
  render(){
    const result = this.props.bookList.map(book=>(
      <Book imgSrc={book.image} title={book.title} 
      author={book.author}
      publisher={book.publisher}
      pubdate={book.pubdate}
      price={book.price}
      discount={Book.discount}
      desc={book.description}></Book>
    ))
    return (
        <div id="main-wrap">
            {result}
        </div>
    )
  }
}

export default BookList;