import users from '../data/users.json';

const match = (keyword, strToMatch) =>
  strToMatch.toLowerCase().includes(keyword.toLowerCase());

export const searchUser = keyword =>
  users.filter(
    user =>
      match(keyword, user.firstName) ||
      match(keyword, user.lastName) ||
      match(keyword, user.email)
  );
