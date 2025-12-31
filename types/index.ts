export type Product = {
  id: string;
  name: string;
  code: string;
  description: string;
  stock_quantity: number;
  images: string[];
  createdAt: string;
  updatedAt: string;
  pricing: {
    price_per_unit: number;
    unit_label: string;
  };
  deal: Deal;
  view: number;
  category: Category;
};

export type Deal = {
  id: string;
  name: string;
  discount_percentage: number;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
};

export type Pagination = {
  total_items: number;
  total_pages: number;
  current_page: number;
  per_page: number;
  has_next_page: boolean;
  has_previous_page: boolean;
};

export type DealList = {
  id: string;
  name: string;
  code: string;
  description: string;
  stock_quantity: number;
  images: string[];
  pricing: {
    price_per_unit: number;
    unit_label: string;
  };
  deal: Deal;
  view: number;
  category: Category;
};
