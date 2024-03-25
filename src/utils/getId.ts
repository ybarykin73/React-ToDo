const getId = (): number => {
  const data = new Date()

  return data.getDate() + data.getMinutes() + data.getSeconds()
}

export default getId