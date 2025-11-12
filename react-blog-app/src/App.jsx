import { Routes, Route } from 'react-router-dom'
import PostsDefaultPage from './pages/PostsListPage'
import PostsDetailtPage from './pages/PostsDetailPage'
function App() {
  return (
      <div>
      <Routes>
        <Route path="/" element={<PostsDefaultPage/>} />
        <Route path="posts/:postId" element={<PostsDetailtPage />} />
      </Routes>
        
      </div>
  )
}

export default App
