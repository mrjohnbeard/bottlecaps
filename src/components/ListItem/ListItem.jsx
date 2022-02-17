export default function ListItem({ listItem, handleAddToOrder }) {
    return (
        <div className="ListItem">
            <img className="images" src={listItem.image} className="AllCaps" />

            <div className="name"> {listItem.name} </div>
            <div className="buy">

                <span> ${listItem.price.toFixed(2)} </span>

                <button className="btsmall" onClick={() => handleAddToOrder(listItem._id)}>
                    Add
                </button>
            </div>
        </div>
    )
}