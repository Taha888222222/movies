import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

const Cardmovives = ({id, title, rate, description, posterUrl, trailer}) => {
  return (
    <div className="movie-card"> <Card style={{ width: '18rem' }}>
    <img src={posterUrl}/>
    <Card.Body>
      <Card.Title style={{color: 'blue'}} >{title}</Card.Title>
      <Card.Text>
          <strong>DECRIPTION:</strong> {description} <br />
          <strong>RATE:</strong> {rate} <br />
          <strong>ID:</strong>{id} <br />
      </Card.Text>
      <Button  style={{width: '10rem'}} variant="primary" >{trailer}</Button>
    </Card.Body>
  </Card>
  </div>
  )
}

export default Cardmovives