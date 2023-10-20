import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';
test('render initial  counter  value 0', () => {
    render(<Counter />);
    const counterValue = screen.getByText('0');
    expect(counterValue).toBeInTheDocument();
})
test('render increase  Btn ', () => {
    render(<Counter />);
    const IncreaseBtn = screen.getByRole('button', { name: '+' })
    expect(IncreaseBtn).toBeInTheDocument();
    expect(IncreaseBtn).toBeEnabled();

});
test('render Counter value  when click increase btn ', () => {
    render(<Counter />);
    const counterValue = screen.getByText('0');
    expect(counterValue).toBeInTheDocument();
    const IncreaseBtn = screen.getByRole('button', { name: '+' })
    expect(IncreaseBtn).toBeInTheDocument();
    expect(IncreaseBtn).toBeEnabled();
    fireEvent.click(IncreaseBtn);
    expect(counterValue).toHaveTextContent('1')
});
test('render decrease Btn', () => {
    render(<Counter />);
    const decreaseBtn = screen.getByRole('button', { name: '-' })
    expect(decreaseBtn).toBeInTheDocument();
    expect(decreaseBtn).toBeEnabled();

});
test('render counter value  when click on decrease btn ', () => {
    render(<Counter />);
    const counterValue = screen.getByText('0');
    expect(counterValue).toBeInTheDocument('0');
    const decreaseBtn = screen.getByRole('button', { name: '-' })
    expect(decreaseBtn).toBeInTheDocument();
    expect(decreaseBtn).toBeEnabled();

    fireEvent.click(decreaseBtn);
    expect(counterValue).toHaveTextContent('0')
});