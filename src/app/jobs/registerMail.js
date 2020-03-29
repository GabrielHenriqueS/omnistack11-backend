import Mail from '../../lib/Mail';

class RegisterMail {
  get key() {
    return 'RegisterMail';
  }

  async handle({ data }) {
    const { id, name, email } = data;
    await Mail.sendMail({
      to: `${name} <${email}>`,
      subject: 'Cadastro Be The Hero',
      template: 'register',
      context: {
        ong: name,
        id,
      },
    });
  }
}

export default new RegisterMail();
