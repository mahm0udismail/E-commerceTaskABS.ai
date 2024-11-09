import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { Link } from 'react-router-dom'; 
import landImage from '../assets/land.png';
import CustomNavbar from './CustomNavbar';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [Categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "AllProducts"));
        const productsArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsArray);
        console.log(productsArray)
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "categore"));
        const productsArray = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCategories(productsArray);
        console.log(productsArray)
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  return (  
    <>
    <CustomNavbar/>
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
        {Categories.map((product) => (
          <div key={product.id} className="col">
            

              <div className="card h-100">
                <img src={product.cat} alt={product.name} className="card-img-top" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                </div>
              </div>
            
          </div>
        ))}
      </div>
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
    
    







    <div class="container py-5">
    <div class="row justify-content-center">
        <div class="col-12 col-md-6 col-lg-5">
            <div class="card shadow-sm p-4">
                <div class="card-body">
                    <form>
                        <div class="mb-3">
                            <label for="fullName" class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="fullName" required />
                        </div>
                        <div class="mb-3">
                            <label for="emailAddress" class="form-label">Email Address</label>
                            <input type="email" class="form-control" id="emailAddress" required />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" required />
                        </div>
                        <button type="submit" class="btn btn-primary w-100 mb-3">Sign Up</button>
                    </form>

                    <div class="text-center">
                        <p>Or</p>
                        <button class="btn btn-outline-danger w-100 mb-3">SIGN UP WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="d-none d-md-block col-md-1 border-start mx-3"></div>

        <div class="col-12 col-md-6 col-lg-5">
            <div class="card shadow-sm p-4">
                <h2>Get More Benefits by Sign Up & Join Mejiwoo Community!</h2>
                <div class="card-body">
                    <div class="text-center mt-4">
                        <h5><strong>FREE Special Gift to a New Member</strong></h5>
                        <ul class="list-unstyled">
                            <li><strong>Get 2x JIWOO Points</strong> to purchase items</li>
                            <li><strong>Get special voucher code every month</strong></li>
                            <li><strong>Claim Voucher Discount Up To 50%</strong></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



















<footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md- mt-md-0 mt-3">
                <h5 className="text-uppercase">Footer Content</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">About Us</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" class="text-dark text-decoration-none">News</a></li>
                    <li><a href="#!" class="text-dark text-decoration-none">Official Store</a></li>
                    <li><a href="#!" class="text-dark text-decoration-none">Company</a></li>
                    <li><a href="#!" class="text-dark text-decoration-none">Careers</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Get Help</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" class="text-dark text-decoration-none">FAQ</a></li>
                    <li><a href="#!" class="text-dark text-decoration-none">Shipping</a></li>
                    <li><a href="#!" class="text-dark text-decoration-none">Shipping</a></li>
                    <li><a href="#!" class="text-dark text-decoration-none">Shipping</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
    <h5 className="text-uppercase">Follow Us</h5>
    <ul className="list-unstyled">
        <li><a href="#!" className="text-dark text-decoration-none">Facebook</a></li>
        <li><a href="#!" className="text-dark text-decoration-none">Twitter</a></li>
        <li><a href="#!" className="text-dark text-decoration-none">Instagram</a></li>
        <li><a href="#!" className="text-dark text-decoration-none">LinkedIn</a></li>
    </ul>
</div>

        </div>
    </div>



</footer>






    </>
  );
};

export default AllProducts;











