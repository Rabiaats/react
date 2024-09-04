
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function ReservationCard({id, name, city, img, hotelName, hotelAddress, hotelPhone, day, date, people, handleDelete, fullName}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{hotelName}</Card.Title>
        <Card.Text>
          {name} - {city}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Phone: {hotelPhone}</ListGroup.Item>
        <ListGroup.Item>Address: {hotelAddress}</ListGroup.Item>
        <ListGroup.Item>Full Name: {fullName}</ListGroup.Item>
        <ListGroup.Item>People: {people}</ListGroup.Item>
        <ListGroup.Item>Day: {day}</ListGroup.Item>
        <ListGroup.Item>Date: {new Date(date).toLocaleDateString()}</ListGroup.Item>
        <ListGroup.Item>Time: {new Date(date).toLocaleTimeString()}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button className='bg-danger' onClick={() => handleDelete(id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default ReservationCard;