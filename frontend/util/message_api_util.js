export const createMessage = (message) => {
  return (
    $.ajax({
      method: 'POST',
      url: `/api/channels/${message.messageable_id}/messages`,
      data: {message}
    })
  );
};

// export const deleteMessage = (id) => ({
//   method: 'DELETE',
//   url: `/api/channels/:channel_id/messages/${id}`
// });
