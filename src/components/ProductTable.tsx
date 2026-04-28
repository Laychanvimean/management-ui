import { Edit2, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Product } from '../types';
import { getProducts } from '../api/productlst';

export default function ProductTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
      <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div className="flex items-center gap-4">
          <h2 className="font-semibold text-slate-900">Products</h2>
          <span className="px-2.5 py-0.5 bg-indigo-100 text-indigo-700 text-[10px] font-bold rounded-full">All Items</span>
        </div>
        {/* <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-3 py-1.5 h-9 text-xs font-semibold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
            <Filter className="w-3.5 h-3.5" />
            Filter
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-1.5 h-9 text-xs font-semibold text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
            <Download className="w-3.5 h-3.5" />
            Export
          </button>
        </div> */}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Product</th>
              <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">SKU</th>
              <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">Price</th>
              <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">Stock</th>
              <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Status</th>
              <th className="px-6 py-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading && (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-sm text-slate-500 italic">
                  Loading products…
                </td>
              </tr>
            )}
            {error && !loading && (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-sm text-rose-600 font-medium">
                  Failed to load products: {error}
                </td>
              </tr>
            )}
            {!loading && !error && products.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-sm text-slate-500 italic">
                  No products found.
                </td>
              </tr>
            )}
            {!loading && !error && products.map((product) => (
              <tr key={product.id} className="group hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 overflow-hidden shrink-0">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 leading-tight">{product.name}</p>
                      <p className="text-[11px] font-medium text-slate-500 italic mt-0.5">{product.category}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs font-mono font-medium text-slate-600">{product.sku}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <span className="text-sm font-semibold text-slate-900">${product.price.toFixed(2)}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <span className={`text-sm font-semibold ${product.stock === 0 ? 'text-rose-600' : product.stock < 20 ? 'text-amber-600' : 'text-slate-900'}`}>
                    {product.stock}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold tracking-tight ${
                    product.status === 'IN STOCK' ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/50' :
                    product.status === 'LOW STOCK' ? 'bg-amber-50 text-amber-700 ring-1 ring-amber-200/50' :
                    'bg-rose-50 text-rose-700 ring-1 ring-rose-200/50'
                  }`}>
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-white rounded transition-all">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-white rounded transition-all">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <p className="font-medium italic">
          {loading ? 'Loading…' : `Showing ${products.length} ${products.length === 1 ? 'entry' : 'entries'}`}
        </p>
        <div className="flex items-center gap-1">
          <button className="p-1 text-slate-400 hover:text-slate-900 disabled:opacity-30" disabled>
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center px-2">
            <button className="w-7 h-7 flex items-center justify-center bg-indigo-600 text-white rounded font-bold">1</button>
            <button className="w-7 h-7 flex items-center justify-center hover:bg-slate-100 rounded font-medium">2</button>
            <button className="w-7 h-7 flex items-center justify-center hover:bg-slate-100 rounded font-medium">3</button>
            <span className="px-1 opacity-50">...</span>
            <button className="w-7 h-7 flex items-center justify-center hover:bg-slate-100 rounded font-medium">257</button>
          </div>
          <button className="p-1 text-slate-400 hover:text-slate-900">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
