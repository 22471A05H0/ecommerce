import { configureStore, createSlice } from "@reduxjs/toolkit";
const productslice = createSlice({
    name: "products",
    initialState:{veg:[
        {name: 'tomato',price:100.90,image: "tomato.jpg"},
        {name: 'potatoe',price:200.90,image: "potato.jpg"},
        {name: 'onion',price:300.90,image: "onion.jpg"},
        {name: 'paneer',price:500.90,image: "paneer.jpg"},
        {name: 'garlic',price:15000.90,image: "garlic.jpg"},
        ],

        nonveg:[
            {name:'chicken',price:'800.00',image: "chicken.jpg"},
            {name:'grilledchicken',price:'1000.00',image: "grilled.jpg"},
            {name:'mutton',price:'2000.00',image: "mutton.jpg"},
            {name:'chillichicken',price:'400.00',image: "chilli.jpg"},
            {name:'mutton kheema',price:'1500.00',image: "keema.jpg"}

        ]
    },
    reducers:{},


});

const cartslice=createSlice({
    name: "cart",
    initialState:[],
    reducers:{
        addtocart:(state,action)=>{
            const status=state.find((item)=>item.name === action.payload.name);
            if(status){
                status.quantity +=1;
            }
 else{
                state.push({...action.payload,quantity:1});
            }
        },
        increment:(state,action) =>{
            const item=state.find((item) => item.name === action.payload.name);
            if(item){
                item.quantity +=1;
            }
        },
        decrement:(state,action) =>{
            const item=state.find((item) => item.name === action.payload.name);
            if(item && item.quantity >=1){
                item.quantity -=1;
            }
        },
        remove:(state,action)=>{
            return state.filter((item) => item.name !==action.payload.name);
        }

    }
});
export const{addtocart,increment,decrement,remove}=cartslice.actions;

//configure the store

const Store = configureStore({
    reducer:{products:productslice.reducer, cart: cartslice.reducer },

});
export default Store;