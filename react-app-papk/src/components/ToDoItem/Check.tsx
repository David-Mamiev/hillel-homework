import { FC } from "react";
import { CheckProps } from "./interfaces";

const Check:FC<CheckProps> = ({ onSelect })  => (
    <div onClick={onSelect} className="to-do-list__item__check">Check</div>
);
export default Check;