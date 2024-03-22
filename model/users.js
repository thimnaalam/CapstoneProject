import { connection as Db } from "../config/index.js";
import { hash, compare } from 'bcrypt'
import { createToken } from "../middleware/UserAuthentication.js";

class Users{
    fetchUsers(req, res){
        const qry = `
        select
        userID, Firstname, Surname,
        Email, UserType, Department, Pwd
        from
        Users;
        `
        Db.query(qry, (err,results)=>{

            if(err) throw err
            res.json({
             status: res.statusCode,
             msg: "Failed to fetch Users",
             results
            })
        })
    }
    fetchUser(req, res) {
        const qry = `
            select
            userID, Firstname, Surname,
            Email, UserType, Department, Pwd 
            FROM Users
            WHERE userID = ${req.params.id};
            `;
            Db.query(qry, (err, result) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            result,
          })
        })
      }
    
  async createUser(req, res){
            // payload
            let data = req.body
            data.Pwd = await hash(data?.Pwd, 10)
            let user = {
                Email: data.Email,
                Pwd: data.Pwd
            }
            const qry = `
            insert into Users
            set ?;
            `
            Db.query(qry, [data], (err)=>{
                if(err) {
                    res.json({
                        status: res.statusCode,
                        msg: 'This email address already exists'
                    })
                }else{
                    // create a token 
                    let token = createToken(user)
                    res.json({
                        status: res.statusCode,
                        token,
                        msg: 'You\'re registered'
                    })
                }
                })
            }
  async updateUser(req, res) {
            const data = req.body;
            if (data?.Pwd) {
              data.Pwd = await hash(data.Pwd, 8);
            }
            const qry = `
              UPDATE Users
              SET ?
              WHERE userID = ?`;
              Db.query(qry, [data, req.params.id], (err) => {
              if (err) throw err;
              res.json({
                status: res.statusCode,
                msg: 'The user information is updated',
              });
            });
          }
  async deleteUser(req, res) {
            const qry = `
              DELETE FROM Users
              WHERE userID = ?`;
              Db.query(qry, [req.params.id], (err) => {
              if (err) throw err;
              res.json({
                status: res.statusCode,
                msg: 'User has been deleted',
              });
            });
          }
 login(req, res){
        const {Email, Pwd} = req.body
        const qry = `
        SELECT 
        userID, Firstname, Surname,
        Email, UserType, Department, Pwd
        FROM Users
        WHERE Email = '${Email}';
        `
        Db.query(qry, async(err, result)=>{
            if (err) throw err
            if(!result?.length){
                res.json({
                    status: statusCode,
                    msg: "Wrong email address provided"
                })
            }else{
                const validPass = await compare(Pwd, result[0].Pwd)
                if(validPass){
                    const token = createToken({
                        Email,
                        Pwd
                    })
                    res.json({
                        status: res.statusCode,
                        msg: "you're logged in",
                        token,
                        result: result[0]
                    })
                }else{
                    res.json({
                        status: res.statusCode,
                        msg: "Please provide the correct password"
                    })
                }
            }
        })
    }}
        export{
          Users
        }