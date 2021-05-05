const durationCompiler = (min) => {
  const hours = Math.floor(min / 60);
  const minutes = min % 60;

  if (hours && minutes) {
    return `${hours}h ${minutes}m`;
  }
  if (hours && !minutes) {
    return `${hours}h`;
  }
  if (!hours && minutes) {
    return `${minutes}m`;
  }
};

export default durationCompiler;
