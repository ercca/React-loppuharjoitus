import { render, screen } from "@testing-library/react";
import JokesDiv from '../JokesDiv';

test('show empty message to user', () => {
    render(<JokesDiv />);
    const emptytxt = screen.getByText(/no jokes fetched./i);
    expect(emptytxt).toBeInTheDocument();
});