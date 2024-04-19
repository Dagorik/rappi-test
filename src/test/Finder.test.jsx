import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react';
import Finder from '../components/Finder';

describe('Finder Component', () => {
  it('renders input element and responds to changes', () => {
    const handleSearchMock = vi.fn();
    const searchValue = 'Complete the task';


    render(<Finder onChange={handleSearchMock} value={searchValue} />);    

    const inputElement = screen.getByTestId('input-finder');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe(searchValue);

    fireEvent.change(inputElement, { target: { value: 'New search' } });

    expect(handleSearchMock).toHaveBeenCalledWith('New search');
  });
});
