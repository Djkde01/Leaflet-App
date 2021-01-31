import React from 'react'
import {MapContainer, TileLayer} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import '@styles/MapView.css'
import Markers from './Markers'


const MapView = () => {
    return (
        <MapContainer center={{lat: '4.798304', lng: '-75.686463'}} zoom={100}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Markers/>
        </MapContainer>
    )
}

export default MapView
