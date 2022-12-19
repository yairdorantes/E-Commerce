// import { useContext, useEffect } from "react";
// import Heart from "react-heart";
// import AuthContext from "../context/AuthContext";
// import { vars } from "./variables";

// const ProductListEndLess = ({ products }) => {
//   const { user } = useContext(AuthContext);
//   const [userFavs, setUserFavs] = useState([]);

//   useEffect(() => {
//     const getFavs = `${vars.mySite}favorites/${user.user.id}/true`;
//     helpHttp()
//       .get(getFavs)
//       .then((res) => {
//         setUserFavs(res);
//       });
//   }, []);

//   const handleHeart = (id) => {
//     console.log("aajajajaj");
//     if (userFavs.includes(id)) {
//       setUserFavs(userFavs.filter((fav) => fav !== id));
//     } else {
//       setUserFavs([...userFavs, id]);
//     }
//   };

//   return (
//     <>
//       <div className="container-cards-products">
//         {products &&
//           userFavs &&
//           products.map((product, index) => {
//             // console.log(userFavs.includes(5));
//             return (
//               <div key={index} className="product-card">
//                 <Link to={`/${paramsUrl.section}/${product.id}`}>
//                   <div
//                     className="container-img-product"
//                     style={{
//                       backgroundImage: "url(" + product.main_image + ")",
//                     }}
//                   ></div>
//                 </Link>
//                 <div
//                   className="myheart"
//                   onClick={() => handleHeart(product.id)}
//                 >
//                   {/* {console.log(userFavs.includes(product.id), "sisisis")} */}
//                   <Heart
//                     emptyHeart={emptyHeart}
//                     heart={heart}
//                     active={userFavs.includes(product.id) ? true : false}
//                     id={product.id}
//                     changingState={products}
//                   />
//                 </div>
//                 <div className="container-info-price">
//                   <Link
//                     className="link-from-one-product"
//                     to={`/${paramsUrl.section}/${product.id}`}
//                   >
//                     <div className="container-info-product">
//                       {/* <h2>{product.title}</h2> */}
//                       <p>{product.description}</p>
//                     </div>
//                   </Link>
//                   <hr />
//                   <div className="container-price-fav">
//                     <div className="price-product-list">
//                       ${product.price}
//                       {product.discount > 0 && (
//                         <span className="discount-card">
//                           {product.discount}% OFF
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//     </>
//   );
// };

// export default ProductListEndLess;
