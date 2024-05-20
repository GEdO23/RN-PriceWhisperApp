import React, { createContext, useContext, useState } from "react";

/* NAVIGATION */
import { useNavigation } from "@react-navigation/native";
import { ProductsScreenNavigationProps } from "~/navigation/props";

/* FIREBASE */
import { auth, firestore } from "utils/firebase";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";
import { UserContext } from "./UserProvider";
import { Alert } from "react-native";
import { ProductProps } from "~/screens/App/ProductList/Product";


export const ProductsContext = createContext({
    productName: "",
    /** 
     * `function` that modifies the `productName` 
     * @param value The new `productName` which will replace the old one
     * */
    setProductName: (value: string) => { },

    productPrice: 0,
    /** 
     * `function` that modifies the `productPrice` 
     * @param value The new `productPrice` which will replace the old one
     * */
    setProductPrice: (value: number) => { },

    productCode: "",
    /** 
     * `function` that modifies the `productCode` 
     * @param value The new `productCode` which will replace the old one
     * */
    setProductCode: (value: string) => { },

    productDescription: "",
    /** 
     * `function` that modifies the `productDescription` 
     * @param value The new `productDescription` which will replace the old one
     * */
    setProductDescription: (value: string) => { },

    productStock: 0,
    /** 
     * `function` that modifies the `productStock` 
     * @param value The new `productStock` which will replace the old one
     * */
    setProductStock: (value: number) => { },

    /**
     * `function` that handles the creation of a new product
     */
    handleCreateNewProduct: () => { },

    /**
     * `function` that handles the edit request to a product
     */
    handleEditProduct: () => { },

    /**
     * `function` that handles the delete request to a product
     */
    handleDeleteProduct: () => { },

    /**
     * `void` `function` that handles the collection and updating of user data
     */
    handleProductDataCollection: () => { },

});

export default function ProductsProvider({ children }: { children: any }) {
    const navigation = useNavigation<ProductsScreenNavigationProps>();

    const { crn } = useContext(UserContext);

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [code, setCode] = useState('');
    const [desc, setDesc] = useState('');
    const [stock, setStock] = useState(0);

    async function handleCreate() {
        const newProduct: ProductProps = {
            id: '',
            name: 'Novo produto',
            price: 20,
            code: 'codigoaleatorio',
            desc: 'Um novo produto criado por GEdO23',
            stock: 1
        }

        const docRef = doc(collection(firestore, 'products', crn, 'productList'))
        await setDoc(docRef, {}).then(
            () => {
                Alert.alert('Sucesso!', `Novo produto adcionado com sucesso!\nGostaria de acessar o produto?`, [
                    { text: 'Não', style: 'cancel' },
                    { text: 'Sim', style: 'default', isPreferred: true, onPress: () => navigation.navigate('ProductScreen', { id: docRef.id }) }
                ]);
                console.log('Produto criado com sucesso!');
            },
            (reason) => {
                Alert.alert('Erro!', `Erro ao cadastrar`)
                console.log()
            }
        );
    }

    function handleEdit(): void {
        throw new Error("Function not implemented.");
    }

    function handleDelete(): void {
        throw new Error("Function not implemented.");
    }

    function handleDataCollection(): void {
        throw new Error("Function not implemented.");
    }

    return (
        <ProductsContext.Provider value={{
            productName: name, productPrice: price, productCode: code, productDescription: desc, productStock: stock,
            setProductName: (value: string) => setName(value),
            setProductPrice: (value: number) => setPrice(value),
            setProductCode: (value: string) => setCode(value),
            setProductDescription: (value: string) => setDesc(value),
            setProductStock: (value: number) => setStock(value),
            handleCreateNewProduct: () => handleCreate(),
            handleEditProduct: () => handleEdit(),
            handleDeleteProduct: () => handleDelete(),
            handleProductDataCollection: () => handleDataCollection(),
        }}>
            {children}
        </ProductsContext.Provider>
    )
}
