import React from 'react';
import { ChevronDown } from 'lucide-react';
import { CategoryMetrics } from '../types';

interface CategoryDropdownProps {
  categories: CategoryMetrics[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  onSkip: () => void;
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  onSkip,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const activeCategoryData = activeCategory
    ? categories.find((c) => c.category === activeCategory)
    : null;

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-700 flex items-center justify-between text-left hover:border-gray-600 transition-colors"
      >
        <span className="font-medium">{activeCategory || 'Select a category'}</span>
        <ChevronDown
          size={20}
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-gray-900 rounded-lg border border-gray-700 shadow-xl max-h-[300px] overflow-y-auto">
          {categories.map((category) => (
            <button
              key={category.category}
              className={`w-full px-4 py-3 text-left hover:bg-gray-800 transition-colors ${
                activeCategory === category.category ? 'bg-gray-800' : ''
              }`}
              onClick={() => {
                onCategoryChange(category.category);
                setIsOpen(false);
              }}
            >
              <div className="font-medium">{category.category}</div>
              <p className="text-sm text-gray-400">{category.description}</p>
            </button>
          ))}
        </div>
      )}

      {activeCategoryData && (
        <div className="mt-6 space-y-6">
          {activeCategoryData.stats && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 bg-gray-900 rounded-lg border border-gray-700">
              <div className="space-y-1">
                <div className="text-2xl font-bold">{activeCategoryData.stats.grossRevenue}</div>
                <div className="text-sm text-gray-400">Gross Revenue</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold">{activeCategoryData.stats.conversionRate}</div>
                <div className="text-sm text-gray-400">Conversion Rate</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold">{activeCategoryData.stats.newUsers}</div>
                <div className="text-sm text-gray-400">New Users</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold">{activeCategoryData.stats.mrr}</div>
                <div className="text-sm text-gray-400">MRR</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold">{activeCategoryData.stats.arr}</div>
                <div className="text-sm text-gray-400">ARR</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold">{activeCategoryData.stats.pageVisits}</div>
                <div className="text-sm text-gray-400">Page Visits</div>
              </div>
            </div>
          )}

          <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
            <h3 className="font-medium text-xl mb-4">Features & Integrations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeCategoryData.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {activeCategoryData.automations && (
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
              <h3 className="font-medium text-xl mb-4">n8n Automations</h3>
              <div className="space-y-6">
                {activeCategoryData.automations.map((automation, index) => (
                  <div key={index} className="space-y-3">
                    <h4 className="font-medium text-lg">{automation.title}</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-400">
                        <span className="font-medium">Trigger:</span>
                        <span>{automation.trigger}</span>
                      </div>
                      {automation.conditions && (
                        <div className="space-y-1">
                          <span className="font-medium text-gray-400">Conditions:</span>
                          <ul className="list-disc list-inside space-y-1 text-gray-300">
                            {automation.conditions.map((condition, i) => (
                              <li key={i}>{condition}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="space-y-1">
                        <span className="font-medium text-gray-400">Actions:</span>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                          {automation.actions.map((action, i) => (
                            <li key={i}>{action}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="flex justify-between mt-6">
        <button
          onClick={onSkip}
          className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
        >
          Skip for now
        </button>
        <button
          onClick={() => onCategoryChange(activeCategory)}
          className={`px-6 py-2 rounded-md font-medium transition-colors ${
            activeCategory
              ? 'bg-blue-500 hover:bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-400'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default CategoryDropdown;