import { getMessages, getMembers } from './data';

export function getMessagesDetails() {
  return {
    type: 'MESSAGES_LOADING',
    payload: getMessages()
  };
};
export  function getMembersDetails() {
  return {
    type: 'MEMBERS_LOADING',
    payload: getMembers()
  };
}
export  function formatData() {
  return {
    type: 'FORMAT_DATA'
  };
}