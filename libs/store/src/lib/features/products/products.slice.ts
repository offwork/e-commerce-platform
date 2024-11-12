import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const PRODUCTS_FEATURE_KEY = 'products';

/*
 * Update these interfaces according to your requirements.
 */
export interface ProductsEntity {
  id: number;
}

export interface ProductsState extends EntityState<ProductsEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error?: string | null;
}

export const productsAdapter = createEntityAdapter<ProductsEntity>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchProducts())
 * }, [dispatch]);
 * ```
 */
export const fetchProducts = createAsyncThunk<ProductsEntity[]>(
  'products/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getProductss()`;
     * Right now we just return an empty array.
     */
    return Promise.resolve([]);
  }
);

export const initialProductsState: ProductsState =
  productsAdapter.getInitialState({
    loadingStatus: 'not loaded',
    error: null,
  });

export const productsSlice = createSlice({
  name: PRODUCTS_FEATURE_KEY,
  initialState: initialProductsState,
  reducers: {
    add: productsAdapter.addOne,
    remove: productsAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state: ProductsState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchProducts.fulfilled,
        (state: ProductsState, action: PayloadAction<ProductsEntity[]>) => {
          productsAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchProducts.rejected, (state: ProductsState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const productsReducer = productsSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(productsActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const productsActions = productsSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllProducts);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = productsAdapter.getSelectors();

export const getProductsState = (rootState: {
  [PRODUCTS_FEATURE_KEY]: ProductsState;
}): ProductsState => rootState[PRODUCTS_FEATURE_KEY];

export const selectAllProducts = createSelector(getProductsState, selectAll);

export const selectProductsEntities = createSelector(
  getProductsState,
  selectEntities
);
