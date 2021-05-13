function Product(props) {
  const { item, description, price, img } = props.product.fields;
  return (
    
    <div className="products" className="card" >
      
      <div className="card-top">
       
    <h3 className="item">{item}</h3>
    <img src='https://i.imgur.com/N2pBvHFs.png' alt="sloth" />
    </div>
    <div className="card-body">
      <h4 className="description">Description: {description}</h4>
    </div>
    <h3 classname="price">${price}</h3>
    {/* ----end product card---- */}
    
    </div>



  )
}

export default Product;