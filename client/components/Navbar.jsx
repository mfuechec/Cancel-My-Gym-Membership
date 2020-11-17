import React from 'react';
import {
  Link
} from "react-router-dom";

export default function Navbar() {
    return (
        <div id='navbar'>
            <Link id='link' to="/">Cancel My Gym Membership</Link>
        </div>
    )
}