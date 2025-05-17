import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import CategoryDropdown from '../components/CategoryDropdown';
import { categoryMetrics } from '../data/templates';

const TemplatesPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const handleContinue = () => {
    navigate('/dashboard');
  };
  
  const handleSkip = () => {
    navigate('/dashboard');
  };
  
  return (
    <div className="flex flex-col h-screen bg-[#121212] text-white">
      <Header title="Templates" showBackButton />
      
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-3">Choose your template</h2>
            <p className="text-gray-400">
              Select a template category to get started. Each option comes with powerful features and integrations.
            </p>
          </div>
          
          <CategoryDropdown 
            categories={categoryMetrics}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            onSkip={handleSkip}
          />
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;