import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import About from './Pages/About';
import AboutIconLink from "./components/AboutIconLink";

import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  const title = "Feedback UI";
  
  return (
      <FeedbackProvider>
        <Router>
        <Header text={title} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={
              <>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />
              </>
            }>
            </Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </div>
        <AboutIconLink />
        </Router>
      </FeedbackProvider>
  );
}

export default App;
