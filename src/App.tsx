/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Plus } from 'lucide-react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import StatCard from './components/StatCard';
import ProductTable from './components/ProductTable';
import { MOCK_STATS } from './types';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      <Sidebar />
      
      <main className="flex-1 flex flex-col min-w-0 overflow
      -hidden">
        <TopBar />
        
        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-slate-900 tracking-tight"
              >
                Product Inventory
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-slate-500 mt-1 font-medium italic"
              >
                Manage your global product catalog and stock levels.
              </motion.p>
            </div>
            
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold text-sm shadow-lg shadow-indigo-500/20 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Add Product
            </motion.button>
          </header>
{/* 
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (idx + 2) }}
              >
                <StatCard stat={stat} />
              </motion.div>
            ))}
          </section> */}

          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex-1"
          >
            <ProductTable />
          </motion.section>
        </div>
      </main>
    </div>
  );
}
