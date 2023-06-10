import Home from "./Home";
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import store from '../Store/store'

describe('Check welcome ', ()=> {
    test('render welcome', () => {
      render(
        <Router>
        <Provider store={store} >
        <Home />
        </Provider>
        
      </Router>);
      
      const home = screen.getByText("Welcome to Expense Tracker");
      expect(home).toBeInTheDocument();
    });
    test('render Complete Now', () => {
      render(
        <Router>
        <Provider store={store} >
        <Home />
        </Provider>
        
      </Router>);
      
      const home = screen.getByText("Complete Now");
      expect(home).toBeInTheDocument();
    });
    test('render Your Profile is Incomplete.', () => {
      render(
        <Router>
        <Provider store={store} >
        <Home />
        </Provider>
        
      </Router>);
      
      const home = screen.getByText("Your Profile is Incomplete.");
      expect(home).toBeInTheDocument();
    });
  
  })