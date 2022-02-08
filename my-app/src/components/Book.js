
import React,{Component} from 'react';
import "../css/Book.css";


class Book extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
    
  }
  render(){
    return (
        <div id="book">
            <div id="book-left">
                <img src={this.props.imgSrc}></img>
            </div>
            <div id="book-right">
                <div id="title-area">
                    {this.props.title}
                </div>
                <div id="author-area">
                    <span>{this.props.author}(작가)</span>
                    <span class="bar"> | </span>
                    <span>{this.props.publisher}</span>
                    <span class="bar"> | </span>
                    <span>{this.props.pubdate}</span>
                </div>
                <div id="price-area">
                    <span>{this.props.price}원</span> →
                    <span> {this.props.discount}원(%)</span>
                </div>
                <div id="desc-area">
                    {this.props.desc}
                </div>
            </div>
        </div>   
    );
  }
}

export default Book;