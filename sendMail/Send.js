var nodemailer = require('nodemailer');

let Send = (req) => {

    console.log(req.body);
    var to = req.body.to;
    var message = req.body.message;
    var from = req.body.from;
    var subject = req.body.subject;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'recibosLinkNuevo@gmail.com',
            pass: 'AirlinesTag2021'
        }
    });

    var mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    return req.body;
}

exports.Send = Send;