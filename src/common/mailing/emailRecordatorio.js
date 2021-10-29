import { createEmailSender } from "./emailSender.js";
import { createEmailBuilder } from "./emailBuilder.js";

function createEmailRecordatorio(user, pass) {
  const builder = createEmailBuilder();
  const sender = createEmailSender(user, pass);

  return {
    send: async (datos) => {
      let email = builder.createEmailPlainText(
        datos.from,
        datos.to,
        datos.asunto,
        datos.mensaje
      );
      await sender.send(email);
    },
    
  };
}

export { createEmailRecordatorio };
