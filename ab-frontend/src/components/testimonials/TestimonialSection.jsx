import { Container, Grid, Typography } from "@mui/material";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO / Company",
    text: "Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or typeface without relying on meaningful content.",
    image: "https://i.pravatar.cc/40?img=1",
  },
  {
    name: "Jane Smith",
    role: "Manager / Business",
    text: "Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or typeface without relying on meaningful content.",
    image: "https://i.pravatar.cc/40?img=2",
  },
  {
    name: "James Wilson",
    role: "Director / Firm",
    text: "Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or typeface without relying on meaningful content.",
    image: "https://i.pravatar.cc/40?img=3",
  },
];

export const TestimonialSection = () => {
  return (
    <>
      <Container sx={{ py: 5 }}>
        <Typography variant="h4" fontWeight="bold" align="left" gutterBottom>
          Testimonials
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((item, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
              <TestimonialCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default TestimonialSection;
