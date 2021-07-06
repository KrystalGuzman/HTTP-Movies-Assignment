import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {Button} from 'reactstrap'



const UpdateMovie = props => {
  const [ movie, setMovie ] = useState({ id: props.match.params.id })

  const { handleSubmit, register, errors } = useForm({});

  useEffect(() => {
  })

  const onSubmit = e => {
    const movieUpdate = {
      ...movie,
      stars: movie.stars.split(', '),
    };

    axios
      .put(`http://localhost:5000/api/movies/${props.match.params.id}`, movieUpdate)
      .then(res => {
        props.history.push('/')
      })
  }

  const handleChange = e => {
    setMovie({
      ...movie,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='form'>Form
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name='title'
          placeholder='Title'
          onChange={handleChange}
          ref={register({
            required: 'Title required.'
          })}
        />
        {errors.title && errors.title.message}
<br/>
        <input
          name='director'
          placeholder='Director'
          onChange={handleChange}
          ref={register({
            required: 'Director required.'
          })}
        />
        {errors.director && errors.director.message}
        <br/>
        <input
          name='metascore'
          placeholder='Metascore'
          onChange={handleChange}
          ref={register({
            required: 'Metascore required.'
          })}
        />
        {errors.metascore && errors.metascore.message}
        <br/>
        <input
          name='stars'
          placeholder='Stars'
          onChange={handleChange}
          ref={register({
            required: 'Stars required.'
          })}
        />
        {errors.stars && errors.stars.message}
        <br/>
        <Button type='submit'>
          Edit Movie
        </Button>
      </form>
    </div>
  )
}

export default UpdateMovie;