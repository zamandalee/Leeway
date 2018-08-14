export const selectChannelMessages = (channelId, messages) => {
  const channelMessages = Object.values(messages);
  return channelMessages.filter( message => message.messageable_id === channelId);
};
