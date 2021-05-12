function Product(props) {
  const { item, description, price } = props.product.fields;
  return (
    
    <div className="products" className="card">
      <div className="card-top">
    <h3>{item}</h3>
    </div>
    <div className="card-body">
      <p className="text">Description: {description}</p>
    </div>
    <h3>${price} moonunits</h3>
    {/* ----end product card---- */}
    
    </div>



  )
}

export default Product;