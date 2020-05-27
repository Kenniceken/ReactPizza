import React from "react";
import { BrowserRouter as Router,  Link } from "react-router-dom";
import styled from "styled-components";
import { yummiPizzacolor } from "../Assets/variables";
import { YummyTitle } from "../Assets/yummyTitle";

const MenuComponentStyled = styled.div`
    background-color: ${yummiPizzacolor};
    padding: 10px;
    position: fixed;
    width: 100%;
    z-index: 1000;
`;

const YummyLogo = styled(YummyTitle)`
    color: white;
`;



export function Menu() {
    return <MenuComponentStyled>
        <YummyLogo>
            <Router>
                <Link to={'/'}>
                    <img src="mainLogo.png" alt="" />
                </Link>
            </Router>
        </YummyLogo>
    </MenuComponentStyled>;
}