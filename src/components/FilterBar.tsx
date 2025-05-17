import React from 'react';

interface FilterBarProps {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex overflow-x-auto pb-2 mb-6 gap-2 no-scrollbar">
      <button
        className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
          activeCategory === null
            ? 'bg-blue-500 text-white'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
        }`}
        onClick={() => onCategoryChange(null)}
      >
        All Templates
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
            activeCategory === category
              ? 'bg-blue-500 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;