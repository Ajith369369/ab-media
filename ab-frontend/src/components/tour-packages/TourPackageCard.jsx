import { Box, Button, Card, CardContent, Typography } from "@mui/material";

export const TourPackageCard = ({
  image,
  name,
  children = "VIEW DETAILS",
  onClick,
}) => {
  return (
    <>
      <Card
        sx={{
          height: "100%", // Fill the parent grid cell height
          borderRadius: 3,
          boxShadow: 3,
          overflow: "hidden",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
          },
        }}
      >
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{ width: "100%", height: 180, objectFit: "cover" }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            "&:last-child": {
              paddingBottom: 1,
            },
          }}
        >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#4fbcbc"
            sx={{ textTransform: "uppercase" }}
          >
            {name}
          </Typography>
          <Button
            variant="contained"
            onClick={onClick}
            sx={{
              backgroundColor: "#4fbcbc",
              color: "white",
              fontWeight: "bold",
              width: "90%",
              borderRadius: "999px", // pill shape
              px: 4, // horizontal padding
              py: 1, // vertical padding
              my: 1, // vertical margin
              textTransform: "uppercase",
              "&:hover": {
                backgroundColor: "#3faaaa", // darker on hover
              },
            }}
          >
            {children}
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default TourPackageCard;
