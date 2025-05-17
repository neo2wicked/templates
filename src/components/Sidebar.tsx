import React from 'react';
import { Home, Search, BarChart2, HelpCircle, MessageCircle, Bell, Package, Briefcase, User } from 'lucide-react';

const SidebarItem = ({ icon, active = false }: { icon: React.ReactNode; active?: boolean }) => {
  return (
    <div className={`w-full flex justify-center py-4 cursor-pointer transition-colors ${active ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}>
      <div className="relative">
        {icon}
        {active && (
          <div className="absolute -right-1 -top-1 w-2 h-2 bg-blue-500 rounded-full" />
        )}
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="bg-black w-16 flex flex-col items-center border-r border-gray-800">
      <div className="py-4">
        <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
          <span className="text-black font-bold">W</span>
        </div>
      </div>
      
      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center my-2 cursor-pointer text-white">
        <span>+</span>
      </div>
      
      <div className="flex-1 flex flex-col w-full">
        <SidebarItem icon={<Home size={20} />} active />
        <SidebarItem icon={<Search size={20} />} />
        <SidebarItem icon={<BarChart2 size={20} />} />
        <SidebarItem icon={<HelpCircle size={20} />} />
        <SidebarItem icon={<MessageCircle size={20} />} />
      </div>
      
      <div className="flex flex-col w-full mt-auto mb-4">
        <SidebarItem icon={<Bell size={20} />} />
        <SidebarItem icon={<Package size={20} />} />
        <SidebarItem icon={<Briefcase size={20} />} />
        <div className="w-full flex justify-center py-4">
          <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
            <User size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;