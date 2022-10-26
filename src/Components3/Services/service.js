/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState, useEffect } from "react";
import "./service.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Button, Card } from "react-bootstrap";

function Service({ Google }) {
  const [post, setPost] = useState([]);

  // useEffect(() => {

  //   if(Google.toLowerCase()==="tesla"){
  //   axios
  //     .get(
  //       "https://newsapi.org/v2/everything?q=Tesla&apiKey=cb6298559dee4a08ac9bcc7f133681a6")
  //     .then((res) =>
  //       setPost(res.data.articles)
  //     )
  //   }

  //   else if(Google.toLowerCase()==="cricket"){
  //     axios
  //       .get(
  //         "https://newsapi.org/v2/everything?q=Cricket&apiKey=cb6298559dee4a08ac9bcc7f133681a6")
  //       .then((res) =>
  //         setPost(res.data.articles)
  //       )
  //     }

  //     else if(Google.toLowerCase()==="freefire"){
  //       axios
  //         .get(
  //           "https://newsapi.org/v2/everything?q=freefire&apiKey=cb6298559dee4a08ac9bcc7f133681a6")
  //         .then((res) =>
  //           setPost(res.data.articles)
  //         )
  //       }

  //     axios
  //       .get(
  //         "https://newsapi.org/v2/everything?q=Everything&apiKey=cb6298559dee4a08ac9bcc7f133681a6")
  //       .then((res) =>
  //         setPost(res.data.articles)
  //       )
  // }, [Google])

  useEffect(() => {
    console.log(Google, "value");
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${Google}&apiKey=cb6298559dee4a08ac9bcc7f133681a6`
      )
      .then((res) => setPost(res.data.articles));
  }, [Google]);

  const values = post.map((res) => {
    return (
      <div className="Card col-3">
        <Card className="Card">
          <Card.Img variant="top" src={res.urlToImage} />
          <Card.Body>
            <Card.Title>{res.title}</Card.Title>
            <Card.Text>{res.description}</Card.Text>
            <Button className="Somewhere-button" href={res.url} target="_blank">
              Learn More
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  });

  return (
    <div className="Service">
      <div className="row">{values}</div>
    </div>
  );
}

export default Service;
