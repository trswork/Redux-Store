import React, { useEffect } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';

const [state, dispatch] = useStoreContext();

const { currentCategory } = state;

const { loading, data } = useQuery(QUERY_PRODUCTS);

useEffect(() => {
  if (data) {
    dispatch({
      type: UPDATE_PRODUCTS,
      products: data.products
    });
  }
}, [data, dispatch]);

function filterProducts() {
  if (!currentCategory) {
    return state.products;
  }

  return state.products.filter(product => product.category._id === currentCategory);
}