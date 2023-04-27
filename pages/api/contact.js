import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  try {
    await sendgrid.send({
      to: ["gowebfront@gmail.com"], // Your email where you'll receive emails
      from: "contact@webfront.dev", // your website email address here
      subject: "Testing Webfront Email " + req.body.name,
      replyTo: req.body.email,
      html: `<div>
                <p>Name: ${req.body.name}</p>
                <p>Email: ${req.body.email}</p>
                <p>Message: ${req.body.textArea}</p>
            </div>`,
    });
  } catch (error) {
    console.log("Failed sending email: ", error);
    return res.status(500).json({ status: "error" });
  }

  return res.status(200).json({ status: "ok" });
}
