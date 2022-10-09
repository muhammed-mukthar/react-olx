import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import {useHistory} from 'react-router-dom'
import Header from '../Header/Header';
import {FirebaseContext,AuthContext} from '../../store/Context'
const Create = () => {
  const {firebase}= useContext(FirebaseContext)
  const {user}=useContext(AuthContext)
  const [name,SetName]=useState('');
  const [category,SetCategory]=useState('');
  const [price,SetPrice]=useState('');
  const [image,setImage]=useState('');
  const date=new Date()
  const history=useHistory()
  const handleSubmit=()=>{
firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
  ref.getDownloadURL().then((url)=>{
    firebase.firestore().collection('products').add({
      name,category,price,url,userId:user.uid,createdAt:date.toDateString()
    })
    history.push('/')
  })
})
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
        
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              value={name}
              onChange={(e)=>{SetName(e.target.value) }}
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=>{SetCategory(e.target.value)}}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" value={price} onChange={(e)=>{SetPrice(e.target.value)}} id="fname" name="Price" />
            <br />
          
          <br />
          <img  alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image): ''}></img>
       
            <br />
            <input onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit}  className="uploadBtn">upload and Submit</button>
       
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
