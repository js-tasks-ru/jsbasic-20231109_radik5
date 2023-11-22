function showSalary(users, age) {
  const filteredUsers = users.filter((user) => user.age <= age);
  const mappedUsers = filteredUsers.map(
    (user) => user.name + ", " + user.balance
  );
  for (let i = 0; i < mappedUsers.length - 1; i++) {
    mappedUsers[i] = mappedUsers[i] + "\n";
  }
  return mappedUsers.join("");
}
