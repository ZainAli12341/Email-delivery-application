const{PrismaClient}=require("@prisma/client");
const {users}= new PrismaClient()

class USERSSIGHNINDAO{
   async sighnInUser(email,password){
    const sighnIn = users.findUnique({
        where:{
            email,
            password
        },
        select :{
            email:true,
            password:true
        }
    })
    return sighnIn
   }
   
}

module.exports = new USERSSIGHNINDAO()