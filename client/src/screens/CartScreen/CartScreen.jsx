import { useSelector } from 'react-redux';
import { addToCart } from '../../actions/CartAction';
import { useDispatch } from "react-redux";
import { deleteFromCart } from '../../actions/CartAction';



function CartScreen() {
    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems;
    const subTotal = cartItems.reduce((x, item) => x + item.price, 0)
    const dispatch = useDispatch();

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-6" style={{ borderRadius: '15px', boxShadow: '0 .15rem 1.75rem 0 rgba(0, 0, 0, .15)', padding: '10px', margin: '20px auto' }}>
                    <h1>My Cart</h1>
                    {
                        cartItems.map((item) => {
                            return <div className='flex-container'>
                                <div className='text-left m-1'>
                                    <h2>{item.name} [{item.size}]</h2>
                                    <h4>Price: {item.quantity}*{item.prices[0][item.size]} = {item.price}</h4>
                                    <h1 style={{ display: 'inline' }}>Quantity</h1>
                                    <a className='fa fa-plus' aria-hidden="true" onClick={() => {
                                        dispatch(addToCart(item, item.quantity + 1, item.size))
                                    }} ></a>
                                    <b> {item.quantity}</b>
                                    <a className='fa fa-minus' aria-hidden="true" onClick={() => {
                                        dispatch(addToCart(item, item.quantity - 1, item.size))
                                    }}></a>
                                    <hr />
                                </div>

                                <div>
                                    <img src={item.image} alt="Shoes print" className="img-fluid" style={{ borderRadius: '15px', width: "150px", height: "150px", boxShadow: '0 .15rem 1.75rem 0 rgba(0, 0, 0, .15)', padding: '10px', margin: '20px auto' }} />
                                </div>
                                <div className='trash'>
                                    <a className='fa fa-trash' aria-hidden="true" onClick={() => {
                                        dispatch(deleteFromCart(item))
                                    }} ></a>
                                </div>
                            </div>
                        })
                    }
                </div>


                <div className="col-md-4">
                    <h1 className="m-10" style={{ fontSize: "45px" }}>Subtotal: {subTotal} /-</h1>
                </div>
            </div>
        </div>
    );
}

export default CartScreen;
