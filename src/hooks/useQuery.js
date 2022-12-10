import { useState, useEffect } from "react"
import axios from "axios"

export const useQuery = async (request) => {
  const [response, setResponse] = useState([])


  useEffect(() => {
    request.then((data) => {
      setResponse([data])
    })
  }, [])

  return { response }
}