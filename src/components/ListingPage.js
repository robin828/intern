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
                <Card style={{ width: "19rem" }}>
                  <Card.Img
                    variant="top"
                    src={item.mentorData.profileUrl}
                    style={{ width: "10rem", height: "10rem" }}
                  />
                  <Card.Body>
                    <Card.Title>{item.mentorData.name}</Card.Title>
                    <Card.Text>
                      {item.mentorData.role} at {item.mentorData.organisation}
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
