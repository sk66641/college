import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">Counter: {count}</h2>
                <div className="flex space-x-4">
                    <button onClick={() => setCount(count - 1)}
                        className="px-4 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300">
                        Decrease
                    </button>
                    <button onClick={() => setCount(count + 1)}
                        className="px-4 py-2 bg-green-400 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-green-500 transition duration-300">
                        Increase
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Counter;
