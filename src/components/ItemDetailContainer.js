import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import MockProductos from "../utils/productosMock";
import {  getDoc, doc } from "firebase/firestore";
import dataBase from "../utils/FirebaseConfig";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

const getProduct = async (productID)=>{
  getDoc(doc(dataBase, "0", productID))
  .then((res)=>{
    const product = {id: res.id, ...res.data()}
    setProduct(product)
  })
}

  useEffect(() => {
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