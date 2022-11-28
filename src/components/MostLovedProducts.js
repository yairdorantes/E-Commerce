import "./styles/most-loved.scss";
import p1 from "../media/p1.jpg";
import p2 from "../media/p2.jpg";
import p3 from "../media/p3.jpg";
import p4 from "../media/p4.jpg";
const products = [
  {
    img: p1,
    name: "productr1",
    price: 13.45,
  },
  {
    img: p2,
    name: "product2",
    price: 10.99,
  },
  {
    img: p3,
    name: "product3",
    price: 23.99,
  },
  {
    img: p4,
    name: "p4",
  },
];

products.map((produt) => {
  console.log(produt.name);
});

const MostLovedProducts = () => {
  return (
    <>
      <div className="container-most-loved">
        <div className="title-best-sellers">BEST SELLERS ―</div>
        <div className="text-loved-some">Some of our most loved products </div>
        <div className="container-products">
          {products.map((product, key) => {
            return (
              <div key={key} className="card-product">
                <div className="container-img-loved-product">
                  <img className="img-product-loved" src={product.img} alt="" />
                </div>
                <div>{product.name}</div>
                {/* <div>{product.price}$</div> */}
                <div>
                  <button className="btn-shop-now">Shop now</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MostLovedProducts;
