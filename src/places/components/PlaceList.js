import React from 'react'
import Card from '../../shared/components/UIElements/Card'
import { PlaceItem } from './PlaceItem'

import './PlaceList.css'
export const PlaceList = (props) => {

    if(props.item.length===0){
        return <div className='place-list center'>
            <Card>
                <h2>No places found. Maybe create one? </h2>
                <button>Share Place</button>
            </Card>
        </div>
    }


    return (
        <ul className='place-list'>
            {props.item.map((place) => {
                return <PlaceItem key={place.id} place={place} />
                
            })}
            
        </ul>
    )
}
