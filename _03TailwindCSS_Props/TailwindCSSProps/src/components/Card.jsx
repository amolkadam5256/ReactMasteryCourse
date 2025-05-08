import React from 'react';

const Card = ({ name, age, title, description, image, buttonText }) => {
  return (
    <div>
      <h2>
        Hello, my name is {name} and I am {age} years old.
      </h2>

      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          {buttonText && (
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
