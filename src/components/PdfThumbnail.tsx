"use client";

import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Configurar el worker de PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PdfThumbnailProps {
  pdfUrl: string;
  isExternalUrl?: boolean;
  width?: number;
  height?: number;
  className?: string;
}

export default function PdfThumbnail({ 
  pdfUrl, 
  isExternalUrl = false, 
  width = 200, 
  height = 280,
  className = ""
}: PdfThumbnailProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [absoluteUrl, setAbsoluteUrl] = useState<string | null>(null);

  // Asegurarse de que la URL sea absoluta
  useEffect(() => {
    if (isExternalUrl) {
      setAbsoluteUrl(pdfUrl);
    } else if (typeof window !== 'undefined') {
      // Convertir URL relativa a absoluta para react-pdf
      setAbsoluteUrl(`${window.location.origin}${pdfUrl}`);
    }
  }, [pdfUrl, isExternalUrl]);

  function onDocumentLoadSuccess() {
    setLoading(false);
    setError(false);
  }

  function onDocumentLoadError() {
    setError(true);
    setLoading(false);
  }

  return (
    <div className={`overflow-hidden rounded-lg ${className}`} style={{ width, height }}>
      {loading && (
        <div className="flex justify-center items-center h-full bg-gray-100">
          <span className="loading loading-spinner loading-md"></span>
        </div>
      )}
      
      {error && (
        <div className="flex justify-center items-center h-full bg-gray-100">
          <div className="text-center p-2">
            <div className="text-error text-sm">Error al cargar la vista previa</div>
          </div>
        </div>
      )}
      
      {absoluteUrl && !error && (
        <Document
          file={absoluteUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={<div className="flex justify-center items-center h-full bg-gray-100">
            <span className="loading loading-spinner loading-md"></span>
          </div>}
          options={{
            cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.4.120/cmaps/',
            cMapPacked: true,
            standardFontDataUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.4.120/standard_fonts/',
            withCredentials: isExternalUrl
          }}
        >
          <Page 
            pageNumber={1} 
            width={width}
            height={height}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="flex justify-center"
          />
        </Document>
      )}
    </div>
  );
} 