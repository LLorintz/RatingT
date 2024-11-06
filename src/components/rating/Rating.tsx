
import { FormEvent, useState } from 'react'
import star from '../../../images/icon-star.svg'
import thankYou from '../../../images/illustration-thank-you.svg'
import {motion} from 'framer-motion'

const Rating = () => {

  const [isSubmited,setIssubmited] = useState(true)
  const [rate, setRate] = useState(0)

 const handleSubmit = (e:FormEvent)=>{
  e.preventDefault();
  setIssubmited(!isSubmited)
 }

 const handleRateChange = (rate:number)=>{
   setRate(rate)
 }

if(isSubmited){
 return (
    <motion.form
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:3}}
    exit={{opacity:0}}
    onSubmit={handleSubmit} className='container'>
       <div className='star-container'>
           <img src={star} alt="" />
       </div>
       <h1>How did we do?</h1>
       <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
       <div className='button-group'>
           {[1,2,3,4,5].map(button=>(
               <button onClick={()=>handleRateChange(button)} type='button'>{button}</button>
           ))}
       </div>
       <button type='submit' className='btn'>submit</button>
   </motion.form>)
    }
   else{
   return( 
   <motion.div
    initial={{scale:0}}
    animate={{scale:1}}
    transition={{duration: 3}}
    exit={{scale:0}}
    className='container thankyou'>
      <img src={thankYou} alt="" />
  
        <p className='selectedrate'>You selected {rate} out of 5</p>
     
      <h1>Thank you!</h1>
      <p>We appreciate yout taking the time to give rating. If you ever need more support, don' hesitate to get in touch!</p>
    </motion.div>)
   } 
}

export default Rating