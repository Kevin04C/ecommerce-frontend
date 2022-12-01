export const validateZise = (file) => {
  const mb = file.size / 1024 / 1024;

  return mb > 2;
};
