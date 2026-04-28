export type StockStatus = 'IN STOCK' | 'LOW STOCK' | 'OUT OF STOCK';

export interface Product {
  id: string;
  name: string;
  category: string;
  sku: string;
  price: number;
  stock: number;
  status: StockStatus;
  image: string;
}

export interface Stat {
  label: string;
  value: string | number;
  trend?: string;
  subtitle?: string;
  variant?: 'default' | 'warning' | 'danger';
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Aether Chrono S',
    category: 'Electronics / Wearables',
    sku: 'WH-CH-001',
    price: 249.00,
    stock: 142,
    status: 'IN STOCK',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: '2',
    name: 'SonicWave Pro 2',
    category: 'Electronics / Audio',
    sku: 'AU-SW-202',
    price: 189.00,
    stock: 12,
    status: 'LOW STOCK',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: '3',
    name: 'Terra Trekker 40L',
    category: 'Outdoor / Gear',
    sku: 'OD-TT-40L',
    price: 125.00,
    stock: 0,
    status: 'OUT OF STOCK',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: '4',
    name: 'Nimbus Velocity X',
    category: 'Footwear / Sports',
    sku: 'FT-NV-012',
    price: 145.50,
    stock: 382,
    status: 'IN STOCK',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: '5',
    name: 'Vesta Brew Ultra',
    category: 'Kitchen / Appliances',
    sku: 'KA-VB-772',
    price: 599.00,
    stock: 48,
    status: 'IN STOCK',
    image: 'https://images.unsplash.com/photo-1520970014086-2208d157c9e2?auto=format&fit=crop&q=80&w=200&h=200',
  },
];

export const MOCK_STATS: Stat[] = [
  {
    label: 'TOTAL PRODUCTS',
    value: '1,284',
    trend: '+12% from last month',
    variant: 'default'
  },
  {
    label: 'LOW STOCK ALERT',
    value: '24',
    subtitle: 'Requires attention',
    variant: 'warning'
  },
  {
    label: 'OUT OF STOCK',
    value: '7',
    subtitle: '0.5% of inventory',
    variant: 'danger'
  },
  {
    label: 'AVG. PRICE',
    value: '$84.20',
    subtitle: 'Standard Margin',
    variant: 'default'
  }
];
