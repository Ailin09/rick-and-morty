import React, { useCallback, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getCharactersById } from "../services/CharacterService";
import styles from "./characterDetail.module.css";

const CharacterDetail = () => {
  const [detailCharacter, setdetailCharacter] = useState({});
  const { name, status, species, gender, origin, location, image, created } =
    detailCharacter;
  const { id } = useParams();
  const getDetailCharacterById = useCallback(async () => {
    const response = await getCharactersById(id);
    setdetailCharacter(response);
  }, [id]);

  useEffect(() => {
    getDetailCharacterById();
  }, [getDetailCharacterById]);

  return (
    <div className={styles.body}>
      <Navbar showSearch={false} />
      <div className="container d-flex justify-content-center ">
        <div className="d-flex flex-column gap-3 ">
          <div className={`card  ${styles.card}`}>
            <h1 className="text-white text-center p-3">{name}</h1>
            {(() => {
              if (status === "Dead") {
                return (
                  <img
                    className={`img-responsive border border-danger border-5  ${styles.image}`}
                    src={image}
                    alt=""
                  />
                );
              }
              if (status === "Alive") {
                return (
                  <img
                    className={`img-responsive border border-success border-5  ${styles.image}`}
                    src={image}
                    alt=""
                  />
                );
              }
              if (status === "unknown") {
                return (
                  <img
                    className={`img-responsive border border-dark border-5  ${styles.image}`}
                    src={image}
                    alt=""
                  />
                );
              }
            })()}
            <div className="content p-3 ">
              <div className="text-white p-1">
                <span className="fw-bold  ">Gender: {gender} </span>
              </div>
              <div className="text-white p-1">
                <span className="fw-bold  ">Status: {status} </span>
              </div>

              <div className="text-white p-1 ">
                <span className="fw-bold ">Location: {location?.name} </span>
              </div>
              <div className="text-white p-1 ">
                <span className="fw-bold ">Origin: {origin?.name} </span>
              </div>
              <div className="text-white p-1 ">
                <span className="fw-bold ">Species: {species} </span>
              </div>
              <div className="text-white p-1 ">
                <span className="fw-bold ">Created: {created} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
