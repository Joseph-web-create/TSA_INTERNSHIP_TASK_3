export const validateName = (name) => {
  const validRegex = /^[A-Z][a-zA-Z'-]{4,49}$/;
  if (!name) {
    return "First Name is required.";
  } else if (!validRegex.test(name)) {
    return "Please enter a valid First name.";
  }
  return null;
};

export const validateName1 = (name) => {
  const validRegex = /^[A-Z][a-zA-Z'-]{4,49}$/;
  if (!name) {
    return "Last Name is required.";
  } else if (!validRegex.test(name)) {
    return "Please enter a valid Last name.";
  }
  return null;
};

export const validateEmail = (email) => {
  const validRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!email) {
    return "Email is required.";
  } else if (!validRegex.test(email)) {
    return "Please enter a valid email address";
  }

  return null;
};

export const validateNewPassword = (password) => {
  const validRegex = /^(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  if (!password) {
    return "Password is required";
  } else if (!validRegex.test(password)) {
    return "New password must contain at least one lowercase, uppercase, and at least 5 characters long";
  }

  return null;
};
