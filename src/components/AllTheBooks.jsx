import { Col, Row } from 'react-bootstrap'
import SearchBar from './SearchBar'
import SingleBook from './SingleBook'
import { useState } from 'react'

const AlltheBooks = (props) => {

  const [search, setSearch] = useState('');
  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <>
      <Row className='py-4'>
        <Col>
          <SearchBar search={search} handleSearch={handleSearch} />
        </Col>
      </Row>
      <Row>
        {props.books
          .filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
          .map(book => <SingleBook key={book.asin} book={book} />)
        }
      </Row>
    </>
  )
}

export default AlltheBooks;


