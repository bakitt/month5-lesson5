export const addText = (text) => ({
  type: 'ADD_TEXT',
  payload: {
    id: Math.random().toString(36).substring(7),
    text,
  },
});