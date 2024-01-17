// Generates a unique id string for each order
export function generateUniqueId(): string {
    const timestamp = new Date().getTime();
    const randomValue = Math.floor(Math.random() * 1000000);
    return `${timestamp}-${randomValue}`;
  }