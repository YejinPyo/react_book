
import React,{Component} from 'react';
import "../css/Home.css";

class Home extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div id="home">
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
          <div id="aside">
            <span>전체</span>
            <ul>
              <li>화제의 책</li>
              <li>분야별</li>
              <li>추천 책</li>
              <li>시리즈</li>
            </ul>
          </div>
      </div>
    )
  }
}

export default Home;