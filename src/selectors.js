import { createSelector } from 'reselect';

const getMembers = state => {
  return state.members
};
const getMessages = state => {
  return state.messages
};

export const getChatLogsData = createSelector(
  [getMembers, getMessages],
  (members, messages) => {
    const chatdata = messages.map((msg) => {
      const member = members.find((mem) => mem.id === msg.userId);
      return {
        id: msg.id,
        userId: msg.userId,
        message: msg.message,
        timestamp: msg.timestamp,
        member: member,
      }
    });
    return chatdata;
  }
)
