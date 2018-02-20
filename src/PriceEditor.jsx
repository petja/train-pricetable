import React, {Component} from 'react'
import {render} from 'react-dom'

import DATA from './DATA.js'

const tail = ([x,...xs]) => xs

class PriceEditor extends Component {
    state = {
        priceData					: {},
        kmPrice						: 0,
        basePrice					: 0,
    }

    createTableHeader() {
        const cells = tail(DATA.pysahdykset).map(stop => {
            return (
                <th>
                    <strong>{stop.tunnus}</strong><br />
                    <small>{this.getStopName(stop)}</small>
                </th>
            )
        })

        return (
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    {cells}
                </tr>
            </thead>
        )
    }

    _findRanges() {
        const {priceData} = this.state

        let minDistance = null
        let maxDistance = null
        let minPrice = null
        let maxPrice = null

        Object.keys(priceData).forEach(stationA => {
            Object.keys(priceData[stationA]).forEach(stationB => {
                const {price, distance} = priceData[stationA][stationB]

                //console.log(stationA, stationB, {price, distance})

                if(!price || !distance) return
                if(price < minPrice || !minPrice) minPrice = price
                if(price > maxPrice || !maxPrice) maxPrice = price
                if(distance < minDistance || !minDistance) minDistance = distance
                if(distance > maxDistance || !maxDistance) maxDistance = distance
            })
        })

        console.log({minPrice, maxPrice, minDistance, maxDistance})

        const distanceDelta = maxDistance - minDistance
        const priceDelta = maxPrice - minPrice
        console.log('eeeeeeeeeeeeee', {distanceDelta, priceDelta})
        const kmPrice = priceDelta / distanceDelta
        const basePrice = maxPrice - (maxDistance * kmPrice)

        this.setState({
            kmPrice,
            basePrice,
        })
    }

    _getPriceBetweenStations(stopA, stopB) {
        const {priceData, basePrice, kmPrice} = this.state

        const distance = Math.abs(stopA.km - stopB.km)
        const price = Math.ceil((distance * kmPrice + basePrice) / 5) * 5

        return (price ? price : null)
    }

    _handlePriceChange(stopA, stopB, value) {
        const {priceData} = this.state

        const price = parseFloat(value)
        const distance = Math.abs(stopA.km - stopB.km)
        const pricePerKm = price / distance

        if(!priceData.hasOwnProperty(stopA.tunnus)) priceData[stopA.tunnus] = {}
        priceData[stopA.tunnus][stopB.tunnus] = {price, distance}

        this.setState({
            priceData
        }, () => {
            this._findRanges()
        })

        console.log({
            stopA				: stopA.tunnus,
            stopB				: stopB.tunnus,
            price,
            distance,
            pricePerKm,
        })
    }

    createInputCols(stopA, stopAIndex) {
        return tail(DATA.pysahdykset).map((stopB, stopBIndex) => {
            if(stopAIndex > stopBIndex) return <td>&mdash;</td>
            const title = `${stopA.tunnus}-${stopB.tunnus}`
            return (
                <td>
                    <input
                        size='2'
                        type='number'
                        min='1'
                        max='999'
                        className='price-input'
                        placeholder={this._getPriceBetweenStations(stopA, stopB) || '€'}
                        onInput={e => this._handlePriceChange(stopA, stopB, e.target.value)}
                        title={title}
                    />
                </td>
            )
        })
    }

    createTableRows() {
        const rows = DATA.pysahdykset.map((stop, stopIndex, arr) => {
            if(stopIndex === arr.length - 1) return null
            return (
                <tr>
                    <td>
                        <strong>{stop.tunnus}</strong><br />
                        <small>{this.getStopName(stop)}</small>
                    </td>
                    {this.createInputCols(stop, stopIndex)}
                </tr>
            )
        })

        return (
            <tbody>
                {rows}
            </tbody>
        )
    }

    render() {
        return (
            <div>
                <table>
                    {this.createTableHeader()}
                    {this.createTableRows()}
                </table>

                <br />
                <span><strong>Perushinta:</strong> &asymp;{this.state.basePrice.toFixed(2)} €</span><br />
                <span><strong>Kilometrihinta:</strong> &asymp;{this.state.kmPrice.toFixed(2)} €/km</span><br />
            </div>
        )
    }

    getStopName(stop, lang = 'fi') {
        const {nimi} = stop
        if (typeof nimi === 'string') return nimi
        return nimi.hasOwnProperty(lang) ? nimi[lang] : nimi.fi
    }
}

document.addEventListener('DOMContentLoaded', () => {
    render(<PriceEditor />, document.querySelector('#root'))
})
