import React, { useState } from 'react'

const Form = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])
  function handleSubmit(e) {
    e.preventDefault()
    // console.log(fullName, email);
    // console.log('hello world');
    if (fullName && email) {
      const person = {id: new Date().getTime().toString(), fullName,email }
      console.log(person);
      setPeople((people) => {
        return [...people, person]
      })
      setFullName('')
      setEmail('')
    }
  }

  let handleFullName = (e) => {
    setFullName(e.target.value)
  }

  const handleEmail = function (e) {
    setEmail(e.target.value)
  }
  const remove =(id)=>{
      let newPeople = people.filter((person)=> person.id !== id )
      setPeople(newPeople)

  }

  const clearAll =()=>{
      setPeople([])
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='FullName'>FullName : </label>
          <input
            type='text'
            id='FullName'
            value={fullName}
            onChange={handleFullName}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='Email'>Email : </label>
          <input type='email' id='Email' value={email} onChange={handleEmail} />
        </div>
        <button type='submit' className='btn'>
          Add Client
        </button>
      </form>

      {people.map((person) => {
        const {id, fullName, email } = person

        return (
          <div className='person' key={id}>
            <h2>{fullName} </h2>
            <h2> {email} </h2>
            <button onClick={()=>remove(person.id)} className='btn-red'>remove</button>
          </div>
        )
      })}
      <button onClick={clearAll}  className='btn'>Clear All</button>
    </div>
  )
}

export default Form
