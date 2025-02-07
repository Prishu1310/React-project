import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

function NonVeg()
{
    let dispatch = useDispatch();
    let nonVegItems = useSelector((state) => state.products.nonVeg);

    let finalItems = nonVegItems.map((item, index) => (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center" key={index}>
            <div className="card h-100">
                <img src={item.source} className="card-img-top" alt={item.name} style={{ objectFit: 'cover', height: '200px' }} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.para}</p>
                    <p className="card-text">
                        <strong>Price: &#8377;{item.price}</strong>
                    </p>
                    <button
                        className="btn btn-primary mt-auto"
                        onClick={() => dispatch(addToCart(item))}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            <section id="non-veg-items" className="container my-5">
                <h1 className="text-center mb-4">Non-Veg Items</h1>
                <div className="row">{finalItems}</div>
            </section>

            <footer className="bg-dark text-white py-4 text-center">
                <p>&copy; 2025 Food Delivery Service. All rights reserved.</p>
            </footer>
        </>
    );
}

export default NonVeg;
