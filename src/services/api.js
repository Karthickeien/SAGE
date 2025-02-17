const API_URL = import.meta.env.VITE_API_URL;

export const predictGait = async (files) => {
  const formData = new FormData();
  files.forEach(file => {
    formData.append('files', file);
  });

  try {
    const response = await fetch(`${API_URL}/predict`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to process files');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message || 'Failed to connect to server');
  }
};
