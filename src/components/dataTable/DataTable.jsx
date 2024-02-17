import React from 'react'
import styles from './DataTable.module.css'
import img1 from '../../assets/table/Group.svg'
import img2 from '../../assets/table/Vector2.svg'
import img3 from '../../assets/table/Vector.svg'
import img4 from '../../assets/table/Group 63.svg'

const tableData = [
  {value1:"AMZN" , value2:"200" , value3:"-0.25" , value4:'Low Risk'},
  {value1:"AMZN" , value2:"200" , value3:"-0.25" , value4:'Low Risk'},
  {value1:"AMZN" , value2:"200" , value3:"0.25" , value4:'Low Risk'},
  {value1:"AMZN" , value2:"200" , value3:"-0.25" , value4:'Low Risk'},
  {value1:"AMZN" , value2:"200" , value3:"-0.25" , value4:'Low Risk'},
  {value1:"AMZN" , value2:"200" , value3:"-0.25" , value4:'Low Risk'},
  {value1:"AMZN" , value2:"200" , value3:"0.25" , value4:'Low Risk'},
  {value1:"AMZN" , value2:"200" , value3:"-0.25" , value4:'Low Risk'},
  {value1:"AMZN" , value2:"200" , value3:"0.25" , value4:'Low Risk'},
  {value1:"AMZN" , value2:"200" , value3:"-0.25" , value4:'Low Risk'},
  {value1:"AMZN" , value2:"200" , value3:"0.25" , value4:'Low Risk'},
  {value1:"AMZN" , value2:"200" , value3:"0.25" , value4:'Low Risk'},
  {value1:"AMZN" , value2:"200" , value3:"0.25" , value4:'Low Risk'},
  {value1:"AMZN" , value2:"200" , value3:"-0.25" , value4:'Low Risk'},
  {value1:"AMZN" , value2:"200" , value3:"0.25" , value4:'Low Risk'},
  {value1:"AMZN" , value2:"200" , value3:"-0.25" , value4:'Low Risk'},
]



function DataTable() {
  return (
    <div className={styles.table}>
      {tableData.map((ele,idx)=>(
        <ul className={styles.tableItem} key={idx}>
        <li>
          <img src={img1} alt="" />
          <p>{ele.value1}</p>
        </li>
        <li>
          <img src={img2} alt="" />
          <p>{ele.value2}</p>
        </li>
        <li>
          <img src={img3} alt="" />
          <p className={ele.value3 > 0 ? styles.UP : styles.DOWN}>{ele.value3} %</p>
        </li>
        <li>
          <img src={img4} alt="" />
          <p>{ele.value4}</p>
        </li>
      </ul>
      ))}
      
    </div>
  )
}

export default DataTable