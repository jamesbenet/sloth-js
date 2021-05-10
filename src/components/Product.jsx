function Product(props) {
  const { item, description, price } = props.product.fields;
  return (
    <div className="products">
    <h3>{item}</h3>
    <div>Description: {description}</div>
    <h3>${price} moonunits</h3>
    </div>



  )
}

export default Product;