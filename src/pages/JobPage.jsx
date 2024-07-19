import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const JobPage = () => {
    const [job, setJob] = useState(null)
    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchJob = async () => {
            try{
                const res = await fetch(`http://localhost:8000/jobs/${id}`)
                const data = await res.json()
                setJob(data)
            }catch(e){
                console.log("Error fetching data", e)
            }finally{
                setLoading(false)
            }
        }

        fetchJob()
    }, [])
  return loading ? <Spinner />: (
   <h1> {job.title}</h1>    
  )

}

export default JobPage
