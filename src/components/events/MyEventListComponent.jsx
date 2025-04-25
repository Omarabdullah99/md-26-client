import React from 'react'
import EventStore from '../../store/EventStore'
import ProductsSkeleton from '../../skeleton/products-skeleton'

const MyEventListComponent = () => {
    const {EventList,DeleteEventRequest} = EventStore()
    if(EventList === null){
        return <ProductsSkeleton />
    }
    
    const DeleteEvent=async(id)=>{
       await DeleteEventRequest(id)
    }

  return (
    <div>
        {EventList?.map((event)=>(
            <div key={event._id}>
                <h1>{event.name}</h1>
                <p>{event.location}</p>
                <button onClick={()=>DeleteEvent(event?._id)}>Delete</button>
            </div>
        ))}
    </div>
  )
}

export default MyEventListComponent