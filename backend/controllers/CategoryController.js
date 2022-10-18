

class AuthController {
  async getCategory(req,res){
    res.json('Get request from categories')
  }
}
export default new AuthController