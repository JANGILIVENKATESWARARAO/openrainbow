/**
 * App settings.
 *
 * Content: by default the JSON files are read from /public/data.
 * To load them from Google Drive (or any other URL) later:
 *   1. Upload site.json, services.json, solutions.json and blog.json and share them as
 *      "Anyone with the link can view".
 *   2. Paste each share link into remoteUrls below.
 *   3. Set remote to true.
 * If a remote file cannot be loaded, the app falls back to the local copy.
 */
export interface Environment {
  production: boolean;
  content: {
    /** false: read local JSON from /public/data. true: read from remoteUrls. */
    remote: boolean;
    /** Folder of the local JSON files, relative to the site root. */
    localPath: string;
    /**
     * Optional Google API key (Drive API enabled). With a key, Drive files are
     * read through the Drive API, which allows browser requests (CORS).
     */
    driveApiKey: string;
    remoteUrls: {
      site: string;
      services: string;
      solutions: string;
      blog: string;
    };
  };
  /** Contact form endpoint. Leave empty to keep the built-in mock. */
  contactApi: string;
}

export const environment: Environment = {
  production: false,
  content: {
    remote: false,
    localPath: 'data',
    driveApiKey: '',
    remoteUrls: {
      site: '',
      services: '',
      solutions: '',
      blog: '',
    },
  },
  contactApi: '',
};
