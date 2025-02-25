import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap';
import { addShoes } from '../actions/ShoesAction';
import { useDispatch } from 'react-redux';
export default function AddNewShoes() {

    const dispatch = useDispatch();
    const [shoesName, setShoesName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [sizes, setSizes] = useState([]);
    const [prices, setPrices] = useState({});
    const [imageUrl, setImageurl] = useState('');

    // const shoes = { shoesName, category, description, sizes, prices, imageUrl }
    // console.log(shoes)

    const handleSizeSelect = (e) => {
        const selectedSize = e.target.value;
        if (!sizes.includes(selectedSize)) {
            setSizes([...sizes, selectedSize]);
            setPrices({ ...prices, [selectedSize]: "" });
        }
    };

    const handlePriceChange = (size, price) => {
        setPrices({ ...prices, [size]: price });
    };


    const removeSize = (size) => {
        setSizes(sizes.filter((s) => s !== size));
        const updatedPrices = { ...prices };
        delete updatedPrices[size];
        setPrices(updatedPrices);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(addShoes(shoesName, category, description, sizes, prices, imageUrl));

    };

    return (
        <div>
            <h2>Add new Shoes</h2>

            <div className="mb-3 d-flex align-items-center justify-content-center">
                <Form>
                    <div className='form'>
                        <label> Name : </label>
                        <input type='text' placeholder='Enter name of shoes' value={shoesName} onChange={(e) => { setShoesName(e.target.value) }} />
                        <br />

                        <label>Description: </label>
                        <input type='text' placeholder='Enter description of the shoes' value={description} onChange={(e) => { setDescription(e.target.value) }} />
                        <br />

                        <label>Category: </label>
                        <input type='text' placeholder='Enter category of the shoes' value={category} onChange={(e) => { setCategory(e.target.value) }} />
                        <br />

                        <label>ImageURL: </label>
                        <input type='text' placeholder='Enter imageUrl' value={imageUrl} onChange={(e) => { setImageurl(e.target.value) }} />
                        <br />

                        <label htmlFor="sizeSelect" className="form-label">
                            Select Size
                        </label>
                        <select
                            id="sizeSelect"
                            className="form-select"
                            onChange={handleSizeSelect}
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Choose a size
                            </option>
                            {[...Array(10)].map((_, i) => {
                                const size = (5 + i).toString();
                                return (
                                    <option key={size} value={size}>
                                        {size}
                                    </option>
                                );
                            })}
                        </select>

                        {sizes.map((size) => (
                            <div key={size} className="mb-3 d-flex align-items-center">
                                <span className="me-2">Size {size}:</span>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter price"
                                    value={prices[size]}
                                    onChange={(e) => handlePriceChange(size, e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="btn btn-danger ms-2"
                                    onClick={() => removeSize(size)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}

                        <button onClick={handleSubmit} className="btn btn-primary mt-4">
                            Submit
                        </button>
                    </div>

                </Form>
            </div>
        </div >
    )
}
