import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      p={"10rem 1rem 0"}
      minHeight={"100vh"}
    >
      <Box>
        <Box
          textAlign={"center"}
          className="max-w-lg mx-auto space-y-3 text-center"
        >
          <Typography
            sx={{
              fontSize: {
                xs: "3rem",
                sm: "5rem",
              },
            }}
          >
            Page not found
          </Typography>
          <Typography color="red" fontSize={"1rem"}>
            Sorry, the page you are looking for could not be found or has been
            removed.
          </Typography>
          <Link
            to="/"
            style={{
              fontSize: "1.5rem",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Go back
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              style={{ width: "50px", height: "50px" }}
            >
              <path
                fillRule="evenodd"
                d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default NotFound;
