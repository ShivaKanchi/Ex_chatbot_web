import React from "react";

const dashboard = () => {
    return (
        <div className="card">
            <div className="cardheader">
                Chatroom
            </div>
            <div className="cardbody">
                <div className="inputGroup">
                    <label htmlFor="chatRoomName">Chatroom Name :</label>
                    <input type="text" name="chatroomname" id="chatroomname" placeholder="Shiva " />
                </div>
                <button>Create Chatroom</button>
                <div className="chatrooms">
                    <div className="chatroom">
                        <div>NSK</div>
                        <div className="join"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default dashboard;