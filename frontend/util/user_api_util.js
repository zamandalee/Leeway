export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/users'
  });
};
