import { Product } from "./product";

export interface ProductsResponse {
    products: Product[];
    links:    Links;
    meta:     Meta;
}

interface Links {
    first: string;
    last:  string;
    prev:  null;
    next:  string;
}

interface Meta {
    current_page: number;
    from:         number;
    last_page:    number;
    links:        Link[];
    path:         string;
    per_page:     number;
    to:           number;
    total:        number;
}

 interface Link {
    url:    null | string;
    label:  string;
    active: boolean;
}
