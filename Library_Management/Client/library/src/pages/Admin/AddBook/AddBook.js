import axios from 'axios';
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { SPRING_URL, URL } from '../../../config'
import './AddBook.css'


function AAddBook() {
    const [book_name, setBookName] = useState("");
    const [book_category, setBookCategory] = useState("");
    const [author, setBookAuthor] = useState("");
    const [publisher, setBookPublisher] = useState("");
    const [book_price, setBookPrice] = useState("");
    const [book_image, setBookImage] = useState(undefined);
    const [book_pdf, setBookPdf] = useState(undefined);
    const [description, setDescription] = useState(""); 

    const navigate = useNavigate()


    const addBook = () => {
      if (book_name.length === 0) {
        toast.warning('please enter book name')
      } else if (book_category.length === 0) {
        toast.warning('Please enter book category')
      } else if (author.length === 0) {
        toast.warning('Please enter author name')
      } else if (publisher.length === 0) {
        toast.warning('Please enter publisher name')
      } else if (book_price.length === 0) {
        toast.warning('Please enter book price')
      } else if (book_image.length === 0) {
        toast.warning('Please enter book image path')
      } else if (book_pdf.length === 0) {
        toast.warning('Please enter book image path')
      }else if (description.length === 0) {
        toast.warning('Please add book description')
      } else {
        const data = new FormData()
        data.append('book_name', book_name)
        data.append('book_category', book_category)
        data.append('author', author)
        data.append('publisher', publisher)
        data.append('book_price', book_price)
        data.append('book_image', book_image)
        data.append('book_pdf', book_pdf)
        data.append('description', description)


        const urlNode = `${URL}/admin/addBook`
        const urlSpring = `${SPRING_URL}/admin/addBook`
        axios.post(urlSpring, data).then((response) => {
          console.log('hello')
          const result = response.data
          console.log(result)
          if(result['status'] === 'success') {
            toast.success('Book successfully added')

            navigate('/AdminBookDetails')
          } else {
            toast.error("something went wrong!!!")
          }
        })
      }
    }

    
  return (
    <div className="container">
      <h1 className="title">Add Book In Library</h1>

      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="form">

            <div className="mb-3">
              <label  className="label-control">
                Book Name
              </label>
              <input
                onChange={(e) => {
                  setBookName(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label  className="label-control">
                Book Category
              </label>
              <input
                onChange={(e) => {
                  setBookCategory(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Book Author
              </label>
              <input
                onChange={(e) => {
                  setBookAuthor(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Book Publisher
              </label>
              <input
                onChange={(e) => {
                  setBookPublisher(e.target.value);
                }}
                type="text"
                className="form-control"
              />
            </div>


            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Book price
              </label>
              <input
                onChange={(e) => {
                  setBookPrice(e.target.value);
                }}
                type="number"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Book Image
              </label>
              <input
                onChange={(e) => {
                  setBookImage(e.target.files[0]);
                }}
                accept='image/*'
                type="file"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Book Pdf
              </label>
              <input
                onChange={(e) => {
                  setBookPdf(e.target.files[0]);
                }}
                accept='pdf/*'
                type="file"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Book Description
              </label>
              <textarea class="form-control" aria-label="With textarea" onChange={(e) => {
                setDescription(e.target.value);
              }}></textarea>
            </div>

            <div className="mb-3">
              <button  onClick={addBook} className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default AAddBook;
