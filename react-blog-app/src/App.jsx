import { Routes, Route } from "react-router-dom";
import PostsDefaultPage from "./pages/PostsListPage";
import PostsDetailtPage from "./pages/PostsDetailPage";
import NvidiaRagArticlePage from "./pages/NvidiaRagArticlePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PostsDefaultPage />} />
        <Route path="posts/:postId" element={<PostsDetailtPage />} />
        <Route path="/articles/nvidia-rag" element={<NvidiaRagArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
