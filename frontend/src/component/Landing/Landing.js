import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import './Landing.css'
import Card from 'react-bootstrap/Card';
import Compose from '../Compose/Compose.js'
import Comments from '../Comments/Comments.js';
import Cards from '../Cards/Cards'





function Landing() {
  const Navigate = useNavigate()



  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo')
    if (!userInfo) {
      Navigate('/login')

    }
  })

  return (
    <div>
      <Header />
      <container>
        <h1 className='over'>
          OverView
        </h1>
        <hr className='bold'></hr>
        <div className='box'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Your NPS Score. View Reports</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Your NPS Score. View Reports</Card.Subtitle>
              <Card.Text>
                7

              </Card.Text>

            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>

            <Card.Body>
              <Card.Title>Your NPS Score. View Reports</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Your NPS Score. View Reports</Card.Subtitle>
              <Card.Text>
                6
              </Card.Text>

              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>

            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>

            <Card.Body>
              <Card.Title>Your NPS Score. View Reports</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Your NPS Score. View Reports</Card.Subtitle>
              <Card.Text>
                6
              </Card.Text>


              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>

            </Card.Body>
          </Card>
        </div>
        <Compose/>
        <Comments/>
        <Cards/>

      </container>
    </div>
  )
}

export default Landing


