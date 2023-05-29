import React from 'react'

const TransitionHistory = ({transactions, onDelete}) => {
  return (
    <div>
     <p className='tran3'>Transaction History</p>
     <div className='third'>

     
     <ul>
     { transactions.map((data)=> (
      <>
      {data.type=== 'income' ? 
        <li className='li1' key={data.id}>
            <div className='dis'>
                <div>
                <p className='salary'>{data.category}</p>
                <p className='des'>{data.name}</p>
                </div>
                <div className='doller'>
                <p className='five'>${data.amount}</p>
                <button className='bton' onClick={()=> onDelete(data.id)}> <i class="bi bi-x-circle delete"></i></button>    
                </div>
           
            </div>
        </li> :  <li className='li2' key={data.id}>
            <div className='dis'>
                <div>
                <p className='salary'>{data.category}</p>
                <p className='des'>{data.name}</p>
                </div>
                <div className='doller'>
                <p className='five'>${data.amount}</p>
                <button className='bton' onClick={()=> onDelete(data.id)}> <i class="bi bi-x-circle delete"></i></button>
                   
                </div>
           
            </div>
        </li>}
        </>
        ))
     }
     </ul>
     </div>
    </div>
  )
}

export default TransitionHistory