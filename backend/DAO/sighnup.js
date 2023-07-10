const{PrismaClient}=require("@prisma/client");
const {users}= new PrismaClient()

class USERSSIGHNUPDAO{
    async createUsers(firstname,lastname,email,phonenumber,password){
        const sighnup = await users.create(
             {
            data:{
                firstname:firstname,
                lastname:lastname,
                email:email,
                phonenumber:phonenumber,
                password:password
            },select:{
    firstname:true,
     lastname:true,
     email:true,
    phonenumber:true,
     password:true
             }
        })
        return sighnup
    }
    async getUsers(){
        try {
            const allUsers =await users.findMany({
                select:{
                    id :true,
                    firstname:true,
                    lastname:true,
                    email:true,
                    phonenumber:true,
                    password:true
                }
            })
            return allUsers
        } catch (error) {
            console.log(error)
        }
    }
    async deleteUser(id){
      try {
        const deleteUser = await users.delete({
            data:{
                id:id
            },
            select:{
                id:true
            }
            
        })
        return deleteUser
        } catch (error) {
        console.log(error)
      }  
    }


}
module.exports = new USERSSIGHNUPDAO()