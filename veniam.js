const unauthorized = () => {
  // Return an error object or status code
  return { status: 401, message: 'Unauthorized access' };
};
