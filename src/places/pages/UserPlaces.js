import React from 'react'
import { useParams } from 'react-router'
import { PlaceList } from '../components/PlaceList'

const dummy =[
    {
        id:'p1',
        title:'Dummy',
        description:'Dummy place for experiment',
        imageUrl:'',
        address:'somenthing',
        location:{
                lat:40,
                lon:70
            },
        creator:'u1'
    },
    {
        id:'p2',
        title:'Dummy 2',
        description:'Dummy place for experiment',
        imageUrl:'',
        address:'',
        location:{
                lat:40,
                lon:70
            },
        creator:'u2'
    }
]

export const UserPlaces = () => {
    
    const userId = useParams().userId
    const loadedPlaces = dummy.filter(place => place.creator===userId)

    return (

        <PlaceList item={loadedPlaces}/>
    )
}
