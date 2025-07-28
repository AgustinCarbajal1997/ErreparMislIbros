function isExpired(exp) {
  const currentTime = Math.floor(Date.now() / 1000); // Tiempo actual en segundos
  return currentTime >= exp;
}
export default isExpired;
