import { React } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
function ListingPage({ onScroll, listInnerRef, userList }) {
  console.log(userList);
  return (
    <div>
      <div
        onScroll={onScroll}
        ref={listInnerRef}
        style={{
          height: "100vh",
          overflowY: "auto",
          display: " flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {userList &&
          userList.map((item, index) => {
            return (
              <>
                <Card style={{ width: "19rem", margin: '2px' }}>
                  <Card.Img
                    variant="top"
                    src={item.mentorData.profileUrl}
                    style={{ width: "10rem", height: "10rem" }}
                  />
                  <Card.Body>
                    <Card.Title
                      style={{
                        color: "#424259",
                        fontFamily: "Poppins,sans-serif",
                        fontSize: "1.15em",
                        fontWeight: 500,
                        margin: 0,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.mentorData.name}
                    </Card.Title>
                    <Card.Text
                      style={{
                        color: "#8e939f",
                        fontFamily: "Poppins,sans-serif",
                        fontSize: "1em",
                        fontWeight: 400,
                        margin: "0.3em 0 0",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        width: "100%",
                      }}
                    >
                      {item.mentorData.role} at {item.mentorData.organisation}
                    </Card.Text>
                    <Card.Text
                    >
                      {item.mentorData.interests.slice(0, 2).map((i, ind) => {return <>
                      <span style={{
                        background: "rgba(76,175,80,.08)",
                        borderRadius: "4px",
                        color: "#4caf50",
                        display: "inline-block",
                        fontFamily: "Poppins,sans-serif",
                        fontSize: ".8em",
                        fontWeight: 400,
                        margin: "0.4em 0.5em 0 0",
                        maxWidth: "150px",
                        overflow: "hidden",
                        padding: "0.3em 1em",
                        textAlign: "center",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}>{i + "  " }</span>
                        
                      </>})}
                      {/* <span style={{
                        background: "rgba(76,175,80,.08)",
                        borderRadius: "4px",
                        color: "#4caf50",
                        display: "inline-block",
                        fontFamily: "Poppins,sans-serif",
                        fontSize: ".8em",
                        fontWeight: 400,
                        margin: "0.4em 0.5em 0 0",
                        maxWidth: "150px",
                        overflow: "hidden",
                        padding: "0.3em 1em",
                        textAlign: "center",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}>{item.mentorData.interests[0]+ "  "}</span> */}
                    </Card.Text>
                    <Button
                      style={{
                        background: "#4caf50",
                        borderRadius: "4px",
                        fontSize: ".9em",
                        fontWeight: 500,
                        minHeight: "32px",
                        padding: 0,
                        textAlign: "center",
                        width: "90%",
                        color: "#fff",
                      }}
                      variant="primary"
                    >
                      Start Session
                    </Button>
                  </Card.Body>
                </Card>
              </>
            );
          })}
      </div>
    </div>
  );
}

export default ListingPage;
