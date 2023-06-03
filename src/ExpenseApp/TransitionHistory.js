import React from 'react'
import {Link} from 'react-router-dom'
const TransitionHistory = ({transactions, onDelete}) => {
  return (
    <div>
     <p className='tran3'>Transaction History</p>


     <div className='third'>
     <ul>
     { Object.keys(transactions).map((id, index)=> (
      <>
      {  
        <li className={transactions[id].type=== 'income' ? 'li1': 'li2'} key={id}>
            <div className='dis'>
                <div>
                
                <p className='salary'>{transactions[id].category}</p>
                <p className='des'>{transactions[id].name}</p>
                </div>
                <div className='doller'>
                <p className='five'> {transactions[id].amount}&#8377;</p>
                <p></p>
                <p></p>
                <Link to={`/home/${id}`}>
                <button className='bton'> <i class="bi bi-pencil-square delete2"></i></button>   
              </Link>
               
             
               
                <button className='bton' onClick={()=> onDelete(id)}> <i class="bi bi-x-circle delete"></i></button>    
                
                </div>
           
            </div>
        </li> }
        </>
        ))
     }
     </ul>
     </div>
    </div>
  )
}

export default TransitionHistory