// import React, { useState } from 'react';
// import { ChannelList, useChatContext } from 'stream-chat-react';
// import Cookies from 'universal-cookie';

// import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
// import ChatIcon from '../assets/chat.png'
// import LogoutIcon from '../assets/logout.png'

// const cookies = new Cookies();

// const SideBar = ({ logout }) => (
//     <div className="channel-list__sidebar">
//         <div className="channel-list__sidebar__icon1">
//             <div className="icon1__inner">
//                 <img src={ChatIcon} alt="Chat" width="30" />
//             </div>
//         </div>
//         <div className="channel-list__sidebar__icon2">
//             <div className="icon1__inner" onClick={logout}>
//                 <img src={LogoutIcon} alt="Logout" width="30" />
//             </div>
//         </div>
//     </div>
// );

// const CompanyHeader = () => (
//     <div className="channel-list__header">
//         <p className="channel-list__header__text">AccordChat</p>
//     </div>
// )

// const customChannelTeamFilter = (channels) => {
//     return channels.filter((channel) => channel.type === 'team');
// }

// const customChannelMessagingFilter = (channels) => {
//     return channels.filter((channel) => channel.type === 'messaging');
// }

// const ChannelListContent = ({ isCreating, setIsCreating, setCreateType, setIsEditing, setToggleContainer }) => {
//     const { client } = useChatContext();

//     const logout = () => {
//         cookies.remove("token");
//         cookies.remove('userId');
//         cookies.remove('username');
//         cookies.remove('fullName');
//         cookies.remove('avatarURL');
//         cookies.remove('hashedPassword');
//         cookies.remove('phoneNumber');

//         window.location.reload();
//     }

//     const filters = { members: { $in: [client.userID] } };

//     return (
//         <>
//             <SideBar logout={logout} />
//             <div className="channel-list__list__wrapper">
//                 <CompanyHeader />
//                 <ChannelSearch setToggleContainer={setToggleContainer} />
//                 <ChannelList 
//                     filters={filters}
//                     channelRenderFilterFn={customChannelTeamFilter}
//                     List={(listProps) => (
//                         <TeamChannelList 
//                             {...listProps}
//                             type="team"
//                             isCreating={isCreating}
//                             setIsCreating={setIsCreating}
//                             setCreateType={setCreateType} 
//                             setIsEditing={setIsEditing}
//                             setToggleContainer={setToggleContainer}
//                         />
//                     )}
//                     Preview={(previewProps) => (
//                         <TeamChannelPreview 
//                             {...previewProps}
//                             setIsCreating={setIsCreating}
//                             setIsEditing={setIsEditing}
//                             setToggleContainer={setToggleContainer}
//                             type="team"
//                         />
//                     )}
//                 />
//                 <ChannelList 
//                     filters={filters}
//                     channelRenderFilterFn={customChannelMessagingFilter}
//                     List={(listProps) => (
//                         <TeamChannelList 
//                             {...listProps}
//                             type="messaging"
//                             isCreating={isCreating}
//                             setIsCreating={setIsCreating}
//                             setCreateType={setCreateType} 
//                             setIsEditing={setIsEditing}
//                             setToggleContainer={setToggleContainer}
//                         />
//                     )}
//                     Preview={(previewProps) => (
//                         <TeamChannelPreview 
//                             {...previewProps}
//                             setIsCreating={setIsCreating}
//                             setIsEditing={setIsEditing}
//                             setToggleContainer={setToggleContainer}
//                             type="messaging"
//                         />
//                     )}
//                 />
//             </div>
//         </>
//     );
// }

// const ChannelListContainer = ({ setCreateType, setIsCreating, setIsEditing }) => {
//     const [toggleContainer, setToggleContainer] = useState(false);

//     return (
//         <>
//             <div className="channel-list__container">
//               <ChannelListContent 
//                 setIsCreating={setIsCreating} 
//                 setCreateType={setCreateType} 
//                 setIsEditing={setIsEditing} 
//               />
//             </div>

//             <div className="channel-list__container-responsive"
//                 style={{ left: toggleContainer ? "0%" : "-89%", backgroundColor: "#005fff"}}
//             >
//                 <div className="channel-list__container-toggle" onClick={() => setToggleContainer((prevToggleContainer) => !prevToggleContainer)}>
//                 </div>
//                 <ChannelListContent 
//                 setIsCreating={setIsCreating} 
//                 setCreateType={setCreateType} 
//                 setIsEditing={setIsEditing}
//                 setToggleContainer={setToggleContainer}
//               />
//             </div>
//         </>
//     )

// }

// export default ChannelListContainer;
import React, { useState } from 'react';
import { ChannelList, useChatContext } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';
import ChatIcon from '../assets/chat.png'
import LogoutIcon from '../assets/logout.png'

const cookies = new Cookies();

