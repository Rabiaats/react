import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import citiesHotels from "../../helpers/hotels";

function MyModal({ handleClose, show, handleAdd, placeInfo }) {
  const [hotelInfo, setHotelInfo] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [personInfo, setPersonInfo] = useState({
    fullName: "",
    day: 1,
    people: 1,
    date: "",
  });

  const handlePersonInfo = (e) =>
    setPersonInfo({ ...personInfo, [e.target.id]: e.target.value });

  const handleInfo = (e) => {
    const hotel = citiesHotels
      .filter((cities) => cities.city === placeInfo.city)
      .map(({ hotels }) =>
        hotels.find(({ name, phone, address }) => {
          if (name === e.target.value) {
            return {
              name,
              phone,
              address,
            };
          }
          return null;
        })
      );
    setHotelInfo({
      name: hotel[0].name,
      phone: hotel[0].phone,
      address: hotel[0].address,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRes = {
      id: new Date().getTime(),
      name: placeInfo.name,
      city: placeInfo.city,
      img: placeInfo.img,
      date: personInfo.date,
      people: personInfo.people,
      day: personInfo.day,
      fullName: personInfo.fullName,
      hotelName: hotelInfo.name,
      hotelPhone: hotelInfo.phone,
      hotelAddress: hotelInfo.address,
    };
    handleAdd(newRes);
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="d-flex gap-1">
          <Modal.Title>{placeInfo.name}</Modal.Title>
          <h5>{placeInfo.city}</h5>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Select Hotel</Form.Label>
              <Form.Select
                id="city"
                defaultValue="Choose..."
                onChange={handleInfo}
              >
                {citiesHotels
                  .filter((cities) => cities.city === placeInfo.city)
                  .map(({ hotels }) =>
                    hotels.map(({ name, phone, address }) => (
                      <option phone={phone} address={address} value={name}>
                        {name}
                      </option>
                    ))
                  )}
                <option></option>
              </Form.Select>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                id="fullName"
                type="text"
                placeholder="Full Name"
                required
                onChange={handlePersonInfo}
              />
              <Form.Label>Day&Time</Form.Label>
              <Form.Control
                id="date"
                type="datetime-local"
                placeholder="date"
                required
                onChange={handlePersonInfo}
              />
              <Form.Label>Number Of People</Form.Label>
              <Form.Control
                id="people"
                type="number"
                min={1}
                max={10}
                placeholder="Enter number"
                required
                onChange={handlePersonInfo}
              />
              <Form.Label>Number Of Days</Form.Label>
              <Form.Control
                id="day"
                type="number"
                min={1}
                max={10}
                placeholder="Enter number"
                required
                onChange={handlePersonInfo}
              />
            </Form.Group>

            <div className="text-center mt-3">
              <Button className="me-2" variant="success" type="submit">
                Submit
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyModal;
