import React , {useEffect} from "react";
import "../css/preloader.css";
import { preLoaderAnim } from "../animations";

export default function Preloader(){

    useEffect(()=>{
        preLoaderAnim();
    },[]);

    return (
        <>
            <div className="preloader">
                <div className="texts-container">
                    <span>Developer, </span>
                    <span>Innovative, </span>
                    <span>Curator</span>
                </div>
            </div>
        </>
    )
}