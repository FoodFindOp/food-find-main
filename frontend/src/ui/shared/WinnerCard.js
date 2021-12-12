import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Col, Container, Row } from 'react-bootstrap'
import review from '../../store/review'
import restaurant from '../../store/restaurant'

export const WinnerCard = ({ review }) => {
console.log(review)
  return (
    <Col className="d-flex justify-content-center text-white my-5">
      <Card className="bg-dark bg-opacity-75" style={{ width: '18rem' }}>
        <Card.Body>
          {review&& <Card.Title>Customer Star Rating: {review.reviewStarRating}</Card.Title>}
          {review&& <Card.Text>
            {review.reviewText}
          </Card.Text>}
        </Card.Body>
      </Card>
    </Col>
  )
}