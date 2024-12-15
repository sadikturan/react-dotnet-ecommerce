import { useEffect } from "react";
import ProductList from "./ProductList";
import { CircularProgress } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchProducts, selectAllProducts } from "./catalogSlice";

export default function CatalogPage() {
    const products = useAppSelector(selectAllProducts);
    const { status, isLoaded } = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

    useEffect(() => {
      if(!isLoaded)
        dispatch(fetchProducts());  
    }, [isLoaded]);

    if(status === "pendingFetchProducts") return <CircularProgress />
    
    return (
        <ProductList products={products} />
    );
}