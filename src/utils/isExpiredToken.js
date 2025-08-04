function isExpired(token) {
  const currentTime = Math.floor(Date.now() / 1000); // Tiempo actual en segundos
  return currentTime >= token?.exp;
}
export default isExpired;
