const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/images/resume.pdf'
    link.download = 'resume'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <button className="download-button" onClick={handleDownload}>
      Resume
    </button>
  )
}

export default DownloadButton
