import { useEffect, useState } from "react";
import { IProduct } from "../../model/IProduct";
import ProductList from "./ProductList";
import { CircularProgress } from "@mui/material";

export default function CatalogPage() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch("http://localhost:5291/api/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .finally(() => setLoading(false));

    }, []);

    if(loading) return <CircularProgress />
    
    return (
        <ProductList products={products} />
    );
}