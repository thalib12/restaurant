import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
function Restaurant({item}) {
    
    return (
        <>
       
        {
         item ? (
          <Link to={`restaurant/${item.id}`}>
          <Card style={{ width: '18rem' }}>
          <Card.Img className="my-3 p-3 rounded cards" variant="top" src={item.photograph} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              <p><strong>Cuisine:</strong>{item.cuisine_type}</p>
            </Card.Text>
            <Card.Text>
              <p>{item.neighborhood}</p>
            </Card.Text>
           
          </Card.Body>
        </Card>
         </Link>
         ):null 
       }              
       
       

        </>
    )
}

export default Restaurant
