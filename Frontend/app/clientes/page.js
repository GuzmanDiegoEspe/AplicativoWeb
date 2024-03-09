'use client'

import React, { Fragment, useState, useEffect } from 'react'
import Navbar from "../components/Navbar";
import Data_students from "./components/Data_students";
import Sidebar from "../components/Sidebar";
import Form from './components/Form';


export default function Home() {

    const [student, setStudent] = useState({
        id_card: '',
        name: '',
        last_name: '',
        group: ''
      })
    ////
      const [students, setStudents] = useState([])
    
      const [listUpdated, setListUpdated] = useState(false)
    
      useEffect(() => {
        const getStudents = () => {
          fetch('http://localhost:3001/api/students/')
          .then(res => res.json())
          .then(res => {console.log(res);setStudents(res.body)})
        } 
        getStudents()
        setListUpdated(false)
      }, [listUpdated])

      


  return (



    <Fragment>
      <div>
      <Navbar />
      <div className="flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="w-3/4">
        <Form student = {student} setStudent = {setStudent} />
          <Data_students student = {student} setStudent = {setStudent} students = {students} setListUpdated = {setListUpdated} />
        </div>
      </div>
    </div>
    </Fragment>



  );
}
