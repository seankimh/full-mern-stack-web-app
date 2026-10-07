import { useState, useEffect } from 'react'
import axios from 'axios'

const About = () => {
  const [aboutData, setAboutData] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_HOSTNAME}/about`)
      .then(response => {
        setAboutData(response.data)
      })
      .catch(err => {
        setError(JSON.stringify(err, null, 2))
      })
  }, [])

  if (error) {
    return <p>{error}</p>
  }

  if (!aboutData) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h1>{aboutData.title}</h1>
      <h2>{aboutData.name}</h2>

      <img
        src={aboutData.imageUrl}
        alt={aboutData.name}
        width="300"
      />

      {aboutData.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </>
  )
}

export default About