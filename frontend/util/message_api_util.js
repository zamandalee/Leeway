export const createMessage = (message) => {
  let urlText = (message.messageable_type === 'Channel') ? 'channels' : 'direct_messages';
  return (
    $.ajax({
      method: 'POST',
      url: `/api/${urlText}/${message.messageable_id}/messages`,
      data: {message}
    })
  );
};

export const deleteMessage = (message) => {
  let urlText = (message.messageable_type === 'Channel') ? 'channels' : 'direct_messages';
  return (
    $.ajax({
      method: 'DELETE',
      url: `/api/${urlText}/${message.messageable_id}/messages/${message.id}`
    })
  );
};
