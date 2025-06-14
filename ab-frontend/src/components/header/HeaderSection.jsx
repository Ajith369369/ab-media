import { Box, Button, Container, Grid, Typography } from "@mui/material";
import {
  FaHandsHelping,
  FaMapMarkedAlt,
  FaRegCalendarCheck,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRegCalendarCheck size={24} />,
    title: "Easy Booking",
  },
  {
    icon: <FaMapMarkedAlt size={24} />,
    title: "Curated Destinations",
  },
  {
    icon: <FaHandsHelping size={24} />,
    title: "Trusted Support",
  },
];

const HeaderSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        color: "white",
        backgroundImage: `url('https://cdn.neamb.com/-/media/images/neamb/article-pages/travel_vacations/tourist_attractions_that_are_actually_worth_the_trip/6_tourist_attractions_that_are_actually_worth_the_trip_607971905_842x474.jpg')`, // Replace with actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: { xs: "90vh", md: "100vh" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "left",
          maxWidth: "md",
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Discover Your Next <br /> Adventure
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 4, fontWeight: "bold" }}>
          Choose from our curated experiences, customized for every kind of
          traveler.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            width: "180px",
            backgroundColor: "#FFD700",
            color: "#000",
            fontWeight: "bold",
            borderRadius: 6,
          }}
        >
          BOOK NOW
        </Button>
      </Container>

      {/* Feature Bar */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          color: "#000",
          py: 2,
        }}
      >
        <Grid container justifyContent="center">
          {features.map((feature, index) => (
            <Grid
              size={{ xs: 12, sm: 4 }}
              key={index}
              sx={{ textAlign: "center" }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap={1}
              >
                {feature.icon}
                <Typography variant="body1" fontWeight="medium">
                  {feature.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HeaderSection;
