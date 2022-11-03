const express = require("express");
require("./db/conn");
const product = require("./model/product")
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// create a new product

app.post("/products", async (req, res) => {

    try {
        const user = new product(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }
    
})
//read the product
app.get("/products", async(req, res) => {

    try{
        const productData = await product.find();
        res.send(productData);
    }catch(e){res.status(400).send(e);}
    
})

// get the indivisual products data using id/name/email

app.get("/products/:id", async(req, res) => {
    try{
        const _id = req.params.id;
        const idData = await product.findById(_id);

        if(!idData){
            return res.status(404).send();
        }else{res.send(idData);}
        
    }catch(e){res.status(500).send(e);}
})


// update the products by it id

app.patch("/products/:id", async(req,res)=> {
    try{
        const _id = req.params.id;
        const updateData = await product.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        res.send(updateData);
    }catch(e){res.status(404).send(e);}
})


// delete the products by it id

app.delete("/products/:id", async(req, res)=> {
    try{
        const _id = req.params.id;
        const deleteData = await product.findByIdAndDelete(_id, req.body);
        res.send(deleteData);
    }catch(e){res.status(500).send(e);}
})

app.listen(port, () => {
    console.log(`welcome to the port no.${port}`);
})

