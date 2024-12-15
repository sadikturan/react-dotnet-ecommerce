import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../model/IProduct";
import requests from "../../api/requests";
import { RootState } from "../../store/store";

export const fetchProducts = createAsyncThunk<IProduct[]>(
    "catalog/fetchProducts",
    async () => {
        return await requests.Catalog.list();
    }
)

export const fetchProductById = createAsyncThunk<IProduct, number>(
    "catalog/fetchProductById",
    async (productId) => {
        return await requests.Catalog.details(productId);
    }
)

const productsAdapter = createEntityAdapter<IProduct>();

const initialState = productsAdapter.getInitialState({
    status: "idle",
    isLoaded: false
});

export const catalogSlice = createSlice({
    name: "catalog",
    initialState,
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = "pendingFetchProducts";
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            productsAdapter.setAll(state, action.payload);
            state.isLoaded = true;
            state.status = "idle";
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            state.status = "idle";
        });
        builder.addCase(fetchProductById.pending, (state) => {
            state.status = "pendingFetchProductById";
        });
        builder.addCase(fetchProductById.fulfilled, (state, action) => {
            productsAdapter.upsertOne(state, action.payload);
            state.status = "idle";
        });
        builder.addCase(fetchProductById.rejected, (state) => {
            state.status = "idle";
        });
    })
})

export const {
    selectById: selectProductById,
    selectIds: selectProductIds,
    selectEntities: selectProductEntities,
    selectAll: selectAllProducts,
    selectTotal: selectTotalProducts
} = productsAdapter.getSelectors((state: RootState) => state.catalog);