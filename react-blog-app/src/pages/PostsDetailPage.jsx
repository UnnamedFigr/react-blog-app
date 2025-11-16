import { useGetPostDetails } from "../hooks/usePostDetails";
import { useParams, Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function PostsDetailPage() {
  const { postId } = useParams();
  const { data: post, isLoading, isError, error } = useGetPostDetails(postId);

  if (isError) {
    console.error(error.message);
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Alert severity="error">
          <strong>Error!</strong> Post could not load.
          <br />
          Details: {error.message}
        </Alert>
        <Button component={RouterLink} to="/">
          Get back to main page
        </Button>
      </Container>
    );
  }
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  if (!post) {
    <div>
      <h1>No such posts</h1>
    </div>;
  }
  return (
    // 'Container' постига "средния сектор"
    // 'my: 4' добавя разстояние отгоре и отдолу (постига "горния" сектор)
    <Container maxWidth="sm" sx={{ my: 4 }}>
      {/* Превръщаме 'Link' в 'Button' за по-добър вид */}
      <Button component={RouterLink} to="/" sx={{ mb: 2 }} variant="outlined">
        &larr; Обратно към всички публикации
      </Button>

      <Card
        variant="elevation"
        sx={{
          maxWidth: "500px",
          p: "25px",
          borderRadius: "8px",
          mb: 1.5,
          boxShadow: "1px 4px 6px rgba(182, 125, 55, 0.25)",
        }}
      >
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            {post.title}
          </Typography>
          <br />
          {/* Стилизиран текст на публикацията
            ВАЖНО: 'whiteSpace: "pre-line"' запазва празните редове
            от API-то, за да изглежда като истински параграфи!
          */}
          <Typography variant="body1" sx={{ whiteSpace: "pre-line", mt: 2 }}>
            {post.body}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
export default PostsDetailPage;