const SideBar = ({ logout, toggleContainer, setToggleContainer }) => {

     // Handle button click to toggle the sidebar manually
     const handleManualToggle = () => {
        setToggleContainer(prevToggle => !prevToggle);
    };
    
    
    return (
    
    <div className="channel-list__sidebar">
        {toggleContainer && (
          <button 
                    onClick={() => setToggleContainer(prevToggle => !prevToggle)}
                    style={{ cursor: "pointer", padding: "10px", color: "#fff", backgroundColor: "#1f4ac5", border: "#1f4ac5", fontFamily: "Montserrat, sans-serif" }}
                >
                    Close Sidebar
           </button>
        )}
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={ChatIcon} alt="Chat" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner" onClick={logout}>
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div>
)  ;
}

const CompanyHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">AccordChat</p>
    </div>
);

const customChannelTeamFilter = (channels) => {
    return channels.filter((channel) => channel.type === 'team');
};

const customChannelMessagingFilter = (channels) => {
    return channels.filter((channel) => channel.type === 'messaging');
};

const ChannelListContent = ({ 
    isCreating, 
    setIsCreating, 
    setCreateType, 
    setIsEditing, 
    toggleContainer, 
    setToggleContainer 
}) => {
    const { client } = useChatContext();

    const logout = () => {
        cookies.remove("token");
        cookies.remove('userId');
        cookies.remove('username');
        cookies.remove('fullName');
        cookies.remove('avatarURL');
        cookies.remove('hashedPassword');
        cookies.remove('phoneNumber');

        window.location.reload();
    };

    const filters = { members: { $in: [client.userID] } };

    return (
        <>
            <SideBar 
                logout={logout} 
                toggleContainer={toggleContainer} 
                setToggleContainer={setToggleContainer} 
            />
            <div className="channel-list__list__wrapper">
                <CompanyHeader />
                <ChannelSearch setToggleContainer={setToggleContainer} />
                <ChannelList 
                    filters={filters}
                    channelRenderFilterFn={customChannelTeamFilter}
                    List={(listProps) => (
                        <TeamChannelList 
                            {...listProps}
                            type="team"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType} 
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {...previewProps}
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                            type="team"
                        />
                    )}
                />
                <ChannelList 
                    filters={filters}
                    channelRenderFilterFn={customChannelMessagingFilter}
                    List={(listProps) => (
                        <TeamChannelList 
                            {...listProps}
                            type="messaging"
                            isCreating={isCreating}
                            setIsCreating={setIsCreating}
                            setCreateType={setCreateType} 
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                        />
                    )}
                    Preview={(previewProps) => (
                        <TeamChannelPreview 
                            {...previewProps}
                            setIsCreating={setIsCreating}
                            setIsEditing={setIsEditing}
                            setToggleContainer={setToggleContainer}
                            type="messaging"
                        />
                    )}
                />
            </div>
        </>
    );
};

const ChannelListContainer = ({ setCreateType, setIsCreating, setIsEditing }) => {
    const [toggleContainer, setToggleContainer] = useState(false);

    // Handle button click to toggle the sidebar manually
    const handleManualToggle = () => {
        setToggleContainer(prevToggle => !prevToggle);
    };

    return (
        <>
            <div className="channel-list__container">
                <ChannelListContent 
                    setIsCreating={setIsCreating} 
                    setCreateType={setCreateType} 
                    setIsEditing={setIsEditing} 
                    setToggleContainer={setToggleContainer} 
                    toggleContainer={toggleContainer}
                />
            </div>

            <div 
                className="channel-list__container-responsive"
                style={{
                    left: toggleContainer ? "0%" : "-89%", 
                    backgroundColor: "#005fff",
                    transition: "left 0.3s ease"
                }}
            >
                {/* <div 
                    className="channel-list__container-toggle" 
                    onClick={() => setToggleContainer(prevToggle => !prevToggle)}
                    style={{ cursor: "pointer", padding: "10px", color: "#fff" }}
                >
                    Close Sidebar
                </div> */}

                {/* Button to manually toggle the sidebar when it's out */}
                {!toggleContainer && (
                    <button 
                        className="sidebar-toggle-button"
                        onClick={handleManualToggle}
                        style={{
                            position: 'fixed', // Ensure the button is outside the collapsing sidebar
                            top: '60px',
                            left: '10px',
                            fontFamily: 'Montserrat, sans-serif',
                            backgroundColor: '#005fff',
                            border: '1px solid #005fff',
                            borderRadius: '5px',
                            padding: '5px 10px',
                            cursor: 'pointer',
                            color: 'white',
                            zIndex: '1000', // Ensure the button appears on top of other content
                          }}
                    >
                        Open Sidebar
                    </button>
                )}

                <ChannelListContent 
                    setIsCreating={setIsCreating} 
                    setCreateType={setCreateType} 
                    setIsEditing={setIsEditing}
                    setToggleContainer={setToggleContainer}
                    toggleContainer={toggleContainer}
                />
            </div>
        </>
    );
};

export default ChannelListContainer;