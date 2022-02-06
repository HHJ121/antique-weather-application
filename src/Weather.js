import React from "react";

import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form className="search-form">
                <input type="search" placeholder="Enter a city" autoComplete="no" autoFocus="on" />
                <input type="submit" value="🔍" />
            </form>
        </div>
    );
}