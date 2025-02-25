import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getAllShoes } from "../actions/ShoesAction";         // For bringing data from shoesAction.js to here to use
import Shoe from '../Components/Shoe';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import Loading from '../Components/Loading';
import Error from '../Components/Error';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const shoeState = useSelector((state) => state.allShoes);
  const cartstate = useSelector(state => state.cartReducer)
  const [hovered, setHovered] = useState(false);


  useEffect(() => {
    dispatch(getAllShoes());
  }, [])

  return (
    <div className="align-items-center " style={{ backgroundColor: "black", display: 'flex', flexDirection: 'column' }}>

      <div className="row" style={{ margin: '40px', display: 'flex', justifyContent: 'center' }}>
        {
          shoeState.loading ? (
            <Loading />
          ) : shoeState.error ? (
            <Error />
          ) : (
            shoeState.shoes.map(shoe => {
              return <div style={{
                borderRadius: '25px', backgroundColor: "white", width: "auto%", height: "auto", maxWidth: '80%', padding: '10px', marginBottom: '50px ', boxShadow: '0.4px 8px rgba(255, 255, 255, 0.8)',
                transition: 'box-shadow 0.3s ease-in-out',
              }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 12px 48px rgba(255, 255, 255, 1.2)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 255, 255, 0.8)'}>
                <div>
                  <Shoe shoe={shoe} />
                </div>
              </div>
            }))}
      </div>
    </div >
  )
}
