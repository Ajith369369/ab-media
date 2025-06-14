import { Box, Container, Grid, Pagination, Typography } from "@mui/material";
import { useRef, useState } from "react";
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
  {
    name: "Anderson",
    role: "Manager / Firm",
    text: "Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text commonly used to demonstrate the visual form of a document or typeface without relying on meaningful content.",
    image: "https://i.pravatar.cc/40?img=4",
  },
];

export const TestimonialSection = () => {
  const [page, setPage] = useState(1);
  const limit = 3;
  const totalPages = Math.ceil(testimonials.length / limit);
  const sectionRef = useRef(null);

  const handleChange = (event, value) => {
    event.preventDefault(); // prevent default behavior, i.e., unwanted scroll to top
    setPage(value);
    sectionRef.current?.scrollIntoView({ behavior: "smooth" }); // scroll into view on page change
  };

  // Slice the data for current page
  const paginatedTestimonials = testimonials.slice(
    (page - 1) * limit,
    page * limit
  );

  return (
    <>
      <Container ref={sectionRef} sx={{ py: 5 }}>
        <Typography variant="h4" fontWeight="bold" align="left" gutterBottom>
          Testimonials
        </Typography>
        <Grid container spacing={4}>
          {paginatedTestimonials.map((item, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
              <TestimonialCard {...item} />
            </Grid>
          ))}
        </Grid>
        {totalPages > 1 && (
          <Box display="flex" justifyContent="center" mt={4}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </Box>
        )}
      </Container>
    </>
  );
};

export default TestimonialSection;
