import { useState } from 'react';

const ShoppingForm = ({ generateList }) => {
    const [groceryItems, setGroceryItems] = useState({
        item1: '',
        item2: '',
        item3: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setGroceryItems(currentItems => ({
            ...currentItems,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(groceryItems);
        generateList(groceryItems);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Item 1
                <input 
                    type="text"
                    name="item1"
                    value={groceryItems.item1} 
                    onChange={handleChange}
                />
            </label>
            <label>
                Item 2
                <input 
                    type="text"
                    name="item2"
                    value={groceryItems.item2} 
                    onChange={handleChange}
                />
            </label>
            <label>
                Item 3
                <input 
                    type="text"
                    name="item3"
                    value={groceryItems.item3} 
                    onChange={handleChange}
                />
            </label>
            <button type="sumit">Make Shopping List</button>
        </form>
    )
}

export default ShoppingForm;