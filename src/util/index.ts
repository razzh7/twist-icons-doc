export const download = (downfile: File) => {
  const link = document.createElement('a')
  const objectUrl = URL.createObjectURL(downfile)

  link.href = objectUrl
  link.download = downfile.name
  document.body.appendChild(link)
  link.click()

  document.body.removeChild(link)
  URL.revokeObjectURL(objectUrl)
}

export const downloadDataURL = (dataURL: string, filename: string) => {
  const link = document.createElement('a')
  link.href = dataURL
  link.download = filename
  link.click()

  document.body.removeChild(link)
}