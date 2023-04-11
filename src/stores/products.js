import { defineStore } from "pinia";
import { Modal } from 'flowbite';
// Firebase
import { db } from '../utils/firebase'
import { addDoc, collection, onSnapshot, doc, deleteDoc, getDoc, updateDoc } from 'firebase/firestore'
import router from '../router/index'

export const useProductStore = defineStore('products', {
    // State
    state: () => ({
        getDataProducts: [],
        dataProduct: {
            name: '',
            price: ' '
        },

        currentPage: 1,
        per_page: 5,
        queryProduct: collection(db, 'products'),
    }),
    actions: {
        async onlyProduct(id) {
            try {
                const productRef = doc(db, "products", id);
                console.log('Only Product:', productRef.id)
                const docSnap = await getDoc(productRef)
                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    this.dataProduct.name = docSnap.data().name_product
                    this.dataProduct.price = docSnap.data().price_product
                } else {
                    console.log("No existe el documento!");
                }
            } catch (error) {
                console.log(error)
            }
        },
        getProduct() {
            try {
                onSnapshot(this.queryProduct, (queryGetProducts) => {
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
                addDoc(this.queryProduct, {
                    name_product: this.dataProduct.name,
                    price_product: this.dataProduct.price,
                })
                this.dataProduct.name = ''
                this.dataProduct.price = ''
                router.go('products')            
            } catch (error) {
                console.log(error)
            }
        },
        updateProduct(id) {
            const productRef = doc(db, "products", id);
            try {
                updateDoc(productRef, {
                    name_product: this.dataProduct.name,
                    price_product: this.dataProduct.price
                })
            } catch (error) {
                console.log(error)
            }
        },
        deleteProduct(id) {
            try {
                deleteDoc(doc(this.queryProduct, id))
            } catch (error) {
                console.log(error)
            }
        }
    }
})