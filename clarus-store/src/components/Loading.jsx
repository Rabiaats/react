import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import { Container } from "@mui/material";

export default function SkeletonColor() {
  return (
    <Container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "center",
      }}
    >
      {Array.from([1, 2, 3]).map((item, i) => (
        <Skeleton
          key={i}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: 4,
            boxShadow: 3,
          }}
          variant="rectangular"
          width={300}
          height={400}
        />
      ))}
    </Container>
  );
}
