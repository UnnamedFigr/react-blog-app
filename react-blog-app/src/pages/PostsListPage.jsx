import "../index.css";
import { useGetPosts } from "../hooks/usePosts";
import { Link as RouterLink } from "react-router-dom";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";

function PostsDefaultPage() {
  const { data, isLoading, isError, error } = useGetPosts();
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
  return (
    <Container maxWidth='lg' sx={{ my: 4 }}>
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        sx={{
          boxShadow: "0px 4px 7px 1.5px rgba(190, 160, 26, 0.3)",
          padding: "50px",
          bgcolor: '#eee3b3d5',
        }}
      >
        Blog Posts
      </Typography>

      {/* Featured Article */}
      <Card
        component={RouterLink}
        to="/articles/nvidia-rag"
        sx={{
          mb: 4,
          borderRadius: "8px",
          textDecoration: "none",
          bgcolor: "#eee3b3d5",
          boxShadow: "0px 4px 7px 1.5px rgba(190, 160, 26, 0.3)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.02) translate(0px, -3px)",
            boxShadow: "0 10px 20px rgba(190, 160, 26, 0.35)",
          },
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Chip
            label="Featured Article"
            size="small"
            sx={{ mb: 1.5, bgcolor: "#cba42eff", color: "#fff", fontWeight: 600 }}
          />
          <Typography variant="h6" fontWeight={700} gutterBottom>
            Multi-Agent Self-Corrective RAG Systems with NVIDIA Nemotron
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Simplified breakdown of NVIDIA&apos;s log analysis multi-agent RAG blog post — plus six workflow practices
            you can adopt in your projects today.
          </Typography>
        </CardContent>
      </Card>

      <List>
        {Array.isArray(data) &&
          data.map((post) => (
            <ListItemButton
              key={post.id}
              component={RouterLink}
              to={`/posts/${post.id}`}
              sx={{
                transition: "all 0.3s ease",
                borderRadius: "8px",
                mb: 4,
                py: 2.5,
                bgcolor: '#FFF',
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",

                "&:hover": {
                  transform: "scale(1.05) translate(0px, -5px)",
                  boxShadow: "0 15px 20px rgba(0, 0, 0, 0.3)",
                  backgroundColor: "#cba42eff",

                  ".MuiListItemText-primary": {
                    color: "#ffffff",
                  },
                  ".MuiListItemText-secondary": {
                    color: "rgba(255, 255, 255, 0.75)", // Малко по-прозрачно бяло
                  },
                },
              }}
            >
              <ListItemText
                primary={post.title}
                secondary={post.body.substring(0, 65) + "..."}
              />
            </ListItemButton>
          ))}
      </List>
    </Container>
  );
}
export default PostsDefaultPage;
