import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyModal({handleClose, show, score}) {

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='fs-2'>{score > 8 ? "Nice" : score > 5 ? "Not Bad" : "Cık Cık ... You are not from Galatasaray !!"}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='fs-3'>Score : {score}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;