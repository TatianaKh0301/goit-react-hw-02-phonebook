import React from "react";
import { LabelFilter, InputFilter } from "./Filter.styled";

export const Filter = ({value, onChange}) => {
    return(
        <LabelFilter>
          Find contacts by name <InputFilter type="text" value={value} onChange={onChange}/>
        </LabelFilter>
    );
}