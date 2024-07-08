import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllShoes } from "../../actions/ShoesAction";         // For bringing data from shoesAction.js to here to use
import Shoe from '../../Components/Shoe/Shoe';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './HomeScreen.css'


export default function HomeScreen() {
  const dispatch = useDispatch();
  const shoeState = useSelector((state) => state.allShoes);

  // const { shoes, error, loading } = shoeState || { shoes: [], error: null, loading: false };

  useEffect(() => {
    dispatch(getAllShoes());
  }, [])

  return (
    <div className="align-items-center">
      <div className="row">
        {
          shoeState.loading ? (
            <h1>Loading...</h1>
          ) : shoeState.error ? (
            <h1>Something Went Wrong</h1>
          ) : (
            shoeState.shoes.map(shoe => {
              return <div className="col-md-3" style={{ borderRadius: '15px', width: "550px", height: "650px", boxShadow: '0 .15rem 1.75rem 0 rgba(0, 0, 0, .15)', padding: '10px', margin: '20px auto' }}>
                <div>
                  <Shoe shoe={shoe} />
                </div>
              </div>
            }))}
      </div>
    </div >
  )
}
