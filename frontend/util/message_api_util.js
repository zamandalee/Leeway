export const createMessage = (message) => {
  let messageableType = (message.messageable_type === 'Channel') ? 'channels' : 'direct_messages';
  return (
    $.ajax({
      method: 'POST',
      url: `/api/${messageableType}/${message.messageable_id}/messages`,
      data: {message}
    })
  );
};

export const deleteMessage = (message) => {
  let messageableType = (message.messageable_type === 'Channel') ? 'channels' : 'direct_messages';
  return (
    $.ajax({
      method: 'DELETE',
      url: `/api/${messageableType}/${message.messageable_id}/messages/${message.id}`
    })
  );
};

export const updateMessage = (message) => {
  let messageableType = (message.messageable_type === 'Channel') ? 'channels' : 'direct_messages';
  return (
    $.ajax({
      method: 'PATCH',
      url: `/api/${messageableType}/${message.messageable_id}/messages/${message.id}`,
      data: {message}
    })
  );
};
