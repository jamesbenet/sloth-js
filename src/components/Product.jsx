function Product(props) {
  const { item, description, price } = props.product.fields;
  return (
    
    <div className="products" className="card">
      <div className="card-top">
    <h3>{item}</h3>
    </div>
    <div className="card-body">
      <p className="description">Description: {description}</p>
    </div>
    <h3 classname="price">${price}</h3>
    {/* ----end product card---- */}
    
    </div>



  )
}

export default Product;