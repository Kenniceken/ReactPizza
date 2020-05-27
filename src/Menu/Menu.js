import React from "react";
import styled from "styled-components";
import { yummiPizzacolor } from "../Assets/variables";
import { YummyTitle } from "../Assets/yummyTitle";

const MenuComponentStyled = styled.div`
    background-color: ${yummiPizzacolor};
    padding: 10px;
`;

const YummyLogo = styled(YummyTitle)`
    font-size: 30px;
    color: white;
`;



export function Menu() {
    return <MenuComponentStyled>
        <YummyLogo>
            <img src="mainLogo.png" alt="" />
        </YummyLogo>
    </MenuComponentStyled>;
}