import React, {useState} from 'react'

export default function About() {
    const [myStyle, setmyStyle]= useState({
    color: 'black',
    backgroundColor: 'white'

  })

  const [btnText, setBtnText] = useState("Enable Dark Mode");
   const toggleStyle=()=>{
    if(myStyle.color ==='black'){
        setmyStyle({
            color: 'white',
            backgroundColor: 'black',
            border: '1px solid white'
        })
        setBtnText("Enable light Mode")

        }else{
            setmyStyle({
                color: 'black',
                backgroundColor: 'white'
            })   
            setBtnText("Enable Dark Mode")
        }
    }
     
    return (
    <>
    <div className='container' style={myStyle}>
    <h2 className='mb-3'>About Us</h2>
   <div className="accordion" id="accordionExample" style={myStyle}>

   <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed " style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       What is a text analyser / word counter?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      It is aimed at any type of writer (author, journalist, student, etc.) who writes texts that are limited to a minimum and/or maximum number of words. It helps writers to identify unnecessary repetitions of words and promotes better harmonisation of the terminology being used. In addition, translators can easily calculate the price of a text based on their word rates.

This tool is also intended for teachers, who can use it to assess the level of difficulty and skill required to understand a text. They can also easily extract a list of vocabulary to study.

It is also useful for web page editors to optimise the content of a page by knowing in one click which expressions and keywords are the most used. </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About Text-utility
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      
This text analysis tool provides information on the complexity of a text, as well as statistics on word frequency and character count. It can be of assistance to translators when calculating quotes for clients.

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Who can use it?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse"  aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      It is aimed at any type of writer (author, journalist, student, etc.) who writes texts that are limited to a minimum and/or maximum number of words. It helps writers to identify unnecessary repetitions of words and promotes better harmonisation of the terminology being used. In addition, translators can easily calculate the price of a text based on their word rates.

This tool is also intended for teachers, who can use it to assess the level of difficulty and skill required to understand a text. They can also easily extract a list of vocabulary to study.

It is also useful for web page editors to optimise the content of a page by knowing in one click which expressions and keywords are the most used. </div>
    </div>
  </div>
</div>  
<div className='container my-2'>
<button type="button" onClick={toggleStyle} className='btn btn-primary mb-2'>{btnText}</button>

</div>
</div>
    </>
  )
}
