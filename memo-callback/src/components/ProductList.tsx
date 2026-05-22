import { useCallback, useState } from 'react'
import GetProductsButton from './GetProductsButton'

type Product = {
  id: number
  title: string
  price: number
}

type ProductsResponse = {
  products: Product[]
}

function ProductList() {
  const [products, setProducts] = useState<Product[]>([])

  const fetchProducts = useCallback(async () => {
    const response = await fetch('https://dummyjson.com/products')
    const data: ProductsResponse = await response.json()
    setProducts(data.products)
  }, [])

  return (
    <div>
      <h2>Products</h2>
      <GetProductsButton fetchProducts={fetchProducts} />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
