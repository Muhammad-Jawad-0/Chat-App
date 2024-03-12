import { useAddProductMutation } from "../RTK-quary";

function AddProduct() {
  const [addPost, result] = useAddProductMutation("products");

  const add = () => {
    const product = {
      title: "test product",
      price: 13.5,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    };

    addPost(product)
  };
  return (
    <div>
      <button onClick={add}>Add Product</button>
    </div>
  );
}

export default AddProduct;
