import './ListItem.css';

export default function ListItem({ listItem, handleAddToOrder }) {
    console.log('blue', listItem);
    return (
        <div className="ListItem">
            <div className="year"> {listItem.year} </div>
            <img className="img" src={listItem.image} />
            <div className="name"> {listItem.name} </div>

            <div className="buy">
                <span> ${listItem.price.toFixed(2)} </span>

                <button className="btn-sm" onClick={() => handleAddToOrder(listItem._id)}>
                    Add
                </button>
            </div>
        </div>
    )
}