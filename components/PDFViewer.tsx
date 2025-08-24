import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';

interface PDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
  fileName?: string;
}

export const PDFViewer = ({ isOpen, onClose, pdfUrl, title, fileName }: PDFViewerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Handle Escape key to close the viewer
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName || `${title.replace(' Experience', '').replace(' - ', '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLoad = () => {
    setIsLoading(false);
    setError(null);
  };

  const handleError = () => {
    setIsLoading(false);
    setError('Failed to load PDF. Please try downloading instead.');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full h-full bg-white dark:bg-gray-900 overflow-hidden pt-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full h-full bg-white dark:bg-gray-900 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 pt-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                  {title}
                </h2>
              </div>
              
              <div className="flex items-center space-x-2">
                {/* View in New Tab Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(pdfUrl, '_blank')}
                  className="flex items-center space-x-2 px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors"
                  title="Open PDF in New Tab"
                >
                  <FileText className="w-4 h-4" />
                  <span>Open New Tab</span>
                </motion.button>
                
                {/* Download Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownload}
                  className="flex items-center space-x-4 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                  title="Download PDF"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </motion.button>
                
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-1.5 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 relative h-[calc(100%-4rem)] pt-4">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-800">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">Loading PDF...</p>
                  </div>
                </div>
              )}
              
              {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-800">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      PDF Loading Error
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleDownload}
                        className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download PDF</span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open(pdfUrl, '_blank')}
                        className="flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Open in New Tab</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="w-full h-full overflow-auto bg-gray-100 dark:bg-gray-800 p-4 pt-8">
                {/* Try to use browser's built-in PDF viewer first */}
                <object
                  data={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&menubar=0&view=FitH`}
                  type="application/pdf"
                  className="w-full h-full border-0 bg-white dark:bg-gray-900 shadow-lg rounded-lg"
                  onLoad={handleLoad}
                  onError={handleError}
                >
                  {/* Fallback if object tag fails */}
                  <iframe
                    src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&menubar=0&view=FitH`}
                    className="w-full h-full border-0 bg-white dark:bg-gray-900 shadow-lg rounded-lg"
                    onLoad={handleLoad}
                    onError={handleError}
                    title={title}
                  />
                </object>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
