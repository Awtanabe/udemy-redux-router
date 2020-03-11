import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchPost, deletePost} from '../actions/index'
import {Link} from 'react-router'
// import PropTypes from 'prop-types'


class PostsShow extends Component {
  // static contextType = {
  //   router: PropTypes.object
  // }
  componentWillMount(){
    this.props.fetchPost(this.props.params.id)    
  //  fetchPost(this.props.params.id)
  //    .then((res)=> console.log(res))

  //  console.log(re)
  }

  onDeleteClick(props){
    this.props.deletePost(this.props.params.id)
      .then(() => this.props.router.push('/'))
  }

  render(){
    if (!this.props.post) {
      return <div>Logind......</div>
    }

    const {post} = this.props
    console.log(this.props.post)
    return (
      <div>
        <Link to="/">Back to INdex</Link>
        <button className="btn btn-danger" onClick={this.onDeleteClick.bind(this)}>Delete</button>
        <h3>{post.title}</h3>
        <h6>Categoris: {post.categoris}</h6>
        <p>{post.content}</p>
      </div>
    )
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
export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
