import React from "react";


const WhatsAppChatbot = () => {
  const whatsappNumber = "16127125099"; // Correct format (No '+', no '-')
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  

  return (
    <div style={styles.chatbotContainer}>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <div style={styles.chatbotButton}>
          <i className="fa-brands fa-whatsapp" style={styles.icon}></i>
        </div>
      </a>
    </div>
  );
};

const styles = {
  chatbotContainer: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: "1000",
  },
  chatbotButton: {
    width: "60px",
    height: "60px",
    backgroundColor: "#25D366",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
  },
  icon: {
    color: "white",
    fontSize: "30px",
  },
};

export default WhatsAppChatbot;
