import './List.css';
import ListItem from '../ListItem/ListItem';

export default function List({ listItems, handleAddToOrder }) {
    const items = listItems.map(item =>
        <ListItem
            Item={item}
            handleAddToOrder={handleAddToOrder}
            key={item._id}
        />
    );
    return (
        <div>
            <main className="List">
                {items}
            </main>
        </div>
    );
}