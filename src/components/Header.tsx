import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showBackButton = false }) => {
  const navigate = useNavigate();
  
  return (
    <header className="flex justify-between items-center p-5 border-b border-gray-800">
      <div className="flex items-center gap-4">
        {showBackButton && (
          <button 
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
        )}
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
      
      <button className="px-4 py-2 bg-black hover:bg-gray-900 text-white rounded-md border border-gray-700 transition-colors">
        Contact sales
      </button>
    </header>
  );
};

export default Header;