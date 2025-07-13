export class Storage {
  static async setItem(key, value) {
    try {
      await chrome.storage.local.set({ [key]: value });
    } catch (error) {
      console.error("Erro ao salvar no chrome.storage:", error);
    }
  }

  static async getItem(key, defaultValue = null) {
    try {
      const result = await chrome.storage.local.get([key]);
      return result[key] !== undefined ? result[key] : defaultValue;
    } catch (error) {
      console.error("Erro ao recuperar do chrome.storage:", error);
      return defaultValue;
    }
  }
}
