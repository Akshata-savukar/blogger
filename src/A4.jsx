import Blogger from "./blogger.json"
import "./A4.css"
function displayquotes(){
return (
    <>
   <div className="App">
      <h1 className='headingf'>Food Bloggers Quotes</h1>
      <div className='quotescontainer'>
        {Blogger.food_bloggers.map((blogger, index) => (
          <div key={index} className='contentblogger'>
            <p className='bloggerqute'>{blogger.quote}</p> <p className='bloggername'>{blogger.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
    </>
)
}

export default displayquotes