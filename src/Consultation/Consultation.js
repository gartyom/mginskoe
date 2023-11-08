import "./Consultation.css";
import "./Form.css";
import { useRef } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export default function Consultation() {
  const form = useRef();

  function handleButtonClick(e) {
    e.preventDefault();

    let name = form.current.querySelector(".Form-inputName").value;
    let phone = form.current.querySelector(".Form-inputPhone").value;
    var phoneo = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    if (name === "" || phone === "") {
      toast.error("Пожалуйста, заполните все необходимые поля.", {
        theme: "colored",
      });
    } else if (phone.match(phoneo) == null) {
      toast.error("Пожалуйста, введите корректный номер телефона.", {
        theme: "colored",
      });
    } else {
      form.current.querySelector(".Form-inputName").value = "";
      form.current.querySelector(".Form-inputPhone").value = "";
      toast.info("Запрос обрабатывается.", {
        theme: "colored",
      });
      handleSubmit(name, phone);
    }
  }

  async function handleSubmit(name, phone) {
    const serviceId = "service_hbka887";
    const templateId = "template_uhy61b9";
    const publicKey = "pWywIb_GtxShQ0YCY";

    let message = `Имя: ${name}\nКонтакт: ${phone}`;

    let template_params = {
      title: "Запись на консультацию",
      from_email: "info@дачное-местечко.рф",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, template_params, publicKey)
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          toast.success("Спасибо! Вам перезвонят в ближайшее время.", {
            theme: "colored",
          });
        } else {
          toast.error("Что-то пошло не так, повторите попытку позже.", {
            theme: "colored",
          });
        }
      })
      .catch((e) => {
        toast.error("Что-то пошло не так, повторите попытку позже.", {
          theme: "colored",
        });
      });
  }

  return (
    <div className="Consultation">
      <div className="Consultation-content">
        <div className="Consultation-title">Получите консультацию</div>
        <img
          className="Consultation-background"
          src={process.env.PUBLIC_URL + "/images/consultation.webp"}
          alt=""
        ></img>
        <form ref={form} type="submit" className="Consultation-form Form">
          <div className="Form-inputContainer">
            <input
              className="Form-inputName Form-input"
              placeholder="Как к вам обращаться?"
            ></input>
            <div className="Form-inputSeparator"></div>
            <input
              className="Form-inputPhone Form-input"
              placeholder="Ваш телефон?"
            ></input>
          </div>
          <button className="Form-button" onClick={handleButtonClick}>
            Перезвоните мне
          </button>
        </form>
      </div>
    </div>
  );
}
