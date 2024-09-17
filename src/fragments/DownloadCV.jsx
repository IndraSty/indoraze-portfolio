import { FaDownload } from "react-icons/fa";

const DownloadCV = ({ cv }) => (
  <a
    href={cv}
    download
    className="flex gap-4 items-center justify-center p-4 mt-4 font-medium w-52 bg-primary rounded-lg text-white hover:bg-primary-hover"
  >
    Download CV <FaDownload />
  </a>
);

export default DownloadCV;
