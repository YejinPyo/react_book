import React,{Component} from 'react';
import "../css/PagiNation.css";

class PagiNation extends Component{
  constructor(props){
    super(props);

    this.state={
      loading:this.props.loading,
      bookName:this.props.bookName,
      totalBookList:this.props.totalBookList,
      booksPerPage:this.props.booksPerPage,
    }
  }

  pageClick=(page)=>{
    alert("pageClick:"+page);
    this.props.setCurrentpage(page);//Search컴포넌트한테 넘겨받은 setCurrentPage
  }

  // previousClick=(previous)=>{
  //   alert("previousClick:"+previous);
  //   this.props.setCurrentpage(page);
  // }

  render(){
      let pageNumbers = [];
      const {totalBookList,booksPerPage}=this.props;
      console.log(totalBookList);
      console.log(booksPerPage);
      for (let i=1; i<=Math.ceil(totalBookList/booksPerPage); i++) {pageNumbers.push(i);
    }
    console.log('배열데이터:',pageNumbers);

    const pageList=pageNumbers.map(page=>(
        <span className='page' key={page} onClick={()=>this.pageClick(page)}>
            {page}
        </span>
    )
    );

    const previous=(previous=>(
      <button className='previous' key={previous} onClick={()=>this.previousClick(previous)}>
          {previous}
      </button>
    )
    );

    return (
        <div className='Pagination'>
          {previous}
            {pageList}
        </div>
    )
  }
}

export default PagiNation;