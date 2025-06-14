import { Box, Container, Grid, Typography } from "@mui/material";
import { FaBookOpen, FaClock, FaNetworkWired, FaWallet } from "react-icons/fa";
import AdvantageCard from "./AdvantageCard";

const advantages = [
  {
    icon: FaClock,
    title: "Save Time",
    description: "No More Switching For Packages Or Plans.",
  },
  {
    icon: FaWallet,
    title: "Save Money",
    description: "Compare, Negotiate, And Choose The Best.",
  },
  {
    icon: FaNetworkWired,
    title: "Trusted Network",
    description: "A Trusted Network Of 7000+ Travel Agents",
  },
  {
    icon: FaBookOpen,
    title: "Multiple Options",
    description: "Itineraries & Travel Tips From Trusted Agents",
  },
];

export const AdvantageSection = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#6DCFC7", py: 8 }}>
        <Container>
          <Typography
            variant="h4"
            fontWeight="bold"
            align="center"
            color="#fefefe"
            gutterBottom
          >
            Our Advantages
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="#fefefe"
            sx={{ mb: 6 }}
          >
            You can rely on our experience and the quality of services we
            provide.
            <br />
            Here are other reasons to book tours at Treat Holidays
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {advantages.map((adv, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <AdvantageCard {...adv} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AdvantageSection;
