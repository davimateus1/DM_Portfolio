import { Fade } from "react-reveal";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <Fade bottom>
        <h1>Vamos conversar!</h1>
        <p>
          Se gostou do meu trabalho e está interessado em algum projeto ou tem
          alguma dúvida, me manda uma mensagem!
        </p>
        <form
          className={styles.contact_card}
          method="POST"
          action="https://formsubmit.co/davimateusga@gmail.com"
        >
          <label for="nome">Seu Nome</label>
          <input placeholder="Nome" name="name" required autocomplete="off" />
          <label for="email">Seu E-mail</label>
          <input
            placeholder="E-mail"
            name="email"
            required
            autocomplete="off"
          />
          <label for="mensagem">Sua mensagem</label>
          <textarea
            placeholder="Mensagem..."
            rows={6}
            name="message"
            required
          />
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/thanks"
          />
          <input type="hidden" name="_captcha" value="false" />
          <button type="submit">Enviar</button>
        </form>
      </Fade>
    </div>
  );
};

export default ContactPage;
