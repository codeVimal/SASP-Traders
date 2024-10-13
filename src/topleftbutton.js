import React, { useState, useRef } from 'react';
import GroceryList from './GroceryList';
import './TopLeftButtonWithList.css'; // Import the CSS file

const TopLeftButtonWithList = () => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [showGroceryList, setShowGroceryList] = useState(true);

  // Refs to target elements on the page for scrolling
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const groceryListRef = useRef(null); // Ref for Grocery List

  const scrollToSection = (sectionRef) => {
    setShowGroceryList(false);
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleShowGroceryList = () => {
    setShowGroceryList(true);
    setIsListVisible(false);

    if (groceryListRef.current) {
      groceryListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Menu Icon positioned at the top-left corner */}
      <img
        src="https://i.ibb.co/MB4nX6C/menu.png"
        alt="Menu"
        className="menu-icon"
        onClick={() => setIsListVisible(!isListVisible)} // Toggle list visibility
      />

      {/* Menu list items */}
      {isListVisible && (
        <ul className="menu-list">
          <li className="menu-item" onClick={() => scrollToSection(section1Ref)}>Home</li>
          <li className="menu-item" onClick={() => scrollToSection(section2Ref)}>About Us</li>
          <li className="menu-item" onClick={handleShowGroceryList}>Grocery List</li>
        </ul>
      )}

      {/* Header Image Section */}
      <div className="image-section">
        <img
          src="https://blogscdn.thehut.net/app/uploads/sites/608/2022/11/Myvegan-Grocery-Shopping-Survey_1669129839.jpg"
          alt="Grocery"
          className="dim-image"
        />
        <h3 className="tagline">BRINGING QUALITY TO YOUR KITCHEN.</h3>
        <button className="explore-button" onClick={handleShowGroceryList}>Explore</button>
      </div>

      {/* Home Section */}
      <div className="break"> <br></br><br></br><br></br></div>
      <div ref={section1Ref} className="home-section">
        <p className='parag'>"Fresh from Farm to Your Table – Trade the Best Fruits & Veggies Today!"</p>
        <p className='parag2'>"Connecting Growers, Traders, and Retailers with the Freshest Produce"</p>
        <img 
          src='https://images.pexels.com/photos/1094544/pexels-photo-1094544.jpeg?auto=compress&cs=tinysrgb&w=600' 
          alt='Fresh Produce' 
          className='img' 
        />
      </div>

      {/* About Section */}
      <div ref={section2Ref} className="section about-section">
        <center><h3 className='head2'>ABOUT US</h3></center>
        <p className='para1'>
          Welcome to SASP TRADERS – your premier destination for fresh, high-quality fruits and vegetables! Our journey began with a simple mission: to connect local growers, traders, and retailers, ensuring that the best produce reaches your table at affordable prices.

          At SASP TRADERS, we believe that everyone deserves access to nutritious food. We partner with local farmers who practice sustainable farming methods, ensuring that every bite you take supports not only your health but also the livelihoods of the hardworking growers in our community.
          <strong>Our Commitment:</strong> <br />
          Quality: We meticulously select our produce to guarantee freshness and flavor. Our rigorous quality checks ensure that only the best fruits and vegetables make it to your plate.

          Sustainability: We are committed to promoting sustainable practices that protect our environment. By sourcing locally, we reduce carbon footprints and support eco-friendly farming initiatives.

          Community: Supporting local agriculture is at the heart of what we do. By choosing SASP TRADERS, you’re not just buying produce; you’re investing in your community and the future of sustainable food systems.

        </p>
      </div>

      {/* Grocery List Section */}
      {showGroceryList && (
        <div ref={groceryListRef} className="grocery-list-section">
          <center><h2 className='head1'>Grocery List</h2></center>
          <GroceryList />
        </div>
      )}

      {/* Contact Section */}
      <div ref={section3Ref} className="contact-section">
        <center><h2 className="head1">CONTACT</h2></center>
        <p className='para'>WhatsApp: +91 9363815151</p>
        <p className='para'>Mail: sasptraders@gmail.com</p>
        <p className='para'>Address: No: 759/41515, Thangavel Nagar, Karur, Tamil Nadu - 639008</p>
      </div>
    </div>
  );
};

export default TopLeftButtonWithList;
