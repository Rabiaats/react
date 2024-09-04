import Offcanvas from 'react-bootstrap/Offcanvas';
import ReservationCard from './ReservationCard';

const MyOffcanvas = ({show, handleClose, handleDelete, resList}) => {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Reservations</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='d-flex flex-column gap-4 pb-5 mb-5'>
          {
            resList.map((app) =>(
              <ReservationCard key={app.id} {...app} handleDelete={handleDelete}/>
            ))
          }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default MyOffcanvas;