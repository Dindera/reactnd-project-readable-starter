import * as React from 'react'
import { connect } from 'react-redux'

export interface ContentProps {
  post: []
}

class Content extends React.Component<ContentProps, any> {
  constructor(props: any){
    super(props)

    console.log(props)
  }
  
  public render() {
    return (
      <div>
        <h1>Single Post Page</h1>
      </div>
    );
  }
}


const mapState2Props = () => {

  return {
  
  }
}

// export default Content
export default connect(mapState2Props)(Content);
