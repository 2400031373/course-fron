import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

test('shows error when fields are empty', () => {
  render(<BookingForm />);
  fireEvent.click(screen.getByText(/Book Table/i));
  expect(screen.getByRole('alert')).toHaveTextContent(/All fields are required/i);
});

test('shows confirmation when form is filled', () => {
  render(<BookingForm />);
  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Rohit' } });
  fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2025-12-10' } });
  fireEvent.change(screen.getByLabelText(/Table Number/i), { target: { value: '5' } });
  fireEvent.click(screen.getByText(/Book Table/i));
  expect(screen.getByRole('alert')).toHaveTextContent(/Booking confirmed/i);
});
