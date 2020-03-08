import React, {Component} from 'react'
import {reduxForm} from 'redux-form'

class PostsNew extends Component {
  render(){
     //handleSubmitは reduxformに入っている
    const {fields: {title, categories, content}, handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
           {/* formProps={...title}   onChange={title.onChange} */}
          <input type="text" className="form-control" onChange={title.onChange}/>
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control"  onChange={categories.onChange}/>
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control"  onChange={content.onChange}/>
        </div>
        <button type="submit" className="btn-primary">Submit</button>
      </form>
    )
  }
}

export default reduxForm ({
 form: 'PostsNewForm',
 fields: ['title', 'categories', 'content'],
 initialValue: {title:"", categories:"",content: "" }
})(PostsNew)


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