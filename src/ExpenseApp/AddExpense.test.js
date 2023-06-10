import AddExpense from './AddExpense'
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

describe('Check Add Transaction', ()=> {
  test('render Add Transaction', () => {
    render(<AddExpense />);
    
    const transaction= screen.getByText("Add Transaction");
    expect(transaction).toBeInTheDocument();
  });

})





