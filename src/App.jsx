import { useState } from 'react'
import logo from './assets/images/logo.svg'
import dollar from './assets/images/icon-dollar.svg'
import person from './assets/images/icon-person.svg'
import PercentageBtn from './PercentageBtn'
import clsx from 'clsx'


function App() {

  const [Bill, setBill ]= useState('')
  const [people, setPeople ]= useState('')
  const [curPercentage , setCurPercentage] = useState('')

  let tip ="0.00"
  let total = "0.00"


  function bill(event){
    setBill(event.target.value)
  }
 

  function People(event){
    setPeople(event.target.value)
  }
  

  function Percentage(event){
    setCurPercentage(event.target.value)
    
  }
 

  
  let calc=()=>{
     tip = (Bill * (curPercentage/100) / people).toFixed(2)

   let billNum = Number(Bill)

    total = ((billNum + (billNum * (curPercentage/100))) / people).toFixed(2)
    console.log(tip , total)
  }

  if (curPercentage != '' && Bill != '' && people != '') {
    calc()
  }

  let reset=()=>{
    setCurPercentage('')
    setBill('')
    setPeople('')
  }

  let custom = curPercentage != 5 && curPercentage != 10 && curPercentage != 15 && curPercentage !=25 && curPercentage!=50? curPercentage: '';
  
  
  



  let input=  'h-9 w-full bg-[hsl(189_41%_97%)] rounded font-mono font-bold text-[hsl(183_100%,_15%)] p-3 text-right outline-1 outline-[hsl(172_67%_45%)] before:content-dollar before:inline-block before:w-10 before:h-10 cursor-pointer'



  return <main className=' bg-[hsl(185_41%_84%)] h-screen w-screen flex flex-col  justify-center items-center'>
    <img src={logo} alt="" />
   
    <div className=' mt-8 h-fit w-3/4 bg-white rounded-xl max-w-[700px]  flex px-6 flex-col items-center md:flex-row py-8 md:min-w-[600px] gap-6 md:w3/4 md:h-96'>
      <div className=' w-fit md:w-1/2 flex flex-col gap-8 shrink-0'>
        <div>
        <div className=' flex items-center justify-between'>
        <p className=' text-[hsl(186_14%_43%)] font-mono font-bold
          text-sm mb-1 tracking-wide'>Bill</p>
          {(Bill<= 0 && Bill !='' ) && <p className=' text-red-500 font-mono
          text-xs mb-1 tracking-wide'>Can't be zero</p>}
        
          </div>
          <div className=' relative'>
          <input value={Bill} onChange={bill} className={clsx(
            input,
            {
              'outline-red-500': Bill<= 0 && Bill !=''
            }
          )} type="text" />
          <img className=' pointer-events-none absolute top-2 left-3 h-4 ' src={dollar} alt="" />
          </div>
          
        </div>
        <div className=' max-w-[260px]'>
        <p className=' text-[hsl(186_14%_43%)] font-mono font-bold
          text-sm mb-1 tracking-wide'>Selcted Tip %</p>
          <div className=' grid grid-flow-dense grid-cols-3 grid-rows-2 gap-2 resize-none'>
            <PercentageBtn
              func={Percentage}
              curPercentage={curPercentage}
              num={5}
            />
            <PercentageBtn
              func={Percentage}
              curPercentage={curPercentage}
              num={10}
            />
            <PercentageBtn
              func={Percentage}
              curPercentage={curPercentage}
              num={15}
            />
            <PercentageBtn
              func={Percentage}
              curPercentage={curPercentage}
              num={25}
            />
            <PercentageBtn
              func={Percentage}
              curPercentage={curPercentage}
              num={50}
            />
            <input value={custom}   onChange={Percentage}  placeholder='Custom' type="number" className='rounded font-mono  bg-[hsl(189_41%_97%)] h-9 w-20 text-right  font-bold p-2 text-[hsl(183_100%,_15%)] outline-1 outline-[hsl(172_67%_45%)] placeholder:text-[hsl(186_14%_43%)] placeholder:text-center'
            />
          </div>
          
        </div>

        <div>
          <div className=' flex items-center justify-between'>
        <p className=' text-[hsl(186_14%_43%)] font-mono font-bold
          text-sm mb-1 tracking-wide'>Number of People</p>
          {people === '0' && <p className=' text-red-500 font-mono
          text-xs mb-1 tracking-wide'>Can't be zero</p>}
        
          </div>
          <div className=' relative'>
          <input value={people} onChange={People} className={clsx(
            input,
            {
              'outline-red-500': people<= 0 && people !=''
            }
          )} type="text" />
          <img className=' pointer-events-none absolute top-2 left-3 h-4 ' src={person} alt="" />
          </div>
        </div>
      </div>


      <div className=' w-full bg-[hsl(183_100%_15%)] rounded-lg font-mono p-8 flex min-w-[270px] flex-col gap-[120px] '>
        <div className='flex flex-col gap-10'>
        <div className=' flex justify-between items-center'>
           <div>
            <p className=' text-[hsl(189_41%_97%)] text-sm'>Tip Amount</p>
            <p className=' text-xs text-[hsl(185_41%_84%)]'>/ person</p>
           </div>

           
           
           <p className=' font-bold text-3xl text-[hsl(172_67%_45%)] tracking-wider '><span className=' font-normal'>$</span>{tip}</p>
           
           
        </div>
        <div className=' flex justify-between items-center'>
           <div>
            <p className=' text-[hsl(189_41%_97%)] text-sm'>Total</p>
            <p className=' text-xs text-[hsl(185_41%_84%)]'>/ person</p>
           </div>

           
           
           <p className=' font-bold text-3xl text-[hsl(172_67%_45%)] tracking-wider'><span className=' font-normal'>$</span>{total}</p>
           
           
        </div>
        </div>

        <div>
            <button onClick={reset} className=' w-full h-8 text-[hsl(183_100%_15%)] font-bold text-sm rounded bg-[hsl(172_67%_45%)] hover:bg-[#9fe8df]  '>RESET</button>
        </div>
      </div>
    </div>
  </main>
}

export default App
