import * as React from 'react'
// import Content from './Content'
import * as ReadbleAPI from '../API/ReadableAPI'
import { Container, Row, Col } from 'react-bootstrap'
import Categories from './Categories'
import Posts from './Posts'

export interface HomeProps {
  categories: []
}

export default class Home extends React.Component<HomeProps, any> {
  
constructor(props: any) {
  super(props)

  this.state = {
    posts: []
  }
}

componentDidMount() {
  ReadbleAPI.posts()
  .then(posts => {
    console.log('Postss ', posts)
    this.setState({posts: posts})
  })

}

  
  public render() {

    // console.log(this.props)

    return (
      <Container>
       <Row style={{marginTop: 20, marginBottom: 20}}>
       <Col sm={2}>Aside</Col>
       <Col sm={8}><Posts posts={this.state.posts}/></Col>
       <Col sm={2}>Aside</Col>
       </Row>
      </Container>
    );
  }
}
