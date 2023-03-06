import { Typography, Container, Box } from "@mui/material";

export default function RecommendationPage() {
  return (
    <Box display="flex" justifyContent="center" paddingY="100px">
      <Container sx={{ maxWidth: "750px" }} maxWidth={false}>
        <Typography variant="h2">
          Here are your curated recommendations!
        </Typography>
      </Container>
    </Box>
  );
}
