import { memo } from 'react'

type GetProductsButtonProps = {
  fetchProducts: () => void
}

function GetProductsButton({ fetchProducts }: GetProductsButtonProps) {
  console.log('Rendered Button Component')

  return (
    <button type="button" onClick={fetchProducts}>
      Fetch Products
    </button>
  )
}

export default memo(GetProductsButton)
