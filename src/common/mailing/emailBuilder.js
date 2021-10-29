function createEmailBuilder(user, pass) {
  return {
    createEmailPlainText: (from, to, subject, text) => {
      return {
        from: from,
        to: to,
        subject: subject,
        text: text,
      };
    },
  };
}

export { createEmailBuilder };
