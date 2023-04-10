import { defineStore } from "pinia";
// Firebase
import { db } from '../utils/firebase'
import { addDoc, collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore'

export const useProductStore = defineStore('products', {
    // State
    state: () => ({
        getDataProducts: [],
        dataProduct: {
            name: '',
            price: ' '
        },
        table: 'products'
    }),
    actions: {
        onlyProduct() {
            // TODO
        },
        getProduct() {
            try {
                const queryProduct = collection(db, this.table)
                onSnapshot(queryProduct, (queryGetProducts) => {
                    this.getDataProducts = []
                    queryGetProducts.forEach((doc) => {
                        const data = {
                            id: doc.id,
                            name: doc.data().name_product,
                            price: doc.data().price_product
                        }
                        this.getDataProducts.push(data)
                    })
                })
            } catch (error) {
                console.log(error)
            }
        },
        addProduct() {
            try {
                const queryProduct = collection(db, this.table)
                addDoc(queryProduct, {
                    name_product: this.dataProduct.name,
                    price_product: this.dataProduct.price,
                })
                this.dataProduct.value = {}
            } catch (error) {
                console.log(error)
            }
        },
        updateProduct() {
            // TODO
        },
        deleteProduct(id) {
            try {
                const queryProduct = collection(db, this.table)
                deleteDoc(doc(queryProduct, id))
            } catch (error) {
                console.log(error)
            }
        }
    }
})