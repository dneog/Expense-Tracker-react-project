import AddExpense from "./AddExpense";
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom';

describe('Check Add Transaction', () => {
  test('render Add Transaction', () => {
    render(
      <Router>
        <AddExpense />
      </Router>
    );

    const welcome = screen.getByText('Add Transaction');
    expect(welcome).toBeInTheDocument();
  });
});