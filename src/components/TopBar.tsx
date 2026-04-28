import { Search, Bell, Settings, HelpCircle, User } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between shrink-0">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Search inventory..."
            className="w-full h-10 pl-10 pr-4 bg-slate-50 border-transparent rounded-lg text-sm focus:bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
        </button>
        <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors">
          <Settings className="w-5 h-5" />
        </button>
        <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors">
          <HelpCircle className="w-5 h-5" />
        </button>
        <div className="h-8 w-px bg-slate-200 mx-2"></div>
        <button className="flex items-center gap-3 pl-2 h-10 rounded-lg hover:bg-slate-50 transition-colors">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-900 leading-none">Alex Rivera</p>
            <p className="text-[11px] text-slate-500 mt-1 font-medium italic">Store Manager</p>
          </div>
          <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" 
              alt="User"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </button>
      </div>
    </header>
  );
}
