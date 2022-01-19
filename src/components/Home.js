import React, {useState,useEffect} from 'react'
import {Col, Row} from 'react-bootstrap'
import Restaurants from './Restaurants'
//import {useState,useEffect} from 'react'
import {listRestaurants} from '../actions/restaurantAction'
import {useDispatch,useSelector} from 'react-redux'

function Home() {

    const dispatch=useDispatch();

    const restaurantReducer=useSelector(state => state.restaurantReducer)

    const {restaurants} = restaurantReducer

   // const [hotels,setHotels] = useState([])

    useEffect(() => {

        dispatch(listRestaurants())


       
//         const fetchData = async () => {
//             await fetch('/restaurants.json')
//             .then((res) => res.json())
//             .then((data) => setHotels(data.restaurants))

//         }

// fetchData();


    }, [dispatch])
console.log("data is...", restaurants);

    return (
        <>
        {restaurants ? (
            <Row>
                {restaurants.map(item => ( 
                    <Col key={item.id} sm={12} md={8} lg={6} xl={3}>
                        <Restaurants item={item}/>
                    </Col>
                ))}
            </Row>
        ) : null}

     </>
    )
}

export default Home


