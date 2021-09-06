import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import ProductService from '../services/productService';

export default function DeleteProduct() {
    let {id} = useParams();

    useEffect(()=>{
        let productService = new ProductService()
        productService.deleteProduct(id)
    },[])
    return (
        <div>
            <h1>Silme işlemi başarılı</h1>
        </div>
    )
}
