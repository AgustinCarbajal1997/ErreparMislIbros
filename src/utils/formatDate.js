function formatDate(input) {
  const date = new Date(input);
  return date.toLocaleDateString('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });
}

export default formatDate;
