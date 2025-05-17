import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const OnboardingPage: React.FC = () => {
  const [customLink, setCustomLink] = useState('');
  const navigate = useNavigate();
  const maxLength = 30;
  
  const handleContinue = () => {
    if (customLink.trim() !== '') {
      navigate('/templates');
    }
  };
  
  return (
    <div className="flex flex-col flex-1 bg-[#121212]">
      <Header title="Onboarding" />
      
      <div className="flex flex-col items-center justify-center flex-1 p-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-3 text-white">Choose your Whop link</h2>
            <p className="text-gray-400">This is the link you send to your customers.</p>
          </div>
          
          <div className="relative mb-6">
            <div className="flex items-center border border-gray-700 rounded-md overflow-hidden bg-gray-900 focus-within:border-gray-500 transition-colors">
              <div className="px-3 py-2 text-gray-400 border-r border-gray-700">
                whop.com/
              </div>
              <input
                type="text"
                value={customLink}
                onChange={(e) => setCustomLink(e.target.value.substring(0, maxLength))}
                className="flex-1 bg-transparent px-3 py-2 outline-none text-white"
                placeholder="yourcompany"
                autoFocus
              />
            </div>
            <div className="absolute right-2 bottom-2 text-xs text-gray-500">
              {customLink.length} / {maxLength}
            </div>
          </div>
          
          <button
            onClick={handleContinue}
            disabled={customLink.trim() === ''}
            className={`w-full py-3 rounded-md font-medium transition-colors ${
              customLink.trim() !== ''
                ? 'bg-blue-500 hover:bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;