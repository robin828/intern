
import React, { useRef, useEffect, useState } from "react";
import ListingPage from "./ListingPage";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/actionTypes"


function Listing() {
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();


  useEffect(() => {

    axios.post('https://api.mentro.tech/api/v3/users/getMentorList',{ limit: 20, docId: "" }).then((res)=>{
      dispatch({type: actions.ADD_MENTOR, payload: {mentorList: res.data.mentorList}});
      setLoading(false);
    })  
    
  }, [currPage]);
  const userList = useSelector((state)=>state);

  const onScroll = () => {
    setLoading(true);
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setCurrPage(currPage+1)
      }
    }
  };
  return (
    <>
      <ListingPage
        onScroll={onScroll}
        listInnerRef={listInnerRef}
        userList={userList}
      />
      {
        (loading)?(<h1>loading...</h1>):(<></>)
      }
    </>
    
  );
}

export default Listing;