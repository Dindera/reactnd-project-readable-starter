import React from 'react';
import { connect, Provider } from 'react-redux'
import * as ReadbleAPI from './API/ReadableAPI'
import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import LoadingBar from 'react-redux-loading-bar'

import Navigation from './components/Navigation'
import Content from './components/Content';
import Category from './components/Category';

// import Users from './components/Users';

export interface IAppProps {

}

class App extends React.Component<IAppProps, any> {
   
  constructor(props: any) {
    super(props)

    this.state = {
      categories: [],
      post: []
    }
  }

  componentDidMount() {
    ReadbleAPI.getAll()
    .then(categories => {
      // console.log('Categoriesss',categories)
       this.setState({categories: categories})
    })


  }



  public render() {
    return (
      // <Provider>
      <div style={{background: '#f2f2f2'}}>
      {/* <LoadingBar/> */}
      
      <Router>
      <Navigation categories={this.state.categories}/>
      <div className="App">
        <div>
        <Route path="/" exact component={Home}/>
        <Route path="/posts/:id" component={Content} />
        <Route path="/:category/posts" component={Category}/>
        </div>
      </div>
      </Router>
      </div>
      // </Provider>
    );
  }
}

function mapStateToProps(){

}

export default App
// export default connect(mapStateToProps)(App);
