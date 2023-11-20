import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Rating from "../components/Rating"

function Products() {

    const [products, setProducts] = useState([])

    const fetchProductsData = () => {
        fetch("https://fakestoreapi.com/products")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setProducts(data)
            })
    }

    useEffect(() => {
        fetchProductsData()
    }, [])


    return (
        <div>
            {products.length > 0 && (
                <div className="products_list">
                    {products.map(elem => (
                        <Link key={elem.id} to={'/products/' + elem.id}>
                            <div className="products_block">
                                <p>{elem.title}</p>
                                <Rating rating={elem.rating.rate} />
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Products