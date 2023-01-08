
import React, { useRef, useEffect, useState } from "react";
import ListingPage from "./ListingPage";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/actionTypes"


function Listing() {
  const listInnerRef = useRef();
  const [currPage, setCurrPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [uid, setUid] = useState("");

  const dispatch = useDispatch();

    
  useEffect(() => {
    console.log("fhjghfjkdhg", uid)
    axios.post('https://api.mentro.tech/api/v3/users/getMentorList', { limit: 20, docId: uid }).then((res)=>{
      dispatch({type: actions.ADD_MENTOR, payload: {mentorList: res.data.mentorList}});
    //   console.log("uid", res.data.mentorList)
    setUid(res.data.mentorList[19].mentorData.uid)
    console.log(res.data.mentorList[19].mentorData.uid)
    console.log(res.data.mentorList, "P{P}{P")
    //   setUid(res.data.mentorList[res.data.mentorList.length-1].uid)
      setLoading(false);
    })  
    console.log(uid, "PPPOOPOP")
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