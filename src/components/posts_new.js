import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {reduxForm} from 'redux-form'
import {createPost} from '../actions/index'
import {Link} from 'react-router'

class PostsNew extends Component {
  static contextType = {
    router: PropTypes.object
  }

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // blog has been created 
        this.props.router.push({path: '/'})
      })
  }

  render(){
     //handleSubmitは reduxformに入っている
    const {fields: {title, categories, content}, handleSubmit} = this.props
    
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
           {/* formProps={...title}   onChange={title.onChange} */}
          <input type="text" className="form-control" onChange={title.onChange}/>
          <div className="text-help">
           {title.touched ? title.error : ''}
          </div>
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control"  onChange={categories.onChange}/>
          <div className="text-help">
           {categories.touched ? title.error : ''}
          </div>
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control"  onChange={content.onChange}/>
          <div className="text-help">
           {content.touched ? title.error : ''}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}


function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enture a usernmae'
  }

  if (!values.categories) {
    errors.categories = 'Enture a categories'
  }

  if (!values.content) {
    errors.content = 'Enture a content'
  }
  return errors
}


// connect: first argument is mapStateToProps, 2ndv is mapDispatchToProps
// reduxForm: 1 form formconfig, 2 is mapStateToProps, 3 is mapDispatchToProps


export default reduxForm ({
 form: 'PostsNewForm',
 fields: ['title', 'categories', 'content'],
 validate,
 initialValue: {title:"", categories:"",content: "" }
}, null, {createPost})(PostsNew)


// stateは下記みたいになるらしい
// state === {
//   form: {
//     PostNewForm: {
//       title:'...',
//       categories: '...',
//       content: '...'
//     }
//   }
// }