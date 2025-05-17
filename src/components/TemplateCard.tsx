import React from 'react';
import { Template } from '../types';

interface TemplateCardProps {
  template: Template;
  onClick: (template: Template) => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, onClick }) => {
  return (
    <div 
      className="group relative cursor-pointer overflow-hidden rounded-lg bg-gray-900 transition-all hover:scale-[1.02] hover:shadow-xl"
      onClick={() => onClick(template)}
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img 
          src={template.image} 
          alt={template.title}
          className="h-full w-full object-cover transition-all group-hover:scale-105 group-hover:opacity-90"
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-white">{template.title}</h3>
          {template.popular && (
            <span className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-medium text-white">
              Popular
            </span>
          )}
        </div>
        
        <p className="mt-1 text-sm text-gray-400">{template.description}</p>
        
        <div className="mt-3 flex items-center">
          <span className="inline-block rounded-full bg-gray-800 px-2 py-0.5 text-xs text-gray-300">
            {template.category}
          </span>
        </div>

        {template.metrics && (
          <div className="mt-4 grid grid-cols-2 gap-2">
            {template.metrics.map((metric, index) => (
              <div key={index} className="text-center p-2 bg-gray-800 rounded">
                <div className="text-sm font-medium text-gray-300">{metric.value}</div>
                <div className="text-xs text-gray-500">{metric.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateCard;