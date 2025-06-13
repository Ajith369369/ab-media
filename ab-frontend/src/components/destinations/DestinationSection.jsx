import { Box, Container, Grid, Typography } from "@mui/material";
import DestinationCard from "./DestinationCard";

const destinations = [
  { name: "Jammu & Kashmir", image: "../../assets/images/kashmir.jpeg", price: "₹4999/-" },
];

export const DestinationSection = () => {
  return (
    <>
      <Box sx={{ py: 6, backgroundColor: "#f8f9fa" }}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            Explore Most Popular Destinations
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Plan your perfect trip with our most loved and best-selling tour
            packages.
          </Typography>

          <Grid container spacing={4}>
            {destinations.map((dest, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <DestinationCard {...dest} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default DestinationSection;
