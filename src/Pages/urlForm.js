//Displays video upload form and handles events related to form.
import React, {useState} from "react";
import "./urlForm.css"
import ActionBar from "../Components/actionBar";
import {useNavigate} from "react-router-dom";

const UrlForm = (props) =>{
    const [email] = useState(props.email)
    const [loggedIn] = useState(props.loggedIn);
    const [longUrl, setLongUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");

    console.log("UPLOAD FORM PROPS:" + email);

    const navigate = useNavigate();

    //Post API call to add clip to Clips SQL table.
    const onButtonClick = () =>{
        
    }

    //Checks if user is already logged in or not using local machine storage.

    return(
        <div id = "content">
            <ActionBar email = {email} loggedIn = {loggedIn}/>
            <form className = "url-form">
                <div className="inputs-container">
                    <h1 className="instructions">Paste Url Below</h1>
                    <input
                        type = "text"
                        className="url-input"
                        placeholder = "Enter Url"
                        value ={longUrl}
                        onChange={ev => setLongUrl(ev.target.value)}
                    />
                    <br/>
                    <input
                        type = "button"
                        id = "submit-button"
                        onClick={onButtonClick}
                        value = {"Shorten Url"}
                    />
                    <br/>
                    <h2 className = "result-url" value = {shortUrl}>placeholder</h2>
                </div>
                
            </form>
            </div>
        
    );
}

export default UrlForm;