import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductCard from "../ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    // console.log(searchParams);
    getProducts();
    // console.warn(products);
  }, [searchParams]);

  useEffect(() => {
    getProducts();
  }, []);

  //! pagination
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const itemsPerPage = 5;
  const count = Math.ceil(products.length / itemsPerPage);

  const currentData = () => {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  };
  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {currentData().map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </Box>
      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination count={count} page={page} onChange={handleChange} />
      </Stack>
    </>
  );
};

export default ProductList;
