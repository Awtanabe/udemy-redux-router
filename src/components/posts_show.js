import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPost} from '../actions/index'

class PostsShow extends Component {
  componentWillMount(){
    this.props.fetchPost(this.props.params.id)
    debugger
    console.log("hello")
  //  fetchPost(this.props.params.id)
  //    .then((res)=> console.log(res))

  //  console.log(re)
  }
  render(){
    return <div>Show post {this.props.params.id}</div>
  }
}

// function mapStateToProps(state){
//   return {state}
// }


// function mapDispatchToProps(dispatch){
//   return {
//     fetchPost(id){
//       dispatch(fetchPost(id))
//     }
//   }

// }


// mapDispatchToPropsとかは省略できるみたい
export default connect(null, {fetchPost})(PostsShow);
