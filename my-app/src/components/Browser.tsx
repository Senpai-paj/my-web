import { useState, useRef } from "react";

interface BrowserProps {
  url: string;
}

export default function Browser({ url }: BrowserProps) {
  const [loading, setLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleRefresh = () => {
    if (iframeRef.current) {
      setLoading(true);
      iframeRef.current.src = iframeRef.current.src; // reload iframe
    }
  };

  return (
    <div className="w-full flex justify-center mt-4">
      <div className="w-full max-w-4xl h-[600px] rounded-md overflow-hidden border border-gray-300 shadow-lg bg-white">
        
        {/* Browser top bar */}
        <div className="h-10 flex items-center px-3 bg-slate-700 ">

          <div className="flex gap-2">
            <span className="w-4 h-4 bg-red-500 rounded-full"></span>
            <span className="w-4 h-4 bg-yellow-400 rounded-full"></span>
            <span
                className="w-4 h-4 bg-green-500 rounded-full cursor-pointer"
                onClick={handleRefresh}
                title="Refresh"
            >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 30 30">
                    <path d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z"></path>
                </svg>
            </span>

          </div>

          <div className="h-6 flex items-center px-2 text-xs overflow-hidden">
            {url}
          </div>
        </div>

        {/* Iframe wrapper with loader */}
        <div className="relative w-full h-[calc(100%-2.5rem)] bg-black">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
              <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          )}

          <iframe
            src={url}
            className={`w-full h-full border-none transition-opacity duration-500 ${
              loading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setLoading(false)}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
