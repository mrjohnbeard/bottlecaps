import './List.css';
import ListItem from '../ListItem/ListItem';

export default function List({ listItems, handleAddToOrder }) {
    console.log('yellow', listItems)
    const items = listItems.map(item =>
        <ListItem
            listItem={item}
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