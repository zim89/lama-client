interface validateTypes {
  email: string;
  password: string;
  agreement?: boolean;
  checkbox?: boolean;
}

interface errorsTypes {
  email?: string;
  password?: string;
  agreement?: string;
  checkbox?: string;
}

export const validate = (values: validateTypes) => {
  const errors: errorsTypes = {};

  if (values.email !== undefined) {
    if (values.email === '') {
      errors.email = "Обов'язково";
    } else if (values.checkbox == false) {
      errors.checkbox = "Обов'язково";
    } else if (
      !/^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\[[\t -Z^-~]*])$/i.test(
        values.email
      )
    ) {
      errors.email = 'Не правильний email';
    } else if (values.email.length > 128) {
      errors.email = 'Занадто багато сиволів';
    }
  }

  if (values.password !== undefined) {
    if (values.password == '') {
      errors.password = "Обов'язково";
    } else if (values.password.length < 6) {
      errors.password = 'Пароль має містити не менше 6-х символів';
    } else if (values.password.length > 14) {
      errors.password = 'Пароль має містити не більше 14-х символів';
    }
  }

  return errors;
};
