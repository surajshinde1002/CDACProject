import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router'
import { Document, Page, pdfjs } from "react-pdf";
import styled from "styled-components";
import './Single-page.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function SinglePage(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

    const { state } = useLocation()

    const { pdf } = state

    console.log("book pdf is :"+pdf)

    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setPageNumber(1);
    }
  
    function changePage(offset) {
      setPageNumber(prevPageNumber => prevPageNumber + offset);
    }
  
    function previousPage() {
      changePage(-1);
    }
  
    function nextPage() {
      changePage(1);
    }


  
    return (
      <PDFDocumentWrapper>
         
        <Document
          file={ 'http://localhost:8080/student/pdf/' + pdf }
          options={{ workerSrc: "/pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <div className="btndiv">
          <p>
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </p>
          <button class="btn btn-primary" id="btnn" type="button" disabled={pageNumber <= 1} onClick={previousPage}>
            Previous
          </button>
          <button
          id="btnn"
          class="btn btn-primary"
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      
      </PDFDocumentWrapper>
     
    );
  }

const PDFDocumentWrapper = styled.div`
canvas {
  width: 600px !important;
  height: 800px !important;
  margin-top: 90px
 
}
`;