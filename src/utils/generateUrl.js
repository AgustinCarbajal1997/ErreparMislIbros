/* eslint-disable no-undef */
export const generatePreviewUrl = item => {
  let DownloadURL;
  let URL;
  let fileName;

  if (item?.fileUrl != null) {
    if (item?.fileUrl?.includes('new-')) {
      DownloadURL =
        'https://portalerrepar.errepar.com/resources/images/appseparatas/' +
        item?.fileUrl?.replace('new-', '');
      URL =
        'https://docs.google.com/gview?embedded=true&url=https://portalerrepar.errepar.com/resources/images/appseparatas/' +
        item?.fileUrl?.replace('new-', '');
      if (item?.fileUrl?.includes('.xls')) {
        fileName = (item?.id + '.xls').replace(' ', '_');
      } else {
        fileName = (item?.id + '.pdf').replace(' ', '_');
      }
    } else {
      DownloadURL =
        'https://portalerrepar.errepar.com/resources/images/appseparatas/' +
        item?.id +
        item?.fileUrl;
      URL =
        'https://docs.google.com/gview?embedded=true&url=https://portalerrepar.errepar.com/resources/images/appseparatas/' +
        item?.id +
        item?.fileUrl;
      if (item?.fileUrl?.includes('xls')) {
        fileName = (item?.id + '.xls').replace(' ', '_');
      } else {
        if (item?.fileUrl?.includes('doc')) {
          fileName = (item?.id + '.doc').replace(' ', '_');
        } else {
          fileName = (item?.id + '.pdf').replace(' ', '_');
        }
      }
    }
    return {
      DownloadURL,
      URL,
      fileName,
    };
  } else {
    return null; // si no se puede armar la url pq falta fileUrl
  }
};
