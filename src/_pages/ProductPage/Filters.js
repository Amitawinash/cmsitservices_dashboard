import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import {Button, Grid} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import AddProduct from "./AddProduct";
import {useDispatch, useSelector} from "react-redux";
import {showProductModal} from "../../_actions";

function BasicPagination() {
  return (
    <>
      <Pagination size={"small"} count={10} color="primary"/>
    </>
  );
}

function Filters() {
  const dispatch = useDispatch();
  const {product} = useSelector(state => state.productReducer);

  const handleAddProduct = () => showProductModal(dispatch)({}, true);

  return (
    <Grid container spacing={3} style={{paddingBottom: 6}}
          direction="row"
          justify="space-around"
          alignItems="center">
      <Grid item xs={12} md={8}>
        {product._id &&
        <AddProduct/>
        }
        {!product._id &&
        <AddProduct/>
        }
        <Button size={"small"} variant="contained" color="primary" onClick={handleAddProduct}>
          <AddIcon/> Add Product
        </Button>
      </Grid>
      <Grid item xs={12} md={4}>
        {/*<BasicPagination/>*/}
      </Grid>
    </Grid>
  );
}

export {Filters};