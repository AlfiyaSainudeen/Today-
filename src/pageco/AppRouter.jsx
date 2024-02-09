import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" component={Page1} />
          
          <Route path="/page2" component={Page2} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;