import React from 'react';
import { addPhone, getPhones, updatePhone, deletePhone } from '../firebaseCrud';
import { useEffect, useState } from 'react';
import logout from '../logout';

function Home() {
  const [phones, setPhones] = useState([]);

  // Fetch all phones
  const fetchPhones = async () => {
    const data = await getPhones();
    setPhones(data);
  };

  useEffect(() => {
    fetchPhones();
  }, []);

  // Add a new phone
  const handleAdd = async () => {
    await addPhone({
      name: 'Pixel 9 Pro',
      brand: 'Google',
      price: 999,
      storage: '256GB',
      stock: 10,
      image: 'https://example.com/pixel9.jpg'
    });
    fetchPhones();
  };

  // Update first phone
  const handleUpdate = async (id) => {
    await updatePhone(id, { price: 899 });
    fetchPhones();
  };

  // Delete first phone
  const handleDelete = async (id) => {
    await deletePhone(id);
    fetchPhones();
  };
  return (
    <div>
      <h1>Phone List</h1>
      <button onClick={handleAdd}>Add Phone</button>
      <ul>
        {phones.map((phone) => (
          <li key={phone.id}>
            <h2>
              {phone.name} - ${phone.price}
            </h2>
            <button onClick={() => handleUpdate(phone.id)}>Update Price</button>
            <button onClick={() => handleDelete(phone.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button
        onClick={logout}
        className='mt-4 px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900'
      >
        Logout
      </button>
    </div>
  );
}

export default Home;
