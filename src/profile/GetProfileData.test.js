import GetProfileData from "./GetProfileData";
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

describe('Check Profile Details', ()=> {
  test('render Profile Details', () => {
    render(<GetProfileData />);
    
    const welcome = screen.getByText("Profile Details");
    expect(welcome).toBeInTheDocument();
  });

})