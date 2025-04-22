import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
    <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold text-blue-600">Home</h2>
    </div>
);

export const About = () => (
    <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold text-green-600">About</h2>
    </div>
);

export const Contact = () => (
    <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold text-purple-600">Contact</h2>
    </div>
);

const NavigationMenu = ({ children }) => {
    return (
        <div>
            <nav className="bg-gray-100 py-4 shadow-md">
                {/* router is added in app.jsx */}
                <ul className="flex justify-center space-x-8 text-lg font-medium text-gray-700">
                    <li><Link to="/Lab-6/question-3" className="hover:text-blue-600 transition">Home</Link></li>
                    <li><Link to="/Lab-6/question-3/about" className="hover:text-green-600 transition">About</Link></li>
                    <li><Link to="/Lab-6/question-3/contact" className="hover:text-purple-600 transition">Contact</Link></li>
                </ul>
            </nav>

            <div className="p-6">
                {children}
            </div>
        </div>
    );
};

export default NavigationMenu;
