import './ListItem.css';

export default function ListItem({ listItem, handleAddToOrder }) {
    return (
        <div className="ListItem">
            <div className="year"> {listItem.year} </div>
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