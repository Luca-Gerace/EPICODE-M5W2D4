import { Card, Col } from 'react-bootstrap'

export default function SingleBook({ book }) {
    return (
      <Col xs={6} md={3} className='pb-4'>
        <Card className="book-cover d-flex flex-column">
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
}