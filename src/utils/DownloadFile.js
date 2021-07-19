/**
 * @param {Blob} blob
 * @param {String} downloadType
 * @param {String} filename
 */

const DownloadFile = (blob, downloadType, filename) => {
  const fileURL = window.URL.createObjectURL(
    new Blob([blob], {
      type: downloadType,
    })
  );
  const fileLink = document.createElement("a");

  fileLink.href = fileURL;
  fileLink.setAttribute("download", filename);
  document.body.appendChild(fileLink);

  fileLink.click();
  document.body.removeChild(fileLink);
};

export default DownloadFile;
