import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';


const JokeGenerator = () => {
  const [joke, setJoke] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://api.chucknorris.io/jokes/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const getJoke = async (category) => {
    try {
      const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
      setJoke(response.data.value);
      setModalOpen(true);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <div className="joke-generator">
      <h1>Chuck Norris Joke Generator</h1>
      <div className="category-buttons">
        {categories.map(category => (
          <button key={category} onClick={() => getJoke(category)}>
            {category}
          </button>
        ))}
      </div>
      {modalOpen && <Modal joke={joke} closeModal={closeModal} />}
    </div>
  );
}

export default JokeGenerator;
