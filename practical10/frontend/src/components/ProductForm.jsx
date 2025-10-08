import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const API_URL = 'http://localhost:3000/api/products';

function ProductForm() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`${API_URL}/${id}`).then(response => {
                setName(response.data.name);
                setPrice(response.data.price);
                setDescription(response.data.description);
                setImageUrl(response.data.imageUrl);
            });
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const productData = { name, price, description, imageUrl };

        if (id) {
            await axios.put(`${API_URL}/${id}`, productData);
        } else {
            await axios.post(API_URL, productData);
        }
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>{id ? 'Edit Product' : 'Add Product'}</h1>
            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
            <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
            <input type="text" placeholder="Image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
            <button type="submit">Save</button>
        </form>
    );
}

export default ProductForm;