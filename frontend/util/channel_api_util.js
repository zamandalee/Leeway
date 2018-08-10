export const fetchChannels = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/channels'
  });
};

export const fetchChannel = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${id}`
  });
};
