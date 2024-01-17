// Generates a unique id string for each order
// Is used in the order context and cart context
export function generateUniqueId(): string {
  const timestamp = new Date().getTime();
  const randomValue = Math.floor(Math.random() * 1000000);
  return `${timestamp}-${randomValue}`;
}
