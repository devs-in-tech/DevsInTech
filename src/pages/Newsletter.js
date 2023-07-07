const NewsletterComponent = () => {
  //   useEffect(() => {
  //     axios.get('http://localhost:5000/proxy', {
  //       params: {
  //         url: 'https://devsintech.hashnode.dev/newsletter'
  //       }
  //     })
  //       .then(response => {
  //         // Set the fetched newsletter content
  //         setNewsletterContent(response.data);
  //         console.log(response.data);
  //       })
  //       .catch(error => {
  //         // Handle errors
  //         console.error(error);
  //       });
  //   }, []);

  return (
    <div style={{ height: "100vh", overflow: "auto", width: "100%" }}>
      <style>
        {`
          html {
            overflow: auto;
        }
          
        html,
        body,
        div,
        iframe {
            margin: 0px;
            padding: 0px;
            height: 100%;
            border: none;
        }
          
        iframe {
            display: block;
            width: 100%;
            border: none;
            overflow-y: auto;
            overflow-x: hidden;
        }
        `}
      </style>
      <iframe
        src="new.html"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          scrolling: "no",
        }}
        title="Embedded HTML Page"
      ></iframe>
    </div>
  );
};

export default NewsletterComponent;
