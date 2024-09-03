
export interface Product {
    id: number;
    name: string;
    slug: string;
    price: number;
    image: string;
    description: string;
    category: ProductCategory;
    createdAt: Date;
}

interface ProductCategory {
    id: number;
    name: string;
    slug: string;
}
