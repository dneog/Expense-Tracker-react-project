import Expense from "./Expense";
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

describe('Check balence', ()=> {
  test('render Total Balance', () => {
    render(<Expense />);
    
    const welcome = screen.getByText("Total Balance");
    expect(welcome).toBeInTheDocument();
  });

})





