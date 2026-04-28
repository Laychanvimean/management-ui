import { Stat } from '../types';

export default function StatCard({ stat }: { stat: Stat }) {
  const getVariantStyles = () => {
    switch (stat.variant) {
      case 'warning': return 'bg-amber-50 text-amber-700 ring-1 ring-amber-200';
      case 'danger': return 'bg-rose-50 text-rose-700 ring-1 ring-rose-200';
      default: return 'bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
      <div>
        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
        <h3 className="text-3xl font-semibold text-slate-900 mt-2">{stat.value}</h3>
      </div>
      
      <div className="mt-4">
        {stat.trend ? (
          <p className="text-xs font-medium text-emerald-600">
            {stat.trend}
          </p>
        ) : (
          <p className="text-xs font-medium text-amber-600">
            {stat.subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
