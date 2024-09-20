import * as React from "react";
import Modal from "@mui/material/Modal";
import { Box, TextField, Button, Checkbox, FormGroup, FormControlLabel } from "@mui/material";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { red } from "@mui/material/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, handleClose, info, setInfo, toDoFunc}) {

  const validationSchema = Yup.object({
    title: Yup.string().required("Please enter something"),
    date: Yup.string().required("Please enter a date"),
  });

  const handleSubmit = (values) => {
    if(info.id){
    toDoFunc(info.id, values);

    }else{

      toDoFunc(values);
    }
    setInfo("")
    handleClose();
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={{
              title: info.title || "",
              date: info.date || "",
              isPriority: info.isPriority || false,
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ errors, touched, values, setFieldValue }) => (
              <Form style={{ width: "100%" }}>
                <Field
                  sx={{ mb: 1 }}
                  as={TextField}
                  label="Enter the to do"
                  name="title"
                  type="text"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={touched.title && Boolean(errors.title)}
                  helperText={touched.title && errors.title}
                />
                <Field
                  sx={{ mb: 1 }}
                  as={TextField}
                  type="date"
                  name="date"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={touched.date && Boolean(errors.date)}
                  helperText={touched.date && errors.date}
                />
                <FormGroup>
                  <FormControlLabel sx={{color: red[600]}}
                    control={<Checkbox
                      checked={values.isPriority}
                      onChange={(e) => setFieldValue("isPriority", e.target.checked)}
                      sx={{
                        color: red[800],
                        '&.Mui-checked': {
                          color: red[600],
                        },
                      }}
                    />
                  }
                    label="Priority"
                  />
                </FormGroup>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    mt: 2,
                    textTransform: "none",
                    padding: "10px",
                    fontSize: "1rem",
                  }}
                >
                  {info.id ? "Edit" : "Add"}
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
}
