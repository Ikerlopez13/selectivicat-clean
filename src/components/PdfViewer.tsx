"use client";

import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Configurar el worker de PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PdfViewerProps {
  pdfUrl: string;
  title?: string;
  isExternalUrl?: boolean;
  viewUrl?: string;
}

export default function PdfViewer({ pdfUrl, title, isExternalUrl = false, viewUrl }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
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

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
    setLoading(false);
    setError(false);
  }

  function onDocumentLoadError(error: Error) {
    console.error('Error al cargar el PDF:', error);
    setErrorMessage(error.message);
    setError(true);
    setLoading(false);
  }

  function changePage(offset: number) {
    if (numPages === null) return;
    const newPageNumber = pageNumber + offset;
    if (newPageNumber >= 1 && newPageNumber <= numPages) {
      setPageNumber(newPageNumber);
    }
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  function zoomIn() {
    setScale(prevScale => Math.min(prevScale + 0.2, 3.0));
  }

  function zoomOut() {
    setScale(prevScale => Math.max(prevScale - 0.2, 0.5));
  }

  function resetZoom() {
    setScale(1.0);
  }

  return (
    <div className="flex flex-col items-center w-full">
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        <button onClick={previousPage} disabled={pageNumber <= 1} className="btn btn-primary btn-sm">
          Anterior
        </button>
        <button onClick={nextPage} disabled={pageNumber >= (numPages || 1)} className="btn btn-primary btn-sm">
          Siguiente
        </button>
        <span className="px-4 py-2 bg-base-200 rounded-md">
          Página {pageNumber} de {numPages || '?'}
        </span>
        <button onClick={zoomIn} className="btn btn-secondary btn-sm">
          Zoom +
        </button>
        <button onClick={zoomOut} className="btn btn-secondary btn-sm">
          Zoom -
        </button>
        <button onClick={resetZoom} className="btn btn-secondary btn-sm">
          Reset Zoom
        </button>
        
        {/* Botón para ver en Selecat si viewUrl está disponible */}
        {viewUrl && (
          <a href={viewUrl} target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-sm">
            Ver en Selecat
          </a>
        )}
      </div>

      <div className="border border-base-300 rounded-lg p-2 bg-base-200 w-full max-w-4xl overflow-auto">
        {loading && (
          <div className="flex justify-center items-center h-[600px]">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
        
        {error && (
          <div className="flex flex-col justify-center items-center h-[600px] text-center p-4">
            <div className="text-error text-xl mb-4">Error al cargar el PDF</div>
            <p className="mb-4">No se ha podido cargar el documento.</p>
            <p className="text-sm mb-6">Detalles: {errorMessage}</p>
            <p className="text-sm mb-2">URL: {absoluteUrl}</p>
            
            <div className="flex gap-2 mt-4">
              <a 
                href={absoluteUrl || '#'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                Descargar PDF
              </a>
              
              {viewUrl && (
                <a 
                  href={viewUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-accent"
                >
                  Ver en Selecat
                </a>
              )}
            </div>
          </div>
        )}
        
        {absoluteUrl && !error && (
          <Document
            file={absoluteUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<span className="loading loading-spinner loading-lg"></span>}
            options={{
              cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.4.120/cmaps/',
              cMapPacked: true,
              standardFontDataUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.4.120/standard_fonts/',
              withCredentials: isExternalUrl
            }}
          >
            <Page 
              pageNumber={pageNumber} 
              scale={scale}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="flex justify-center"
            />
          </Document>
        )}
      </div>
    </div>
  );
} 