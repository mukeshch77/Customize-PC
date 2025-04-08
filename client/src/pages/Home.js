import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold">Welcome to Custom PC Builder</h1>
      <p className="mt-4 text-xl">Create your own personalized PC by selecting the best components.</p>
      <Link to="/builder">
        <button className="bg-blue-600 text-white py-3 px-6 mt-6 rounded">Start Building</button>
      </Link>
    </div>
  );
};

export default Home;
