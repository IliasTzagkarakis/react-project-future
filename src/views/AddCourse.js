import React from "react";
import {useState} from 'react'
// import Datepicker from 'react-datepicker'
// import "react-datepicker/dist/react-datepicker.css"
import {useHistory} from 'react-router-dom';
import { Button,Container,FormGroup} from "reactstrap"
import {addCourse} from '../api/index'

const AddCourse = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate]= useState('')
    const [title,setTitle]=useState('');
    const [duration,setDuration]=useState('');
    const [imagePath,setImagePath]=useState('');
    const [normal, setNormal] = useState(0);
    const [earlybird, setEarlyBird] = useState(0);
    const history = useHistory();
    const [loading, setLoading]= useState(false);

    console.log(title);
    const   handleSubmit = async (e) =>{
        // e.preventDefault();
        const course = {
              title: title,
              imagePath: imagePath,
              price: {
                normal: normal,
                early_bird: earlybird
              },
              dates: {
                start_date: startDate,
                end_date: endDate
              },
              duration: duration,
              open: true,
              instructors: ["01"],
              description: "<p>This is a certified program by Athens Tech College, the first educational institution in Greece that specialises in computer science and ICT studies.</p><p>Participant’s registration (payment’s completion) implies full compliance and acceptance of Code.Learn Terms &amp; Conditions.</p>"
            };
            
        setLoading(true)

        // fetch('http://localhost:8000/data', {
        //     method: 'POST',
        //     headers: {"Content-Type": "application/json"},
        //     body: JSON.stringify(course)
        // }).then(()=>{
        //     console.log('new course')
        //     setLoading(false)
        //     history.push('/courses');
        // })
        await addCourse(course);

    }


  return(
  //  <h1>Add Course</h1>;

<div className="forms">
  <br></br>
  <Container>
            <h3>Add Course</h3>
        <form onSubmit={handleSubmit}>
        <FormGroup>
            <p>Title:</p>
            <input value ={title} placeholder="Title" className="inp" required  onChange={(e) => setTitle(e.target.value) }>

            </input>
            </FormGroup>
            <p>Duration:</p>
            <input value={duration} placeholder="Duration" className="inp" required onChange={(e) => setDuration(e.target.value)}>

            </input>
            <p>Image path:</p>

            <input value={imagePath} placeholder="Image path"className="inp" required onChange={(e) => setImagePath(e.target.value)}>



            </input>



            <div className="text">
            <br></br>
            <h4>
                <input type="checkbox"></input>
                &nbsp; Bookable
            </h4>
            </div>


            <div className="instructors">
                <h3>Instructors</h3>
                <div className="checkbox">
                    <input type="checkbox" />
                    &nbsp; Kakashi Hatake
                </div>
                <div className="checkbox">
                    <input type="checkbox" />
                    &nbsp; Namikaze Minato
                    </div>

            </div>
<br></br>
            <div className="text" >
            <p><b>Description:</b></p>
                <textarea className="inp"></textarea>

        </div>



            <h3>Dates</h3>

            <div className="dates">

                <p>Start date:</p>
            <input type="string" className="inp" value={startDate}  onChange={(e)=>setStartDate(e.target.value)}/>


            </div>

            <div className="dates">

                <p>End date:</p>
           <input type="string"  className="inp" value={endDate}  onChange={(e)=>setEndDate(e.target.value)}/>
            </div>
<br></br>
            <h3>Price</h3>

            <div className="price">
            <p>Early bird:</p>
            <input className="inp" value={earlybird} type="number" placeholder="0" required onChange={(e) => setEarlyBird(e.target.value)}></input>

            <p>Normal price:</p>
            <input  className="inp" value={normal} type="number" placeholder="0" required onChange={(e) => setNormal(e.target.value)}></input>
            </div>

            <p className="add">{ !loading && <Button  className="crs">Add course</Button>}</p>
            <p >{ loading && <button disabled>Adding course</button>}</p>
<br></br>
        </form>
        </Container>
        
    </div>

    



      );

};


export default AddCourse;
