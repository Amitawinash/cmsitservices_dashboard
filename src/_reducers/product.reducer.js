import {productConstants} from '../_constants';

const defaultProductState = {
  products: [], product: {}, showEditModal: false,
  errorInAddProduct: false, busyInAddProduct: false,
  errorInEditProduct: false,
  fetchingProducts: false, errorFetchingProducts: false
};

export function productReducer(state = defaultProductState, action) {
  switch (action.type) {

    case productConstants.getAll:
      return {
        ...state,
        products: [...action.payload]
      };

    case productConstants.addOne:
      return {
        ...state,
        products: [action.payload, ...state.products]
      }

    case productConstants.editOne:
      return {
        ...state,
        products: state.products.map(product => {
          if (product._id === action.payload._id){
            return action.payload;
          }
          return product
        })
      }

    case productConstants.showEditModal:
      return {
        ...state,
        product: {...action.payload.product},
        showEditModal: action.payload.showEditModal
      };

    case productConstants.busyInAddProduct:
      return {
        ...state,
        busyInAddProduct: action.payload
      };

    case productConstants.errorInAddProduct:
      return {
        ...state,
        errorInAddProduct: action.payload
      };
    case productConstants.fetchingProducts:
      return {
        ...state,
        fetchingProducts: action.payload
      };
    case productConstants.errorFetchingProducts:
      return {
        ...state,
        errorFetchingProducts: action.payload
      };

    default:
      return state
  }
}