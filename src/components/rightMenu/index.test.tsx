import { fireEvent, render, screen } from '@testing-library/react';
import RightMenu from './index';

describe('RightMenu Component', () => {
  it('Right Menu initially should be invisible', () => {
    render(<RightMenu links={[]}/>);
    const rightMenu = screen.getByTestId('right-menu');
    expect(rightMenu).toHaveClass('right-[-300px]');
  });

  it('Right Menu should be visible after click button once', () => {
    render(<RightMenu links={[]}/>);
    const button = screen.getByTestId('show-right-menu');
    fireEvent.click(button);
    const rightMenu = screen.getByTestId('right-menu');
    expect(rightMenu).toHaveClass('right-0');
  });

  it('Right Menu should be invisible after click button twice', () => {
    render(<RightMenu links={[]}/>);
    const button = screen.getByTestId('show-right-menu');
    fireEvent.click(button);
    fireEvent.click(button);
    const rightMenu = screen.getByTestId('right-menu');
    expect(rightMenu).toHaveClass('right-[-300px]');
  });
});