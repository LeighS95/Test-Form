export const getInitials = (firstName, lastName) => {
  if (firstName === '' || lastName === '') {
    return null;
  }
  const initials = firstName[0] + lastName[0];
  return initials;
};
