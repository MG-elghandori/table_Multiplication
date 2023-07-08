import {React,useEffect,useState} from 'react';
import  './style.css';
export default function App(){
 const[Nomber1,setNomber1]=useState()
 const[Nomber2,setNomber2]=useState()
 const[Resultats,setResultats]=useState()
 const [MessageErr,setMessageErr]=useState()
 const [status,setstastut]=useState(true)
 const limi =Nomber2;
 const[theme,setTheme]=useState(false)
 const limit = [];

function calc() {
  if(Nomber2==null ){ 
     setMessageErr('entre limite')
     setstastut(false)
   if(Nomber1==null){
  setMessageErr('entre le nombre que vous voulez')
  setstastut(false)
   }
  }else{
    setstastut(true)
 
    for (let i = 0; i <= limi; i++) {
    limit.push(i);
     }
  
    setResultats(limit.map((l) => {
      return Nomber1 + ' X ' + l + ' = ' + Number(Nomber1) * Number(l);
    }).join('\n'));
   }
  
}


useEffect(()=>{
if(theme){
  document.body.style='background-color: black;'
  document.querySelector('.parent').style='background-color: #494949;'
  const font_media=document.querySelectorAll('.font-media');
  font_media[0].style='color:white;'
  font_media[1].style='color:white;'
}else{
  document.body.style='background-color:white;'
  document.querySelector('.parent').style='background-color:white ;'
  const font_media=document.querySelectorAll('.font-media');
  font_media[0].style='color:black;'
  font_media[1].style='color:black;'
}
},[theme])



  return(
    <div>
    <div className=' parent container card shadow-lg mt-3 p-3 col-8'>

      <div className='d-flex justify-content-between '>
      <h3 className='text-primary titre-media'>Table de multiplication</h3>
           <label class="switch">
           <input type="checkbox" onClick={()=>setTheme(theme==true?false:true)}/>
             {/* <input type="checkbox" onClick={()=>setTheme(!theme)}/> */}
             <span class="slider"></span>
           </label>
      </div>
      

      <div className='  d-flex justify-content-around mt-3 mediaFlex'>

        <div className='fs-5 font-media'> Le nombre que vous voulez</div>

        <div className='col-12 col-sm-6 col-md-4 col-lg-2'>
               <input type='number' onChange={(e)=>setNomber1(e.target.value)}  class="form-control "/>
        </div>
   
        <div  className='fs-5 font-media'> Nombre limite </div>

        <div className='col-12 col-sm-6 col-md-4 col-lg-2 '>
               <input type='number' onChange={(e)=>setNomber2(e.target.value)} class="form-control"/>
        </div>

        <button onClick={calc} className='btn btn-primary col-12 col-sm-6 col-md-4 col-lg-2 btn-media'>Afficher</button>

      </div>

      <hr/>
      <div className='col-12 col-sm-6'>
        <textarea className="form-control" rows='11' value={Resultats}/>
      </div>
      </div>
      {
      status==false?
      MessageErr && (
           <div className="container col-8 text-center alert alert-danger mt-2 ">
        {MessageErr}
       </div>
       ):''}
    </div>
  )
}