class HashTable {
  table = {} 
  toStrFn (item) {
    if (item === null) {
      return "NULL"
    } else if (item === undefined) {
      return "UNDEFINED"
    } else if (typeof item === 'string' || item instanceof String) {
      return item
    }
    return JSON.stringify(item)
  }
  hashCode (key) {
    const tableKey = this.toStrFn(key);
    let hash = 5381;
    for (let i = 0; i < tableKey.length; i++) {
      hash = (hash * 33) + tableKey.charCodeAt(i);
    }
    return hash % 1013;
  }
  set (key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      this.table[position] = { key, value }
      return true
    }
    return false
  }
  get (key) {
    const value = this.table[this.hashCode(key)].value
    return value == null ? undefined : value
  }
  remove (key) {
    const hash = this.hashCode(key)
    const valuepari = this.table[hash]
    if (valuepari != null) {
      delete this.table[hash]
      return true
    }
    return false
  }
}

const table = new HashTable()
table.set("userName",'张居正')
table.set("year", 1566)
table.set({ age: 100 }, 100)
console.log(table);
table.remove("userName")
table.remove("year")
console.log(table);

