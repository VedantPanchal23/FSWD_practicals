import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:3000/api/products';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const response = await axios.get(API_URL);
        setProducts(response.data);
    };

    const deleteProduct = async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        fetchProducts();
    };

    return (
        <div>
            <h1>Product List</h1>
            <Link to="/add">Add New Product</Link>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td>
                                <img src={product.imageUrl || 'https://via.placeholder.com/100'} alt={product.name} width="100" />
                            </td>
                            <td>{product.name}</td>
                            <td>RS.{product.price}</td>
                            <td>{product.description}</td>
                            <td>
                                <Link to={`/edit/${product._id}`}>Edit</Link>
                                <button onClick={() => deleteProduct(product._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;