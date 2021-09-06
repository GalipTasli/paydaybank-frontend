import axios from "axios";

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:8080/api/products/getall")
    }
    getByProductId(id){
        return axios.get("http://localhost:8080/api/products/getByProducId?productId="+id)
    }
    putProduct(product)
    {
        return axios.put("http://localhost:8080/api/products/update?available="+product.available+"&description="+product.description+"&id="+product.id+"&name="+product.name+"&price="+product.price)
    }
    addProduct(product)
    {
        return axios.post("http://localhost:8080/api/products/add?available="+product.available+"&description="+product.description+"&id="+product.id+"&name="+product.name+"&price="+product.price)
    }
    deleteProduct(id)
    {
        return axios.delete("http://localhost:8080/api/products/delete?id="+id)
    }

}