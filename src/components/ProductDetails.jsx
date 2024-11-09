import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the product ID from URL
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const ProductDetails = () => {
  const { productId } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const docRef = doc(db, "AllProducts", productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching product details: ", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Product Details</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={product.PictureName} alt={product.Name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h3>{product.Name}</h3>
          <p>{product.Description}</p>
          <p><strong>Price:</strong> ${product.Price}</p>
          {/* Add more details if available */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
