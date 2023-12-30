import React, { useState } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [initiatedInputs, setInitiatedInputs] = useState<string[]>([]);

  const validate = (input: string) => {
    return input.length > 0;
  };

  const validateEmail = (input: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  return (
    <section id="contact" className="section-contact section-full">
      <div className="container">
        <h2 className="section-header">Contact</h2>

        <form
          className="contact-form"
          method="POST"
          action="https://formspree.io/f/mnqeqngq"
        >
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div
                className={`form-input-wrap ${
                  initiatedInputs.find((input) => input === "name")
                    ? "-input-init"
                    : ""
                } ${validate(name) ? "" : "-input-invalid"}`}
              >
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder="Name"
                  maxLength={50}
                  value={name}
                  onChange={(e) => {
                    setInitiatedInputs([...initiatedInputs, "name"]);
                    setName(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className={`form-input-wrap ${
                  initiatedInputs.find((input) => input === "email")
                    ? "-input-init"
                    : ""
                } ${validateEmail(email) ? "" : "-input-invalid"}`}
              >
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="E-Mail"
                  maxLength={50}
                  value={email}
                  onChange={(e) => {
                    setInitiatedInputs([...initiatedInputs, "email"]);
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className={`form-input-wrap ${
                  initiatedInputs.find((input) => input === "msg")
                    ? "-input-init"
                    : ""
                } ${validate(msg) ? "" : "-input-invalid"}`}
              >
                <textarea
                  className="form-input -textarea"
                  name="message"
                  placeholder="Message"
                  value={msg}
                  maxLength={255}
                  onChange={(e) => {
                    setInitiatedInputs([...initiatedInputs, "msg"]);
                    setMsg(e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="contact-form-bottom">
            <button
              className="btn btn-primary contact-submit"
              type="submit"
              disabled={!name || !email || !msg}
            >
              send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
