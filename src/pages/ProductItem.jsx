import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Rating from "../components/Rating";

function ProductItem() {

    const navigate = useNavigate();

    const { id } = useParams()

    // const [product, setProduct] = useState([])
    const [product, setProduct] = useState({
        rating: {
            rate: 0
        }
    })

    const fetchProductData = () => {
        fetch("https://fakestoreapi.com/products/" + id)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setProduct(data)
            })
    }

    useEffect(() => {
        fetchProductData()
    }, [id])

    // console.log()

    return (
        <div className="product_item">
            <div className="main-info">
                <h1>{product.title}</h1>
                <img src={product.image} alt="" />
                <h2>Price: {product.price}</h2>
                <p>Description: {product.description}</p>
                <Rating rating={product.rating.rate} />
                <button onClick={() => navigate(-1)}>Назад</button>
            </div>
        </div>
    )
}

export default ProductItem