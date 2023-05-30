import HomeChat from "./HomeChat";
import MessageChat from "./MessageChat";
import HelpChat from "./HelpChat";

const TabContent = ({activeTab}) => {
    if (activeTab === 'Home') {
        return <HomeChat />;
      } else if (activeTab === 'Mensaje') {
        return <MessageChat />;
      } else if (activeTab === 'Ayuda') {
        return <HelpChat/>;
      }
    
      return null;
}

export default TabContent