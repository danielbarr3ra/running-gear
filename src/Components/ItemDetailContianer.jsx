import React, { useEffect, useState } from "react"
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"



const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const { itemId } = useParams()

    useEffect(() => {
        const id = itemId
        const aCollection = 'items'
        const db = getFirestore();
        const docItem = doc(db, aCollection, id);
        getDoc(docItem).then(
            (res) => {
                setItem({
                    id: id,
                    ...res.data()
                })
            }
        )
    }, [itemId])

    return (
        <>
            <div className="flex flex-wrap justify-around">
                <ItemDetail {...item} />
            </div>
        </>
    )
}



export default ItemDetailContainer




