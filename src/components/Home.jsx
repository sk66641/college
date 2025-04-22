import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const lab6Questions = [
  { label: 'Question 1', path: '/Lab-6/question-1', to: 'https://github.com/sk66641/college/blob/main/src/components/Lab%206/q1/Counter.jsx' },
  { label: 'Question 2', path: '/Lab-6/question-2', to: 'https://github.com/sk66641/college/blob/main/src/components/Lab%206/q2/TodoList.jsx' },
  { label: 'Question 3', path: '/Lab-6/question-3', to: 'https://github.com/sk66641/college/blob/main/src/components/Lab%206/q3/NavigationMenu.jsx' },
];

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Labs</h1>

      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">Lab 6</h2>
        <ul className="space-y-3">
          {lab6Questions.map((q, index) => (
            <li key={index} className="flex justify-center items-center gap-2.5"
            >
              <Link
                to={q.path} target='_blank' className='px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition'
              >
                {q.label}
              </Link>
              <a href={q.to} target="_blank" rel="noopener noreferrer">
                <FaGithub size={25} className="text-gray-500" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
