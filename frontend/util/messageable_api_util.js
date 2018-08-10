





export const createMessage = (message) => ({
  method: 'POST',
  url: `/api/channels/${message.messageable_id}/messages`
});
