import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com";

export const ContactForm = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAIL_USER_ID
      )
      .then((result) => {
        console.log("Email set successfully: ", result);
      })
      .catch((error) => {
        console.log("Error sending email: ", error);
      });

    const form = document.getElementById("form");
    form.reset();
  }

  return (
    <div>
      <form id="form" onSubmit={sendEmail}>
        <Input
          className="mb-3"
          type="text"
          id="name"
          name="user_name"
          placeholder="Your Name"
          required
        />
        <Input
          className="mb-3"
          type="email"
          id="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
        <Textarea
          className="mb-3 h-[150px]"
          name="message"
          id="message"
          placeholder="Your Mesaage"
          required
        />
        <Button size="lg" type="submit" className="w-full hover:bg-slate-800">
          Send
        </Button>
      </form>
    </div>
  );
};
