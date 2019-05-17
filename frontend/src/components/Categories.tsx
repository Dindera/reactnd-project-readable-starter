import * as React from 'react';
import { Card } from 'react-bootstrap'
export interface CategoriesProps {
}

export default class Categories extends React.Component<CategoriesProps, any> {
  
  public render() {
    return (
      <div>
      <Card bg="secondary" text="white" style={{ width: '18rem' }}>
      <Card.Header>Header</Card.Header>
      </Card>
      </div>
    );
  }
}
