/**
 * Turns a Google Drive share link into a URL the browser can download JSON from.
 * Other links (any normal https URL) are returned unchanged.
 *
 * Supported Drive formats:
 *   https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 *   https://drive.google.com/open?id=FILE_ID
 *   https://drive.google.com/uc?id=FILE_ID&export=download
 */
export function contentUrl(link: string, driveApiKey = ''): string {
  const url = link.trim();
  if (!url) return '';

  const id = driveFileId(url);
  if (!id) return url;

  // The Drive API supports browser (CORS) requests. The plain download link often does not.
  return driveApiKey
    ? `https://www.googleapis.com/drive/v3/files/${id}?alt=media&key=${encodeURIComponent(driveApiKey)}`
    : `https://drive.google.com/uc?export=download&id=${id}`;
}

export function driveFileId(url: string): string | null {
  if (!/drive\.google\.com|drive\.usercontent\.google\.com/.test(url)) return null;
  const fromPath = url.match(/\/file\/d\/([\w-]+)/);
  if (fromPath) return fromPath[1];
  const fromQuery = url.match(/[?&]id=([\w-]+)/);
  return fromQuery ? fromQuery[1] : null;
}
