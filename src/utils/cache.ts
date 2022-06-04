class LocalCache {
  setCache(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value))
  }
  getCache(key: string) {
    const value = localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  deleteCache(key: string) {
    return localStorage.removeItem(key)
  }
  clearCache() {
    return localStorage.clear()
  }
}

export default new LocalCache()
