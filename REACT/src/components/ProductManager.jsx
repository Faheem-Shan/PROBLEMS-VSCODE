import React, { useReducer, useState } from "react";

//These represent the three action types used to modify the products list.
const ADD = 'ADD';
const UPDATE = 'UPDATE';
const DELETE = 'DELETE';
//reducer function
function reducer(state, action) {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];


        //UPDATE: maps over products, replacing the matching product by id with the updated one.
        case UPDATE:
            return state.map((product) =>
                product.id === action.payload.id ? action.payload : product
            );

        //DELETE: returns a filtered array without the product with the given id.
        case DELETE:
            return state.filter((product) => product.id !== action.payload);


        default:
            return state; //current products array.
    }
}

function App() {
    const [products, dispatch] = useReducer(reducer, []);

    //product name and price inputs
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [editId, setEditId] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !price) return;

        if (editId === null) {
            // Add new product with a unique id
            dispatch({ type: ADD, payload: { id: Date.now(), name, price } });
        } else {
            // Update existing product
            dispatch({ type: UPDATE, payload: { id: editId, name, price } });
            setEditId(null);  // Reset edit mode
        }

        setName('');
        setPrice('');
    }

    // Prepare product data for editing
    function handleEdit(product) {
        setName(product.name);
        setPrice(product.price);
        setEditId(product.id);
    }

    // Delete product by id
    function handleDelete(id) {
        dispatch({ type: DELETE, payload: id });
    }
    return (
        <div style={{ padding: 20 }}>
            <h2>Product Manager</h2>

            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Product name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ marginRight: 10 }}
                />
                <input
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button type="submit" style={{ marginLeft: 10 }}>
                    {editId === null ? 'Add' : 'Update'}
                </button>
            </form>

            <ul style={{ marginTop: 20 }}>
                {products.map((product) => (
                    <li key={product.id} style={{ marginBottom: 10 }}>
                        {product.name} - ${product.price}{' '}
                        <button onClick={() => handleEdit(product)} style={{ marginLeft: 10 }}>
                            Edit
                        </button>
                        <button onClick={() => handleDelete(product.id)} style={{ marginLeft: 5 }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
