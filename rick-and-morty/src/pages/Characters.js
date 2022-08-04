import React, { useCallback, useEffect, useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { getCharacters } from "../services/CharacterService";
import Pagination from "../components/Pagination";
import Navbar from "../components/Navbar";

const Characters = () => {
  const [listCharacters, setListCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const characters = useCallback(async () => {
    const response = await getCharacters(pageNumber, search);
    setListCharacters(response.results);
    setTotalPage(response.info.pages);
  }, [pageNumber, search]);

  useEffect(() => {
    characters();
  }, [characters]);

  return (
    <div className="row">
      <div className="container">
        <Navbar setSearch={setSearch} setPageNumber={setPageNumber} />
        {listCharacters?.map((item, index) => (
          <div key={index} className=" col">
            <Link
              className="text-decoration-none display-6 text-dark"
              to={"/character/" + item.id}
            >
              <Card image={item.image} name={item.name} status={item.status} />
            </Link>
          </div>
        ))}
        <div className="col">
          <Pagination
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            totalPage={totalPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Characters;
