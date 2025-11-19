export const ApiService = {
  get: async (url: string) => {
    const res = await fetch(url);
    return res.json();
  }
};