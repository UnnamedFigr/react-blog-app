import { Link as RouterLink } from "react-router-dom";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const sections = [
  {
    heading: "What Is This About?",
    body: "NVIDIA published a technical blog on building a Log Analysis system that uses multiple AI agents working together to automatically search, evaluate, and answer questions about application logs. The system can catch its own mistakes and retry — making it more reliable without human intervention.",
  },
  {
    heading: "Core Concepts — Simplified",
    items: [
      {
        primary: "Multi-Agent Architecture",
        secondary:
          "Instead of one large AI doing everything, specialised agents handle individual tasks: one retrieves relevant log snippets, another ranks them, another grades quality, and a final one generates the answer. Each agent has a single responsibility — just like React components.",
      },
      {
        primary: "Retrieval-Augmented Generation (RAG)",
        secondary:
          "The AI does not rely solely on its training data. It first fetches real log lines that are relevant to the question (using both keyword search with BM25 and semantic search with FAISS vector embeddings) and then uses that context to produce an accurate answer.",
      },
      {
        primary: "Self-Corrective Loop",
        secondary:
          "After generating an answer, a grading agent scores it. If the score is too low, a query-transformation agent rewrites the question and the whole retrieval–grading–generation cycle runs again — automatically, without human input.",
      },
      {
        primary: "Directed Graph Orchestration (LangGraph)",
        secondary:
          "The workflow is modelled as a directed graph where nodes are agents and edges encode decision logic (proceed, loop, or branch). This makes the flow easy to visualise, extend, and debug.",
      },
      {
        primary: "Hybrid Retrieval",
        secondary:
          "Combining lexical (BM25) and semantic (FAISS + NeMo embeddings) retrieval gives better recall and precision than either method alone — critical when log formats are inconsistent.",
      },
    ],
  },
  {
    heading: "Workflow Practices You Can Adopt",
    practices: [
      {
        label: "1 — Single-Responsibility Modules",
        detail:
          "Split complex logic into small, focused functions or hooks — one for fetching, one for transforming, one for error handling. This mirrors the multi-agent approach where each agent owns exactly one job.",
        tag: "Architecture",
      },
      {
        label: "2 — Retry & Self-Correction Logic",
        detail:
          "Wrap API calls in retry logic. If a request fails or returns unexpected data, automatically retry with a modified payload or a back-off delay. In React you can do this with React Query's `retry` and `retryDelay` options, or write a custom hook.",
        tag: "Error Handling",
      },
      {
        label: "3 — Layered Data Fetching (Hybrid Sources)",
        detail:
          "Do not rely on a single data source. Combine a fast cache (React Query / localStorage) with a remote API call, falling back gracefully when one source is unavailable — the same way the system combines BM25 and vector search.",
        tag: "Data Fetching",
      },
      {
        label: "4 — Quality Gates Before Rendering",
        detail:
          "Before rendering data, run a validation step (e.g., check required fields exist, normalise types). Only pass data downstream once it meets quality criteria — analogous to the grading agent that decides whether the retrieved context is good enough.",
        tag: "Validation",
      },
      {
        label: "5 — Graph-Inspired State Machines",
        detail:
          "Model complex UI flows (multi-step forms, wizards, loading states) as explicit state machines using libraries like XState or a plain `useReducer`. Make transitions visible so every path through the UI is intentional and testable.",
        tag: "State Management",
      },
      {
        label: "6 — Prompt / Template Separation",
        detail:
          "Store configurable strings — API endpoints, feature flags, display labels — outside of component logic (e.g., in a config file or environment variables). The NVIDIA system stores LLM prompt templates in JSON files for the same reason: it keeps core logic clean and makes tuning easy.",
        tag: "Configuration",
      },
    ],
  },
];

function PracticeCard({ label, detail, tag }) {
  return (
    <Card
      variant="outlined"
      sx={{
        mb: 2,
        borderRadius: "8px",
        borderColor: "rgba(203, 164, 46, 0.4)",
        transition: "box-shadow 0.2s ease",
        "&:hover": {
          boxShadow: "0 4px 12px rgba(203, 164, 46, 0.25)",
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1 }}>
          <Typography variant="subtitle1" fontWeight={600}>
            {label}
          </Typography>
          <Chip label={tag} size="small" sx={{ bgcolor: "#eee3b3d5", fontWeight: 500 }} />
        </Box>
        <Typography variant="body2" color="text.secondary">
          {detail}
        </Typography>
      </CardContent>
    </Card>
  );
}

function NvidiaRagArticlePage() {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Button component={RouterLink} to="/" sx={{ mb: 3 }} variant="outlined">
        &larr; Back to all posts
      </Button>

      {/* Header */}
      <Box
        sx={{
          boxShadow: "0px 4px 7px 1.5px rgba(190, 160, 26, 0.3)",
          padding: { xs: "24px", sm: "40px" },
          bgcolor: "#eee3b3d5",
          borderRadius: "8px",
          mb: 4,
        }}
      >
        <Chip label="Featured Article" sx={{ mb: 2, bgcolor: "#cba42eff", color: "#fff", fontWeight: 600 }} />
        <Typography variant="h4" component="h1" gutterBottom fontWeight={700}>
          Multi-Agent Self-Corrective RAG Systems
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Key concepts from NVIDIA&apos;s Nemotron blog post — simplified and applied to your workflow
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Source:{" "}
          <a
            href="https://developer.nvidia.com/blog/build-a-log-analysis-multi-agent-self-corrective-rag-system-with-nvidia-nemotron/"
            target="_blank"
            rel="noopener noreferrer"
          >
            developer.nvidia.com
          </a>
        </Typography>
      </Box>

      {/* Section 1 — What is it */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" fontWeight={600} gutterBottom>
          {sections[0].heading}
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          {sections[0].body}
        </Typography>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Section 2 — Core Concepts */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" fontWeight={600} gutterBottom>
          {sections[1].heading}
        </Typography>
        <List disablePadding>
          {sections[1].items.map((item) => (
            <ListItem
              key={item.primary}
              alignItems="flex-start"
              disableGutters
              sx={{ mb: 1.5, flexDirection: "column" }}
            >
              <ListItemText
                primary={
                  <Typography variant="subtitle1" fontWeight={600}>
                    {item.primary}
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, lineHeight: 1.7 }}>
                    {item.secondary}
                  </Typography>
                }
              />
              <Divider sx={{ width: "100%", mt: 1.5 }} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Section 3 — Workflow Practices */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" fontWeight={600} gutterBottom>
          {sections[2].heading}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Each practice below maps directly to a concept from the NVIDIA article and can be applied immediately in a
          JavaScript / React project.
        </Typography>
        {sections[2].practices.map((p) => (
          <PracticeCard key={p.label} {...p} />
        ))}
      </Box>
    </Container>
  );
}

export default NvidiaRagArticlePage;
