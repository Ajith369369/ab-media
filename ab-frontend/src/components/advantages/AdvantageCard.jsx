import { Box, Typography, Icon } from "@mui/material";

export const AdvantageCard = ({ icon: Icon, title, description }) => {
  return (
    <>
      <Box textAlign="center" px={2}>
        <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 2,
          }}
        >
          <Icon size={40} color="#00A6A6" />
        </Box>
        <Typography variant="h6" fontWeight="bold" color="#fefefe" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="#fefefe">
          {description}
        </Typography>
      </Box>
    </>
  );
};

export default AdvantageCard;
