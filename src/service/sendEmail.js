import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const EMAIL_JS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
const EMAIL_JS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
const EMAIL_JS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;

export const sendEmail = async (values, actions) => {
  try {
    const parsedValues = { ...values };

    await emailjs.send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, parsedValues, EMAIL_JS_PUBLIC_KEY);
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Your Message Is Successfully Sended!",
      confirmButtonColor: "#38bdf8",
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something Went Wrong!",
      confirmButtonColor: "#38bdf8",
    });
  } finally {
    actions.setSubmitting(false);
    actions.resetForm();
  }
};
