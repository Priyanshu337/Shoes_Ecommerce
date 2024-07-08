import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import './Shoe.css'
import { addToCart } from '../../actions/CartAction'

export default function Shoe({ shoe }) {
    const [Quantity, setQuantity] = useState(1)
    const [Size, setSize] = useState("7")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()
    function addtocart() {
        dispatch(addToCart(shoe, Quantity, Size));
        console.log("Hitted to addtocart");
    };

    return (
        <div className="shoe-box " key={shoe._id}>

            <div onClick={handleShow} className='shoe'>
                <h1>{shoe.name}</h1>
                <img src={shoe.image} alt="Shoes print" className="img-fluid" style={{ width: '300px', height: '300px' }} />
            </div>

            <div className="flex-container">
                <div className='w-100 '>
                    <p>Size</p>
                    <select className='form-control' value={Size} onChange={(e) => { setSize(e.target.value) }}>
                        {shoe.size.map(size => {
                            return <option value={size} key={size}>{size}</option >
                        })}
                    </select>
                </div>

                <div className='w-100'>
                    <p>Quantity</p>
                    <select className='form-control' value={Quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1} key={i}>{i + 1}</option>
                        })}
                    </select>
                </div>
            </div>

            <div className="shoe-price">
                <div className='m-1 w-100'>
                    <h1 className='mt-3'>Price : {shoe.prices[0][Size] * Quantity}</h1>
                </div>

                <div className='m-1 w-100' >
                    <button className='cart-btn' onClick={addtocart}> ADD TO CART</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{shoe.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={shoe.image} alt="Shoes print" className="image-fluid" style={{ height: '400px', width: '350px' }}></img>
                    <p>{shoe.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn' onClick={handleClose}>CLOSE </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
