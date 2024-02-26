import clsx from 'clsx'

function PercentageBtn({func, curPercentage, num}){
  return(
    <button value={num} onClick={func} className={clsx(
    ' rounded font-mono font-bold bg-[#00494D] h-9 w-20 text-center text-[#f4fafa] cursor-pointer hover:bg-[#9fe8df] hover:text-[#00494D] transition-all duration-75',
    { 'bg-[#26C0AB] text-[#00494D]': curPercentage == num})}> {num}%</ button>
  )
}
export default PercentageBtn