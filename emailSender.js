const nodemailer = require('nodemailer');
const email={
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "4e9fbdb0762522",
        pass: "e30e5f788941de"
    }
}

const send = async (option) =>{
    nodemailer.createTransport(email).sendMail(option, (error, info)=> {
        if(error){
            console.log("error",error)
        }else{
            console.log("info",info)
            return info.response;
        }
    })
};

let email_data = {
    fron: 'suranecz@naver.com',
    to: 'suranecz@naver.com',
    subject:'테스트메일',
    text:'node js email text'
}

send(email_data);