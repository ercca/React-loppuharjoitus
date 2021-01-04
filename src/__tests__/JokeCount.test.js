import { render, screen, fireEvent } from "@testing-library/react";
import userEvent, {specialChars} from "@testing-library/user-event";
import JokeCount from "../JokeCount";


test('test default count', () => {
    render(<JokeCount />);
    const defcount = screen.getByTestId('count');
    expect(defcount).toBeInTheDocument();
});

test('test smaller than 1', () => {
    render(<JokeCount />);
    const input = screen.getByTestId('count');

    userEvent.type(input, '-5');
    expect(input).toHaveValue('5');
});