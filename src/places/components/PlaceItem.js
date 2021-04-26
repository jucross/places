import React, { useState } from 'react'
import Button from '../../shared/components/FormElements/Button'
import Card from '../../shared/components/UIElements/Card'
import { Modal } from '../../shared/components/UIElements/Modal'

import './PlaceItem.css'

export const PlaceItem = ({place}) => {

    const [showMap, setShowMap] = useState(false);

    const openCloseMap=()=>{
        setShowMap(!showMap)
    }

    return (
        <>
        <Modal 
            show = {showMap}
            onCancel={openCloseMap}
            header={place.address}
            contentClass='place-item__modal-content'
            footerClass='place-item__modal-actions'
            footer={<Button onClick={openCloseMap} >Close</Button> }
        >
            <div className='map-container'>
                <h2>MAP</h2>
            </div>
        </Modal>
        <li className='place-item'>
        <Card className='place-item__content'>
            <div className='place-item__image'>
                <img src={place.imageUrl} alt={place.title} />

            </div>
            <div className='place-item__info'>
                <h2>{place.title}</h2>
                <h3>{place.address}</h3>
                <p>{place.description}</p>
            </div>
            <div className='place-item__actions'>
                <Button inverse onClick={openCloseMap}>View on map</Button>
                <Button to={`/places/${place.id}`}>Edit</Button>
                <Button danger>Delete</Button>
            </div>
        </Card>
        </li>
        </>
    )
}

