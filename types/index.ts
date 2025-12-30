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
