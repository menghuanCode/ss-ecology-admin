const parseValue = (value: any) => {
  if (!value || value === 'undefined') {
    return null;
  }
  if (
    (value.startsWith('{') && value.endsWith('}')) ||
    (value.startsWith('[') && value.endsWith(']'))
  ) {
    return JSON.parse(value);
  }
  return value;
};

export const storage = {
  name: 'ss-new-admin',
  get(key: string) {
    const value = localStorage.getItem(`${this.name}_${key}`);
    return parseValue(value);
  },
  set(key: string, item: any) {
    localStorage.setItem(`${this.name}_${key}`, item);
  },
  remove(key: string) {
    localStorage.removeItem(`${this.name}_${key}`);
  },
  session_get(key: string) {
    const value = sessionStorage.getItem(`${this.name}_${key}`);
    return parseValue(value);
  },
  session_set(key: string, item: any) {
    sessionStorage.setItem(`${this.name}_${key}`, item);
  },
  session_remove(key: string) {
    sessionStorage.removeItem(`${this.name}_${key}`);
  },
};

export default storage;
