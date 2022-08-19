import React, { useContext, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./EditProduct.css";
import { useParams } from "react-router-dom";
import {nftContext} from "../../context/NFTContextProvider";

export default function EditProduct() {
  const { editProduct, productDetails, getOneProduct } =
    useContext(nftContext);

  const [editTitle, setEditTitle] = useState(productDetails.title);
  const [editPrice, setEditPrice] = useState(productDetails.price);
  const [editImage, setEditImage] = useState(productDetails.img);
  const [editCreator, setEditCreator] = useState(
    productDetails.creator
  );
  const [editCategory, setEditCategory] = useState(productDetails.category);

  function handleClick() {
    if (
      !editTitle ||
      !editPrice ||
      !editImage ||
      !editCreator ||
      !editCategory
    ) {
      alert("Введите все инпуты");
      return;
    }
    let product = {
      title: editTitle,
      price: parseInt(editPrice),
      img: editImage,
      creator: editCreator,
      category: editCategory,
    };

    editProduct(id, product);
  }

  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, [id]);

  return (
    <div className="editProduct">
      {productDetails ? (
        <>
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="Product name"
            variant="outlined"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="Price"
            variant="outlined"
            type="number"
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
          />
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="Photo"
            variant="outlined"
            value={editImage}
            onChange={(e) => setEditImage(e.target.value)}
          />
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="Creator"
            variant="outlined"
            value={editCreator}
            onChange={(e) => setEditCreator(e.target.value)}
          />
          <TextField
            sx={{ width: 300 }}
            id="outlined-basic"
            label="Category"
            variant="outlined"
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
          />
          <Button onClick={handleClick} variant="contained" disableElevation>
            Edit Product
          </Button>
        </>
      ) : null}
    </div>
  );
}
