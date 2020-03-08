

## route

- index

Router from 'react-redux'

- routes.js

```javascript
//初期設定
export default (
 <Route path="path" component={App}>
)

// ネスト
export default (
 <Route path="/" component={App}>
   <Route path="greet" component={Greeting}/>
 </Route> 
)

// App component

{this.prpos.children}
```
