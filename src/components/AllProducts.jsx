import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import landImage from '../assets/land.png';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "AllProducts"));
        const productsArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsArray);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
  <div className="container py-5">
    <img
      src={landImage} // Using imported image here
      alt="Landscape"
      class="img-fluid p-"
          />
  </div>
    <div className="container py-5">
      <h2 className="text-center mb-4">All Products</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <Link to={`/product/${product.id}`} className="text-decoration-none">
              <div className="card h-100">
                <img src={product.PictureName} alt={product.Name} className="card-img-top" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.Name}</h5>
                  <p className="card-text">Price: ${product.Price}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default AllProducts;
