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
describe('Check Summery', ()=> {
  test('render summery', () => {
    render(<Expense />);
    
    const sum = screen.getByText("Summery");
    expect(sum).toBeInTheDocument();
  });

})
describe('Check Income', ()=> {
  test('render Income', () => {
    render(<Expense />);
    
    const sum = screen.getByText("Income");
    expect(sum).toBeInTheDocument();
  });

})

describe('Check Expense', ()=> {
  test('render Expense', () => {
    render(<Expense />);
    
    const sum = screen.getByText("Expense");
    expect(sum).toBeInTheDocument();
  });

})





