const parseValue = (value: any) => {
  if (!value || value === "undefined") {
    return null;
  } else if (value.startsWith("{") && value.endsWith("}") || value.startsWith("[") && value.endsWith("]")) {
    return JSON.parse(value)
  } else {
    return value
  }
}

export const storage = {
  name: 'ss-new-admin',
  get: function (key: string) {
    const value = localStorage.getItem(this.name + '_' + key)
    return parseValue(value)
  },
  set: function (key: string, item: any) {
    localStorage.setItem(this.name + '_' + key, item)
  },
  remove: function (key: string) {
    localStorage.removeItem(this.name + '_' + key)

  },
  session_get: function (key: string) {
    const value = sessionStorage.getItem(this.name + '_' + key)
    return parseValue(value)
  },
  session_set: function (key: string, item: any) {
    sessionStorage.setItem(this.name + '_' + key, item)
  },
  session_remove: function (key: string) {
    sessionStorage.removeItem(this.name + '_' + key)
  }
}

export default storage
