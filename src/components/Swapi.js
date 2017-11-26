import React from 'react'

export const Swapi = (props) => {
  return (
    <div>
      {props.swapi.results ? <Table results={props.swapi.results} /> : 'Loading...'}
    </div>
  )
}

const Table = ({results}) => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>birth_year</th>
          <th>gender</th>
          <th>height</th>
          <th>mass</th>
          <th>eye_color</th>
          <th>hair_color</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, idx) =>
          <tr key={idx}>
            <th>{result['name']}</th>
            <td>{result['gender']}</td>
            <td>{result['birth_year']}</td>
            <td>{result['height']}</td>
            <td>{result['mass']}</td>
            <td>{result['eye_color']}</td>
            <td>{result['hair_color']}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
