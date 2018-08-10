export const createMessage = (message) => ({
  method: 'POST',
  url: `/api/channels/${message.messageable_id}/messages`
});

// export const deleteMessage = (id) => ({
//   method: 'DELETE',
//   url: `/api/channels/:channel_id/messages/${id}`
// });
