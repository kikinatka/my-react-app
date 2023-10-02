import { useState } from "react";

const initialState = () => {
    return -1;
};
const MyComponent = (props) => {

const [counter, setCounter] = useState(initialState);
const [isOpened, setIsCounter] =  useState(fase);

const handlerSetCounter = () => {
    setCounter(counter + 1);
}
}