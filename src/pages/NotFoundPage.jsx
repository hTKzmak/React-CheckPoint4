import { useNavigate } from "react-router-dom";

function NotFoundPage() {

    const navigate = useNavigate();

    return (
        <div className="not_found">
            <p>Not found page</p>
            <button onClick={() => navigate('/products')}>Перейти к товарам</button>
        </div>
    )
}

export default NotFoundPage;