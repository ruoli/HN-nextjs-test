import axios from 'axios'

const productAPI = {
  getAllProducts () {
    const path = `https://fakestoreapi.com/products`
    return axios.get(path).then(res => {
      console.log('res.data', res.data);
      return res.data
    })
  }
}

export default productAPI
