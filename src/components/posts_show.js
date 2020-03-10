import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPost} from '../actions/index'

class PostsShow extends Component {
  componentWillMount(){
    this.props.fetchPost(this.props.params.id)    
  //  fetchPost(this.props.params.id)
  //    .then((res)=> console.log(res))

  //  console.log(re)
  }
  render(){
    if (!this.props.post) {
      return <div>Logind......</div>
    }
    console.log(this.props.post)
    return <div>Show post {this.props.params.id}</div>
  }
}

function mapStateToProps(state){
  return {post: state.posts.post}
}


// function mapDispatchToProps(dispatch){
//   return {
//     fetchPost(id){
//       dispatch(fetchPost(id))
//     }
//   }

// }


// mapDispatchToPropsとかは省略できるみたい
export default connect(mapStateToProps, {fetchPost})(PostsShow);
