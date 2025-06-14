import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";

export const TestimonialCard = ({ image, name, role, text }) => {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          maxWidth: 345,
          mx: "auto",
          p: 2,
          boxShadow: 2,
          borderRadius: 3,
          textAlign: "left",
          position: "relative",
        }}
      >
        <Avatar
          src={image}
          alt={name}
          sx={{
            width: 100,
            height: 100,
            mb: 1,
            border: "2px solid white",
          }}
        />
        <CardContent>
          <Box color="text.secondary" mb={2}>
            <Typography variant="body2">{text}</Typography>
          </Box>
          <Typography variant="subtitle1" fontWeight="bold">
            {name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {role}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default TestimonialCard;
