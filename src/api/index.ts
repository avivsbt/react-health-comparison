export const getHealthyFood = async (): Promise<string> => {
  try {
    const response = await fetch(
      'https://source.unsplash.com/200x200/?healthy-food'
    );
    return response.url;
  } catch (err) {
    console.error(err);
    return 'api healthy food';
  }
};

export const getUnHealthyFood = async (): Promise<string> => {
  try {
    const response = await fetch(
      'https://source.unsplash.com/200x200/?unhealthy-food'
    );
    return response.url;
  } catch (err) {
    console.error(err);
    return 'api unhealthy food';
  }
};
