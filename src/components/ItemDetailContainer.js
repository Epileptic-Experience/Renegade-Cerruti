import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import MockProductos from "../utils/productosMock";
import { collection, getDocs, query, where } from "firebase/firestore";
import dataBase from "../utils/FirebaseConfig";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  const getProduct = async (productID) => {
    const q = query(collection(dataBase, '0'), where('id', '==', Number(productID)))
    const productSnapshot = await getDocs(q)
    const productList = productSnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      return product;
    })
    console.log("productList", productList);
    return productList;
  }


  useEffect(() => {
    // const productfilter = MockProductos.find((product) => product.id == id);
    // setProduct(productfilter)
    getProduct(id).then((res) => {
      console.log("res", res);
      setProduct(res[0])
    }).catch((e) => {
      const productfilter = MockProductos.find((product) => product.id == id);
      setProduct(productfilter)
    });
  }, [id])
  return (
    <div>
      <ItemDetail data={product} />
    </div>
  )

}


export default ItemDetailContainer