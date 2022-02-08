
import React,{Component} from 'react';
import "../css/Search.css";
import queryString from 'query-string';
import axios from 'axios'; 
import BookList from './BookList.js';
import PagiNation from './PagiNation.js';

class Search extends Component{
  constructor(props){
    super(props);

    this.state={
      bookList:[],
      currentPage:1,
      booksPerPage:3,
    }
  }

  getBookList = async(bookName)=>{
    await axios({
      method:'get',
      url:`v1/search/book.json?query="${bookName}"`,
      dataType:'json',
      headers:{
        "X-Naver-Client-Id":'QGlxspHcEl0Rg5vGaAAy',
        "X-Naver-Client-Secret":'_He9MGlH25'
      },
    })
    .then(response=>
      {
        console.log(response);
        this.setState({
          bookList:response.data.items
        },function(){
          this.setState({
            totalBookLength:this.state.bookList.length
          })
        })
      }
    );
  }
  componentDidMount(){
      console.log("location객체 출력")
      console.log("1",window.location)
      console.log("2",window.location.href)
      console.log("3",window.location.search)
      //?bookName=%EC%82%AC%ED%94%BC%EC%97%94%EC%8A%A4
      //?bookName="사피엔스"
      //?parameter1="value1"&parameter2="value2"
      const queryObj=queryString.parse(window.location.search)
        //queryString이 파라미터와 값 구문분석해줌...
        //window.location.search구문분석

      console.log("4",queryObj)
      //구문분석이 완료된 결과:{bookName: '사피엔스'}
      console.log("5",queryObj.bookName)
      //queryObj.bookName 책이름으로 네이버 검색 API 
      //axios날려서 결과를 한번 받아봅시다.
      const bookName=queryObj.bookName
    this.setState({
      bookName:bookName
    })
    this.getBookList(bookName)

  }
  currentBookList=(totalBookList)=>{
    const {currentPage,booksPerPage}=this.state;
    const indexOfLast=currentPage*booksPerPage;
    const indexOfFirst=indexOfLast-booksPerPage;
    const sliceBookList=totalBookList.slice(indexOfFirst,indexOfLast);
    return sliceBookList;
  }

  setCurrentpage=(page)=>{
    alert("Search의 setCurrentPage메서드!")
    this.setState({
      currentPage:page
    })
  }

  render(){
    return (
      <div id="search">
          <div id="start" class="blind"><a name="start" href="#">본문시작</a></div>
          <div id="search_result">
            <p>
                        <strong>'사피엔스'</strong>에 대한 검색결과&nbsp;</p>
                <div class="scl">
                <ul>
                    <li class="search_menu1"><strong><a href="/search/search.naver?query=%EC%82%AC%ED%94%BC%EC%97%94%EC%8A%A4&amp;qdt=1" class="N=a:csl.book,r:,i:" id="book_search"><span>책검색</span></a></strong></li>
                    <li class="search_menu2"><a href="/search/text_search.naver?query=%EC%82%AC%ED%94%BC%EC%97%94%EC%8A%A4&amp;qdt=1" class="N=a:csl.text,r:,i:"><span>본문검색</span></a></li>
                </ul>
                <h2 class="blind">책 검색</h2></div>
          </div>
          <div id="search-left">
            <span>전체</span>
            <ul>
              <li>화제의 책</li>
              <li>분야별</li>
              <li>추천 책</li>
              <li>시리즈</li>
            </ul>
          </div>
          <div id="search-right">
            <BookList bookList={this.currentBookList(this.state.bookList)}></BookList>
            <PagiNation booksPerPage={this.state.booksPerPage} totalBookList={this.state.bookList.length} setCurrentpage={this.setCurrentpage}></PagiNation>
          </div>
      </div>
    )
  }
}

export default Search;