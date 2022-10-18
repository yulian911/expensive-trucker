import model from "../models/model.js"

class Controller {
  async getCategory(req,res,next){
    try{
      const data = await model.Categories.find()

      const filter = data.map(v=>Object.assign({},{type:v.type,color:v.color}))

      return res.json(filter)

    }catch(err){
      next(err);
    }
  }
  async postCategory(req,res,next){

    const {type,color} =req.body
    try {
      const Create  = await model.Categories.create({ type,color })
      res.status(200).json(Create);
    } catch (err) {
      next(err);
    }
  }

  // transaction

  async getTransaction(req,res,next){
    try{
      const data = await model.Transaction.find()

   

      return res.json(data)

    }catch(err){
      next(err);
    }
  }
  async postTransaction(req,res,next){

    const {name,type,amount} =req.body
    try {
      const Create  = await model.Transaction.create({ name,type,amount })
      res.status(200).json(Create);
    } catch (err) {
      next(err);
    }
  }
  async deleteTransaction(req,res,next){

    if(!req.body)res.status(400).json({message:'Request body not found'})
    
    try {
      await model.Transaction.deleteOne(req.body)
      res.status(200).json("The video has been deleted.");
    } catch (err) {
      next(err);
    }
  }
  //labels
  async getLabels(req,res,next){

    model.Transaction.aggregate([
      {
        $lookup:{
          from:"categories",
          localField:"type",
          foreignField:"type",
          as:"categories_info"
        }
      },
      {
        $unwind:"$categories_info"
      }
    ]).then(result=>{
      let filter = result.map(v=>Object.assign({},{_id:v._id,name:v.name,type:v.type,amount:v.amount,color:v.categories_info.color}))
      res.json(filter)
    }).catch(err=>{
      res.status(400).json("Looup Collection Error")
    })

 
  }

}
export default new Controller