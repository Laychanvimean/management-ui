import { Boxes, ShoppingCart, LifeBuoy, LayoutDashboard } from 'lucide-react';
import { motion } from 'motion/react';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, active: false },
  { id: 'products', label: 'Products', icon: Boxes, active: true },
  { id: 'orders', label: 'Orders', icon: ShoppingCart, active: false },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-white border-r border-slate-200 flex flex-col shrink-0">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <Boxes className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900 overflow-hidden whitespace-nowrap">MyManagement</span>
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {/* <div className="px-3 mb-2">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Inventory</p>
          <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">System Management</p>
        </div> */}
        
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              item.active 
                ? 'bg-indigo-50 text-indigo-700' 
                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <item.icon className={`w-5 h-5 ${item.active ? 'text-indigo-600' : 'text-slate-400'}`} />
            {item.label}
            {item.active && (
              <motion.div 
                layoutId="active-indicator"
                className="ml-auto w-1 h-5 bg-indigo-600 rounded-full"
              />
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 mt-auto border-t border-slate-100">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
          <LifeBuoy className="w-5 h-5 text-slate-400" />
          Support
        </button>
      </div>
    </aside>
  );
}
