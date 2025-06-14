import { Box, Card, CardContent, Typography } from "@mui/material";

export const DestinationCard = ({ image, name, price }) => {
  return (
    <>
      <Card
        sx={{
          height: '100%', // Fill the parent grid cell height
          borderRadius: 3,
          boxShadow: 3,
          overflow: "hidden",
          transition: "transform 0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
          },
        }}
      >
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{ width: "100%", height: 250, objectFit: "cover", borderRadius: 3 }}
        />
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="primary"
            sx={{ textTransform: "uppercase" }}
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Starting From <b style={{ color: "#00A6A6" }}>{price}</b>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default DestinationCard;
