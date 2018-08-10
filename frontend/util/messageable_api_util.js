export const fetchChannel = (id) => ({
  method: 'GET',
  url: `/api/channels/${id}`
});

export const fetchDirectMessage = (id) => ({
  method: 'GET',
  url: `/api/direct_messages/${id}`
});

export const createMessage = (message) => ({
  method: 'POST',
  url: `/api/channels/${message.messageable_id}/messages`
});
