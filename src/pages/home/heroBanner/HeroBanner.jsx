import React, { useState } from 'react'
import "./style.scss"
import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();


    const searchQueryHandler = (event) => {
        if(event.key === "Enter" && query.length > 0){
            navigate(`/search/${query}`)
        }
    }

  return (
    <div className="heroBanner">
            {/* {!loading && (
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            )} */}

            <div className="opacity-layer"></div>
            {/* <ContentWrapper> */}
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subTitle">
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show...."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button>Search</button>
                    </div>
                </div>
            {/* </ContentWrapper> */}
        </div>
  )
}

export default HeroBanner