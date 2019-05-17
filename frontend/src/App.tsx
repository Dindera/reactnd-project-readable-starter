import React from 'react';
import * as ReadbleAPI from './API/ReadableAPI'
import './App.css';
import Home from './components/Home'

import Navigation from './components/Navigation'

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
      console.log('Categoriesss',categories)
       this.setState({categories: categories})
    })


  }


  public render() {
    return (
      <div className="App">
       <div><Navigation categories={this.state.categories}/></div>
       <div><Home categories={this.state.categories}/></div>
      </div>
    );
  }
}

export default App;
