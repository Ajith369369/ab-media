import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useTourPackages } from "../../hooks/useTourPackages";
import TourPackageCard from "./TourPackageCard";

export const TourPackageSection = () => {
  const { data, isLoading, error } = useTourPackages();
  console.log("useTourPackages data: ", data);

  if (isLoading) return <CircularProgress />;
  if (error) return <div>Error loading tour packages</div>;

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
            {data.map((tour, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <TourPackageCard
                  name={tour.tourPackageName}
                  image={tour.tourPackageImage}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default TourPackageSection;
