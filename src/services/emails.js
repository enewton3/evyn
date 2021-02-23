const emailjs = require("emailjs-com");
const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

const sendEmail = async (formData) => {
  try {
    const resp = await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID);
    return resp;
  } catch (error) {
    throw error;
  }
};

export default sendEmail;
