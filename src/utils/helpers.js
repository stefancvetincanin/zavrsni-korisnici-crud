export function capitalize(ulaz) {
  return ulaz.split(' ').map(ulaz => ulaz.charAt(0).toUpperCase() + ulaz.substring(1)).join(' ')
}

export function compareNameAsc(a, b) {
  if (a.name.last.trim() < b.name.last.trim()) return -1
  if (a.name.last.trim() > b.name.last.trim()) return 1
  else return 0
}

export function compareNameDsc(b, a) {
  if (a.name.last.trim() < b.name.last.trim()) return -1
  if (a.name.last.trim() > b.name.last.trim()) return 1
  else return 0
}

export function compareIdAsc(a, b) {
  if (a.userId < b.userId) return -1
  if (a.userId > b.userId) return 1
  else return 0
}

export function compareIdDsc(b, a) {
  if (a.userId < b.userId) return -1
  if (a.userId > b.userId) return 1
  else return 0
}

export function createAuthToken() {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}