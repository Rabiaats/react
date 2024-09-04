import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import MyOffcanvas from './MyOffcanvas';
import { useState } from 'react';

function MyNavbar({resList, handleDelete}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(resList.length)

  return (
      <Navbar expand="lg" className="p-4 sticky-top d-flex justify-content-between bg-dark bg-opacity-25 align-items-center gap-3">
        <h1 className='text-center ps-5 title'>
          Travel Türkiye
        </h1>
        <Button variant="warning" onClick={handleShow} className='position-relative ms-5'>
          My Reservations
          <span
            id="basket"
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary"
          >
            {resList.length}
          </span>
        </Button>
        <MyOffcanvas show={show} handleClose={handleClose} handleDelete={handleDelete} resList={resList}/>
      </Navbar>
  );
}

export default MyNavbar;