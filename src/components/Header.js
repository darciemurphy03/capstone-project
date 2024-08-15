import restaurant from '../rest.avif'

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-yellow-300 to-lime-700 inline-flex">
      <div className="w-2/3 p-5 pl-20 pr-20  ">
      <h2 className='text-2xl font-bold'>Little Lemon</h2>
      <h3 className='text-xl font-semibold'>Chicago</h3>
      <p>Non pariatur culpa qui minim.
        Non ipsum aliquip amet consectetur
        minim culpa. Fugiat eiusmod cillum consequat
        esse qui nostrud. Mollit dolore occaecat consectetur
        dolor culpa exercitation consectetur et. </p>
      <button className='bg-black text-white rounded-md p-3 mt-6 shadow-lg'>Reserve a Table</button>
    </div>
    <div className='mt-8 mr-8 '>
    <img src={restaurant} className='h-52 w-80 rounded-xl shadow-2xl mb-5'/>
    </div>
    </div>
  )
}
