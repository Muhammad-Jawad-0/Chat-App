// import { useState } from "react";
// // import reactLogo from '../assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import '../App.css'
// import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement } from "../store/reducers/Counter";

// function Home() {
//   const [count, setCount] = useState(0);
//   const state = useSelector((state) => state.counter);
//   console.log(state, "state");
//   const dispatch = useDispatch();

//   const counterIncrement = () => {
//     dispatch(increment());
//   };

//   const counterDecrement = () => {
//     dispatch(decrement());
//   };
//   return (
//     <>
//       {/* <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div> */}
//       <h1>learning react With Jawad</h1>
//       <div className="card">
//         <button onClick={counterDecrement}>count is {state.count}</button>
//         <p>
//           Edit <code>jawad</code> lol
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default Home;

// import { Link } from "react-router-dom";
// import { useGetAllProductsQuery } from "../RTK-quary"

// function Home() {
//   const { data, error, isLoading } = useGetAllProductsQuery('products')
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <Link to="/shop">Go to Shop</Link>
//       {isLoading && <h2>Looooooodig.....</h2> }
//       {data && data.map((v) => (
//         <ul>
//           <li key={v.id}>{v.title}</li>
//         </ul>
//       ))}
//     </div>
//   )
// }

// export default Home;

