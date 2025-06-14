import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { useTourPackages } from "../../hooks/useTourPackages";
import TourPackageCard from "./TourPackageCard";

export const TourPackageSection = () => {
  const [page, setPage] = useState(1);
  const limit = 3;
  const sectionRef = useRef(null);
  const { data, isLoading, error } = useTourPackages(page, limit);
  console.log("useTourPackages data: ", data);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" py={6}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) return <div>Error loading tour packages</div>;

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
            Top-Selling Tour Packages of India
          </Typography>
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Stay updated with our latest news and happenings through Informe.
          </Typography>

          <Grid container spacing={4}>
            {data?.data.map((tour, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <TourPackageCard
                  name={tour.tourPackageName}
                  image={tour.tourPackageImage}
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

export default TourPackageSection;
