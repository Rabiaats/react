import Form from 'react-bootstrap/Form';

function MyForm({cities, types, handleInfo}) {
    return (
        <Form className='mt-3 d-flex justify-content-center'>

            <Form.Group controlId="place">
                <Form.Control id='place' type="text" onChange={handleInfo} placeholder="Enter place..." />
            </Form.Group>

            <Form.Group controlId="formGridState" className='ms-3'>
                <Form.Select id='city' defaultValue="Choose..."  onChange={handleInfo}>
                    <option value="All">All</option>
                    {
                        cities.map((city) => <option value={city}>{city}</option> )
                    }
                    <option></option>
                </Form.Select>
            </Form.Group>

            <Form.Group controlId="formGridState" className='ms-3'>
                <Form.Select id='type' defaultValue="Choose..."  onChange={handleInfo}>
                    <option value="All">All</option>

                    {
                        types.map((type) => <option value={type}>{type}</option> )
                    }
                    <option></option>
                </Form.Select>
            </Form.Group>
            
        </Form>
    );
}

export default MyForm;