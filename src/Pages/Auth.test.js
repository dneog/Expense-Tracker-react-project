import Auth from "./Auth";
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import store from '../Store/store'

describe('Check Login ', ()=> {
    test('render Login', () => {
      render(
        <Router>
        <Provider store={store} >
        <Auth />
        </Provider>
        
      </Router>);
      
      const home = screen.getByText("Login");
      expect(home).toBeInTheDocument();
    });

    test('render SignUp', () => {
      render(
        <Router>
        <Provider store={store} >
        <Auth />
        </Provider>
        
      </Router>);
      
      const home = screen.getByText("SignUp");
      expect(home).toBeInTheDocument();
    });
   

})