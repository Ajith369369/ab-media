import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useDestinations } from "../../hooks/useDestinations";
import DestinationCard from "./DestinationCard";

export const DestinationSection = () => {
  const { data, isLoading, error } = useDestinations();
  console.log("useDestinations data: ", data);

  if (isLoading) return <CircularProgress />;
  if (error) return <div>Error loading destinations</div>;

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
            {data.map((dest, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <DestinationCard
                  name={dest.destinationName}
                  image={dest.destinationImage}
                  price={dest.price}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default DestinationSection;
