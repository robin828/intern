import React, { useRef, useEffect, useState } from "react";
import ListingPage from "./ListingPage";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { fetchData } from "../redux/service";
import { actions } from "../redux/actionTypes"


function Listing(props) {
  // alert("*ss*")
  const listInnerRef = useRef();
  //   const dispatch = useDispatch()
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
//   const [userList, setUserList] = useState([]);
  const [lastList, setLastList] = useState(false);
  const [docId, setDocIc] = useState();

  const dispatch = useDispatch();

const callApi = async (data) => {
    const response = await axios.post('https://api.mentro.tech/api/v3/users/getMentorList', data);
    return response.data;
  }

  useEffect(() => {
    dispatch({type: actions.ADD_MENTOR, payload: callApi({ limit: 20, docId: docId || "" })});

    // if(userList) {
    //     dispatch({type: actions.ADD_MENTOR, payload: callApi({ limit: 20, docId: userList[userList.length-1].mentorData.uid})});
    // }
    // else {
    //     dispatch({type: actions.ADD_MENTOR, payload: callApi({ limit: 20, docId: docId || "" })});
    // }
  }, [currPage]);
//   let userList = useSelector(state => (state.mentorList));
  const userList = useSelector((state)=>state);

//   console.log(list)
//   setUserList( ...list)

// console.log(useSelector(state => (state.userData.login.mentorList)))

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setCurrPage(currPage+1)
        // dispatch(fetchData({ limit: 20, docId: userList[userList.length-1].mentorData.uid || "" }));
      }
    }
  };
  console.log(userList, docId);

  return (
    <ListingPage
      onScroll={onScroll}
      listInnerRef={listInnerRef}
      userList={userList}
    />
  );
}

export default Listing;
