import React, {useState, useEffect} from 'react'
import Toggle from "./Toggle"

function List() {
    const [title, setTitle] = useState("Select Token")

    const [list, setList] = useState( [
        {
            id: 0,
            title: 'Ethereum',
            value: 'ETH',
            selected: false,
        },
        {
            id: 1,
            title: 'Bitcoin',
            value: 'BTC',
            selected: false,
        },
        {
            id: 2,
            title: 'Basic Attention Token',
            value: 'BAT',
            selected: false,
        },
        {
            id: 3,
            title: 'Chainlink',
            value: 'LINK',
            selected: false,
        }
        ])

    const toggleSelected = (newTitle) => {
        console.log(newTitle)
        setTitle(newTitle)
    }

  return (
    <div className="toggle">
        <Toggle
            title={title}
            list={list}
            toggleItem={toggleSelected}
        />
    </div>
  );
}


export default List
