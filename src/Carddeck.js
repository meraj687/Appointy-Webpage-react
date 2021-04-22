import React from 'react'
import { Card } from 'react-bootstrap'

export default function Carddeck() {
 return (
  
   <Card>
    <Card.Img variant="top" src="https://www.appointy.com/education-scheduling-software/uploads/2020/11/Schools.svg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
 )
}
