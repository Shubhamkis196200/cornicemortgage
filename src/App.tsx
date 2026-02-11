import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ToolsIndex from './pages/ToolsIndex';
import ToolPage from './pages/ToolPage';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tools" element={<ToolsIndex />} />
          <Route path="/tools/:slug" element={<ToolPage />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
