
import React,{Component} from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home.js';
import Search from './components/Search.js';
import "./App.css";

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      searchText:''
    }
  }
  getMovies = async()=>{
    await axios({
      method:'get',
      url: '/v1/search/book.json?query="사피엔스"',
      dataType: 'json',
      headers: {
        "X-Naver-Client-Id":'ysRS6My6vrwAFuSku0Sa',
        "X-Naver-Client-Secret":'Tu_4kyevQA',
      },
    })
    .then(response=>
      {console.log(response);});
  }

  componentDidMount(){
    this.getMovies();
  }
  
  searchBook=()=>{
    alert("책 검색!")
    const {searchText}=this.state//비구조화할당
    alert(searchText)
    window.location.href="/search?bookName="+searchText
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render(){
    return (
      <BrowserRouter>
        <div id="header">
          <div id="search-comp">
              <input type="text" placeholder="검색어 입력" 
              onChange={this.handleChange} name="searchText"/>
              <button onClick={this.searchBook}>검색</button>
            </div>
            <div class="lnb">
              <span className='blind'>주메뉴</span>
              <ul>
                <li id="btn_left_category" className='depth1 on'>
                  <a href='#' id="search_category">
                    <span>분야별 찾기</span>
                  </a>
                </li>
                <li class='depth2'>
                  <a href='/index.naver' class="N=a:LNB.home" id='homeTab'>
                    <span>책 홈</span>
                  </a>
                </li>
                <li class='depth3'>
                  <a href="/bestsell/bestseller_list.naver" class='class="N=a:LNB.bestseller"'>
                    <span>베스트셀러</span>
                  </a>
                </li>
                <li class='depth6'>
                  <a href=''href="/bookshelf/index.naver" class="N=a:LNB.bookshelf">
                    <span>지서재</span>
                  </a>
                </li>
              </ul>
              <span class='blind'>관련 서비스</span>
            </div>
        </div>
          
          
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/search" element={<Search/>}/>
          </Routes>
      </BrowserRouter>
    )
  }
}

export default App;