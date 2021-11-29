import React, { useEffect } from 'react'
import Card from './Card'
import { useState } from 'react'
import { LinearProgress } from '@material-ui/core';
import data from './sampledata.json'

const axios = require('axios')


function Items() {
    const [contests, updateContests] = useState([])
    useEffect(async () => {
        const response = await axios.get('https://kontests.net/api/v1/all')
        updateContests(data)
    }, [])

    return (
        <>
            {
                (contests.length === 0) ? <LinearProgress /> : <h3 className="mt-3 text-center">Items</h3>
            }
            <div className="container-fluid mb-5 mt-5">
                <div className="row">
                    <div className="col-10 mx-auto">

                        <div className="row gy-4">
                            {
                                contests.map((item) => {
                                    
                                    return (
                                        <Card
                                            name={item.name}
                                            imageurl={item.imageurl}
                                            price={item.price}
                                            owner={item.owner}
                                            contact={item.contact}
                                            description={item.description}

                                        />
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Items
