import app from "./ap.js";
import dotenv from 'dotenv';
import router from "./router/routerProduct.js";
dotenv.config();
const port=process.env.PORT;
export const instance=new Razorpay({
key_id:process.env.RAZORPAY_API_KEY,
key_secret:process.env.RAZORPAY_API_SECRET    
});

app.use("/api/product",router);
app.listen(port,()=>{
    console.log(`the server is running on http://localhost${port}`);
})
