import Item from "./Item";
import './ItemList.css';
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import MockProductos from "../utils/productosMock";
import { collection, getDocs, query, where } from "firebase/firestore";
import dataBase from "../utils/FirebaseConfig";

const ItemList = () => {

    const [products, setProducts] = useState([])
    const { category } = useParams()

    const getProductosFirebase = async () => {
        const productSnapshot = await getDocs(collection(dataBase, "0"))

        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList;
    }

    const getProductsCategory = async (Category) => {
        const q = query(collection(dataBase, '0'), where('category', '==', category))
        const categorySnapshot = await getDocs(q)
        const categoryList = categorySnapshot.docs.map((doc) => {
            let product = doc.data();
            product.id = doc.id;
            return product;
        })
        return categoryList;
    }

    useEffect(() => {
        setProducts([]);
        if (category === undefined) {
            getProductosFirebase()
                .then((res) => {
                    setProducts(res)
                })
                .catch(() => {
                    console.log('ERROR');
                })

        } else {
            getProductsCategory(category)
                .then((res) => {
                    setProducts(res);
                })
        }
    }, [category]);

    return (
        <div className="itemListContainer">

            {
                products.map((Producto) => {
                    const { id, tittle, price, img } = Producto
                    return (
                        <div key={id}>
                            <Item
                                tittle={tittle}
                                price={price}
                                Img={img}
                                id={id} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ItemList