import { connection as db } from "../config/index.js";
import { hash, compare } from 'bcrypt'
import { createToken } from "../middleware/UserAuthentication.js";

class UserSignup{
    fetchUsers(req, res){
        const qry = `
        select
        UserID, Firstname, Surname,
        Email, CreatePassword, ConfirmPassword
        from
        UserSignup;
        `
        db.query(qry, (err,results)=>{

            if(err) throw err
            res.json({
             status: res.statusCode,
             results
            })
        })
    }
    fetchUser(req, res) {
        const qry = `
            SELECT UserID, Firstname, Surname,
            Email, CreatePassword, ConfirmPassword
            FROM UserSignup
            WHERE userID = ${req.params.id};
            `;
        db.query(qry, (err, result) => {
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
            data.ConfirmPassword = await hash(data?.ConfirmPassword, 10)
            let user = {
                Email: data.Email,
                ConfirmPassword: data.ConfirmPassword
            }
            const qry = `
            insert into UserSignup
            set ?;
            `
            db.query(qry, [data], (err)=>{
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
            if (data?.ConfirmPassword) {
              data.ConfirmPassword = await hash(data.ConfirmPassword, 8);
            }
            const qry = `
              UPDATE UserSignup
              SET ?
              WHERE userID = ?`;
            db.query(qry, [data, req.params.id], (err) => {
              if (err) throw err;
              res.json({
                status: res.statusCode,
                msg: 'The user information is updated',
              });
            });
          }
  async deleteUser(req, res) {
            const qry = `
              DELETE FROM UserSignup
              WHERE userID = ?`;
            db.query(qry, [req.params.id], (err) => {
              if (err) throw err;
              res.json({
                status: res.statusCode,
                msg: 'User has been deleted',
              });
            });
          }
 login(req, res){
        const {Email, ConfirmPassword} = req.body
        const qry = `
        SELECT UserID, Firstname, Surname,
        Email, CreatePassword, ConfirmPassword
        FROM UserSignup
        WHERE Email = '${Email}';
        `
        db.query(qry, async(err, result)=>{
            if (err) throw err
            if(!result?.length){
                res.json({
                    status: statusCode,
                    msg: "Wrong email address provided"
                })
            }else{
                const validPass = await compare(ConfirmPassword, result[0].ConfirmPassword)
                if(validPass){
                    const token = createToken({
                        Email,
                        ConfirmPassword
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
          UserSignup
        }