import React, { useState } from 'react';

const groceries = [
  { name: 'Onion', image: 'https://www.jiomart.com/images/product/original/590003515/onion-1-kg-product-images-o590003515-p590003515-1-202408070949.jpg?im=Resize=(420,420)' },
  { name: 'Cabbage', image: 'https://d3awvtnmmsvyot.cloudfront.net/api/file/GGosbWO9SYyGxvDaciZf/convert?fit=max&w=570&cache=true' },
  { name: 'Carrot', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST2_WkbpC28JXfCpWXQAbV8aGPeljk96GOHg&s' },
  { name: 'Brinjal', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT2Y6QoSH14yQ9vsQ1dySd5SOqE9zv7YDrEyQ7oX1J0cYteG8mBmPRavKHhhi2xCa7EXmzVjdElhcZ4gEOOjMgLpBsqHrtS-xp3P09nlA' },
  { name: 'Cucumber', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DLsz6HRbqrW7yR2bvvq6nHWxxwwBKbFEqA&s' },
  { name: 'Spinach', image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT7RhH4SUrGPTanm1Dl2eRQLPULQXn3LIXRMXb3FngkgKDbQNUq' },
];

const GroceryList = () => {
  const [selectedGrocery, setSelectedGrocery] = useState(null);

  const handleGroceryClick = (grocery) => {
    setSelectedGrocery(grocery);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {groceries.map((grocery) => (
        <div
          key={grocery.name}
          style={{ position: 'relative', margin: '10px', cursor: 'pointer' }}
          onClick={() => handleGroceryClick(grocery.name)}
        >
          <img src={grocery.image} alt={grocery.name} style={{ width: '150px', height: '150px' }} />
          {selectedGrocery === grocery.name && (
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: 'white',
                fontSize: '18px',
              }}
            >
              {grocery.name}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default GroceryList;
