export const validateEmailRequest = async (email: string) => {
  const response = await fetch(`https://www.disify.com/api/email/${email}`); // hard coded string?
  const result = await response.json();
  return result.format;
};
