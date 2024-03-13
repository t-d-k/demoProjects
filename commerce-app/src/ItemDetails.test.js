import { render, screen } from '@testing-library/react';
import ItemDetails from './ItemDetails';


function doAdd(i) {
    
}

test('renders item details', () => {
    const index=2;

    render(<ItemDetails index={index} onAdd={doAdd} />);

    const linkElement = screen.getByText(/Handcrafted in Germany, the Pelikan M800 Souverän/i);
    expect(linkElement).toBeInTheDocument();
});