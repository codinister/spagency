const nodemailer = require('nodemailer'); 



export async function POST(req: Request) {

  const obj = await req.json()


  const res = obj?.data
  
    const from = res?.email
    const subject = 'Contact Message';
    const message = `
    <table> 
        <tr>
        <td>Fullname</td> <td>${res?.fullname}</td>
        </tr>
        <tr>
        <td>Company</td> <td>${res?.company}</td>
        </tr>
        <tr>
        <td>Phone </td> <td>${res?.phone}</td>
        </tr>
        <tr>
        <td> Email </td> <td>${res?.email}</td>
        </tr>
        <tr>
        <td> Message </td> <td>${res?.message}</td>
        </tr>
    </table>`
  
    


    const serv = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'spagency90@gmail.com', 
        pass: 'coep eoln qmki djgu'
      }
    })


    const options = {
      from, 
      to: 'spagency90@gmail.com',
      subject, 
      html: message, 
      text: message
    }

    const sendmail = serv.sendMail(options)

    if(sendmail){
      return new Response(JSON.stringify({
        message: 'Email sent!', 
        status: true
      }))
    }
    else{
      return new Response(JSON.stringify({
        message: 'An error occured', 
        status: false
      }))
    }





}
