export const selectChannelMessages = (channelId, messages) => {
  const channelMessages = Object.values(messages);
  // console.log(channelMessages.filter( message => message.messageable_id === channelId));
  return channelMessages.filter( message => message.messageable_id === channelId);
};
