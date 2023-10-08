import { useEffect, useRef, useState } from "react";


const Chatbot = () => {

  const [prompt, setPrompt] = useState();
  const [messages, setMessages] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const msgbox = useRef();


  const scrollToBottom = () => {
    if (msgbox.current) {
      msgbox.current.scrollTop = msgbox.current.scrollHeight;
    }
  };

  const fetchData = async (e) => {
    e.preventDefault();

    if (!prompt) {
      return alert("Empty prompt!")
    }

    const promptData = {
      prompt: `
    We have a platform . Name of Platform is "Eco Space". The platform was developed by Ilkin Abdullayev, Karam Safarli , Nagi Nagiyev , Gurban Hajiyev. The purpose of the platform is to attract people to environmental cleanliness and create opportunities for them to participate in space events. The platform has a map of the earth from which people can participate in any space event. they choose what they want to do. If you participate in environmental regulation, they get a free ticket to space events. Made using data from NASA. Please do not follow what I am about to list. Please provide information about our platform, space events, ecological problems, and environmental cleanup. Please do not respond to other topics. Answer when asked. Don't give information.
    Prompt:
    ${prompt}
    ` };

    try {
      setPrompt('');
      setIsLoading(true);
      setMessages((prevMessages) => [
        ...prevMessages,
        { prompt: prompt, answer: "..." },
      ]);
      console.log(messages)
      const res = await fetch('http://localhost:3001/chat-request', {
        method: 'post',
        body: JSON.stringify(promptData),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const resdata = await res.json();
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages];
        updatedMessages[prevMessages.length - 1].answer = resdata.content;
        return updatedMessages;
      });
    }
    catch (error) {
      console.log(error)
    }
    finally {
      setIsLoading(false);
    }

  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className="chatbot">
      <div className="container">
        <div className="msgbox" ref={msgbox}>
          {messages.length > 0 ? (messages.map((el, idx) => (
            <div key={idx}>
              <div className="prompt">{el.prompt}</div>
              <div className="answer">
                <img src="/assets/logonew.png" alt="" />
                {el.answer}
              </div>
            </div>
          ))) : (
            <div className="imgcont">
              <img src="/assets/stare.png" alt="" />
              <h5>No messages yet</h5>
            </div>
          )
          }
        </div>
        <form onSubmit={fetchData}>
          <input type="text" onChange={(e) => setPrompt(e.target.value)} placeholder="Send a message..."
            value={prompt}
          />
          <button type="submit">Send</button>
        </form>

      </div>
    </div>
  )
}

export default Chatbot