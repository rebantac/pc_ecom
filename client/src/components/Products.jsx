import React from 'react'
import data from '../assets/data.json'
import ProductCard from './ProductCard'
// import {Link} from 'react-router-dom'

function Products() {
    return (
        <div className="container my-3">
            <div className="row">
                <h1>Our Products</h1>
                {data && data.map((element) => {
                    // return <Link to={<ProductDetails key={element.Id}/>}><div className="col-md-3 my-3 mx-3">
                    //     <ProductCard key={element.Id} name={element.Name} price={element.MRP} imageUrl={element.Image} />
                    // </div></Link>
                    return <div className="col-md-3 my-3 mx-3">
                        <ProductCard key={element.Id} name={element.Name} price={element.MRP} imageUrl={element.Image} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Products