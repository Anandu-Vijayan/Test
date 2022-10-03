import React from 'react'
import './Right.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Right = () => {
  return (
    <div>
        <container className="card">
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
  <li>Your NPS Score of teamwork is 6</li>
  <li>Compared to industry Standard you have</li>
  <li>Compared yestrday you have grown by 10%</li>
  <li>Your NPS score is changed by 12% from last week</li>
  <li>Your NPS score is changed by 24%from last month</li>
        </Card.Text>
       
      </Card.Body>
    </Card>
        </container>

    </div>
  )
}

export default Right