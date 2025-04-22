import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const lab6Questions = [
  { label: 'Question 1', path: '/Lab-6/question-1' },
  { label: 'Question 2', path: '/Lab-6/question-2' },
  { label: 'Question 3', path: '/Lab-6/question-3' },
];

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">My Labs</h1>
      
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Lab 6</h2>
        <ul className="space-y-3">
          {lab6Questions.map((q, index) => (
            <li key={index}>
              <Link
                to={q.path} target='_blank'
                className="flex items-center justify-between px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                {q.label}
                <FaGithub className="text-gray-500" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
