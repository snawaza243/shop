import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2Q2ZjNkMzU2ODVhNDliMTEwOGRmYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjgxODczNCwiZXhwIjoxNjg3MDc3OTM0fQ.UNGyuVgTF1PnSNQUm8EFT8JVNoZUzsd8-e2SZITkjeI"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});



// const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2Q2ZjNkMzU2ODVhNDliMTEwOGRmYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NjgxODczNCwiZXhwIjoxNjg3MDc3OTM0fQ.UNGyuVgTF1PnSNQUm8EFT8JVNoZUzsd8-e2SZITkjeI"

// export const publicRequest = axios.create({
//   baseURL: BASE_URL,
// });

// export const userRequest = axios.create({
//   baseURL: BASE_URL,
//   header: { token: `Bearer ${TOKEN}` },
// });


// useEffect(()=>{
//     const makeRequest = async()=>{
//       try{
//         const res = await userRequest.post("/checkout/payment",{
//           tokenId: stripeToken.id,
//           amount: 500,
//         });
//         history.push("/success", {data:res.data})
//         console.log(res.data)
//       } catch (error){
//         console.log(error)
//       }
//     };
//     stripeToken && cart.total >=1 && makeRequest();
//   }, [stripeToken, cart.total, history]);

