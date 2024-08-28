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
        <>
            <div className='d-flex '>

                <div className="shoe-box" style={{ width: '100%' }} key={shoe._id}>
                    <div className="flex-container">
                        <p style={{ color: "#EBF2FA", fontSize: "60px", fontWeight: "bold", display: 'flex' }}>{shoe.name}</p>
                        <div className='m-1 w-100' style={{ display: 'flex' }}>
                            <p className='mt-3 ' style={{
                                color: 'white', fontSize: '42px', fontFamily: "Barlow", fontStyle: 'italic', fontWeight: '500'
                            }}>$ {shoe.prices[0][Size] * Quantity}</p>
                        </div>

                        <p style={{ color: 'white', display: 'flex', fontSize: '22px', fontWeight: 'bold', maxWidth: '800px' }}>{shoe.description}</p>


                        <div className='w-auto' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <div className='w-auto' style={{ display: 'flex', flexDirection: 'column' }}>

                                <p style={{ color: "#EBF2FA", fontSize: "22px", fontWeight: "bold", margin: "15px", width: 'auto' }}>Size</p>
                                <p style={{ color: "#EBF2FA", fontSize: "22px", fontWeight: "bold", margin: "15px", width: 'auto' }}>Quantity</p>

                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <select className='form-control' value={Size} onChange={(e) => { setSize(e.target.value) }} style={{ textAlignLast: 'center', width: "90%", margin: "15px" }}>
                                    {shoe.size.map(size => {
                                        return <option value={size} key={size}>{size}</option >
                                    })}
                                </select>

                                <select
                                    className="form-control"
                                    value={Quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    style={{
                                        textAlignLast: 'center', width: "90%", margin: "15px"
                                    }}
                                >
                                    {[...Array(10).keys()].map((x, i) => (
                                        <option value={i + 1} key={i}>{i + 1}</option>
                                    ))}
                                </select>
                            </div>

                        </div>



                        <div className='mt-3 w-auto' style={{ display: 'flex' }} >
                            <button className='cart-btn' style={{ backgroundColor: "#E0ACD5", borderRadius: "5px", width: '180px', height: "65px", borderRadius: '4%' }} onClick={addtocart}> ADD TO CART</button>
                        </div>
                    </div>
                </div>

                {/* image of the shoe */}

                <div onClick={handleShow} className='bg-image hover-zoom' style={{ display: 'flex', flexDirection: 'coloumn', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={shoe.image} alt="Shoes print" className="img-fluid " style={{ width: '500px', height: '500px', marginRight: '30px' }} />
                </div>
            </div >
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title >{shoe.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={shoe.image} alt="Shoes print" className="image-fluid" style={{ height: '400px', width: '350px' }}></img>
                    <p>{shoe.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn' onClick={handleClose}>CLOSE </button>
                </Modal.Footer>
            </Modal>

        </>

    )
}
