import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { useDestinations } from "../../hooks/useDestinations";
import DestinationCard from "./DestinationCard";

export const DestinationSection = () => {
  const [page, setPage] = useState(1);
  const limit = 3;
  const sectionRef = useRef(null);

  const { data, isLoading, error } = useDestinations(page, limit);
  console.log("useDestinations data: ", data);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" py={6}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) return <div>Error loading destinations</div>;

  const handleChange = (event, value) => {
    event.preventDefault(); // prevent default behavior, i.e., unwanted scroll to top
    setPage(value);
    sectionRef.current?.scrollIntoView({ behavior: "smooth" }); // scroll into view on page change
  };

  return (
    <>
      <Box ref={sectionRef} sx={{ py: 6, backgroundColor: "#f8f9fa" }}>
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
            {data?.data.map((dest, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <DestinationCard
                  name={dest.destinationName}
                  image={dest.destinationImage}
                  price={dest.price}
                />
              </Grid>
            ))}
          </Grid>
          {data?.totalPages > 1 && (
            <Box display="flex" justifyContent="center" mt={4}>
              <Pagination
                count={data.totalPages}
                page={page}
                onChange={handleChange}
                color="primary"
              />
            </Box>
          )}
        </Container>
      </Box>
    </>
  );
};

export default DestinationSection;
