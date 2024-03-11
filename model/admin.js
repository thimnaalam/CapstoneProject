import { connection as db } from "../config/index.js";
import { hash, compare } from 'bcrypt'
import { createToken } from "../middleware/UserAuthentication.js";

class AdminSignup{
    fetchAdmins(req, res){
        const qry = `
        select
        AdminID, Firstname, Surname, IdNumb,
        Email, Dept, CreatePassword, ConfirmPassword
        from
        AdminSignup;
        `
        db.query(qry, (err,results)=>{

            if(err) throw err
            res.json({
             status: res.statusCode,
             results
            })
        })
    }
    fetchAdmin(req, res) {
        const qry = `
            SELECT AdminID, Firstname, Surname, IdNumb,
            Email, Dept, CreatePassword, ConfirmPassword
            FROM AdminSignup
            WHERE AdminID = ${req.params.id};
            `;
        db.query(qry, (err, result) => {
          if (err) throw err;
          res.json({
            status: res.statusCode,
            result,
          })
        })
      }
    
        async createAdmin(req, res){
            // payload
            let data = req.body
            data.ConfirmPassword = await hash(data?.ConfirmPassword, 10)
            let admin = {
                Email: data.Email,
                ConfirmPassword: data.ConfirmPassword
            }
            const qry = `
            insert into AdminSignup
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
                    let token = createToken(admin)
                    res.json({
                        status: res.statusCode,
                        token,
                        msg: 'You\'re registered'
                    })
                }
                })
            }
  async updateAdmin(req, res) {
            const data = req.body;
            if (data?.ConfirmPassword) {
              data.ConfirmPassword = await hash(data.ConfirmPassword, 8);
            }
            const qry = `
              UPDATE AdminSignup
              SET ?
              WHERE userID = ?`;
            db.query(qry, [data, req.params.id], (err) => {
              if (err) throw err;
              res.json({
                status: res.statusCode,
                msg: 'The admin information is updated',
              });
            });
          }
  async deleteAdmin(req, res) {
            const qry = `
              DELETE FROM AdminSignup
              WHERE userID = ?`;
            db.query(qry, [req.params.id], (err) => {
              if (err) throw err;
              res.json({
                status: res.statusCode,
                msg: 'Admin has been deleted',
              });
            });
          }
 login(req, res){
        const {Email, ConfirmPassword} = req.body
        const qry = `
        SELECT UserID, Firstname, Surname,
        Email, CreatePassword, ConfirmPassword
        FROM AdminSignup
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