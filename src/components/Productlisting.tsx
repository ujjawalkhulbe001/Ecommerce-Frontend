import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

interface Product {
  sku_id: string;
  name: string;
  description: string;
  price: number;
  images: { url: string }[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();

  const handleNavigation = (id: any) => {
    router.push(`/Detailpage?productId=${id}`);
  };

  return (
    <div
      className="max-w-xs rounded overflow-hidden shadow-lg m-4 cursor-pointer"
      onClick={() => handleNavigation(product._id)}
    >
      <img className="w-auto" src={product?.images[0].url} alt={product.name} />
      <div className="px-0 py-0">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="mt-2 text-gray-600">${product.price}</p>
      </div>
    </div>
  );
};

const ProductListing: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currPage, setCurrPage] = useState(1);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, [currPage]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/Product/Products?page=${currPage}`,
        {
          headers: { authorization: localStorage.getItem("token") },
        },
      );
      console.log(response.data.data.totalPages);
      setPages(response.data.data.totalPages);
      setProducts(response.data.data.products);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 gap-4 justify-center">
        {products.map((product, idx) => {
          return (
            <ProductCard product={product} key={product._id}></ProductCard>
          );
        })}
      </div>

      <div className="flex justify-center mt-4 gap-6 border-black border-solid">
        {Array.from({ length: pages }, (_, i) => {
          return i + 1;
        }).map((val, idx) => {
          return <button onClick={() => setCurrPage(val)}>{val}</button>;
        })}
      </div>
    </div>
  );
};

export default ProductListing;
