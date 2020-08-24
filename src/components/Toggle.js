import React, {useState, useEffect} from 'react'
import FontAwesome from 'react-fontawesome'

function Toggle(info) {
    
    const [data, setData] = useState({
        listOpen: false,
        headerTitle: info.title
    })

    useEffect(() => { 
        setData({...data, headerTitle: info.title})
    }, [info.title]);

    const handleClickOutside = () => {
        setData({
        ...data,
          listOpen: false
        })
    }
    
    const toggleList = () =>{
        setData(prevState => ({
            ...data,
          listOpen: !prevState.listOpen
        }))
      }

    return(
        <div className="dd-wrapper">
        <div className="dd-header" onClick={() => toggleList()}>
            <div className="dd-header-title">{data.headerTitle}</div>
            {data.listOpen
            ? <FontAwesome name="angle-up" size="2x"/>
            : <FontAwesome name="angle-down" size="2x"/>
            }
        </div>
            {data.listOpen && <ul className="dd-list">
            {info.list.map((item) => (
             <li className="dd-list-item" key={item.id} onClick={() => info.toggleItem(item.title)}>{item.title} {item.selected && <FontAwesome name="check"/>}</li>
            ))}
          </ul>}
        </div>
      )
  }
  
  export default Toggle;
  