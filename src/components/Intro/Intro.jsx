import "./Intro.css";

function Intro() {
  return (
    <div className='intro'>
     <div className="intro_left">
       <div className="intro_left_wrapper">
         <h2 className="intro_message">Hello, My name is</h2>
         <h1 className="intro_name">Mayank Rawat</h1>
         <div className="intro_title">
           <div className="intro_item">Full Stack Developer</div>
           </div>
         </div>
       </div>
     <div className="intro_right">
       <div className="intro_right_bg"></div>
       {/* <img className="intro_right_img" src={Me} alt="" /> */}
       </div>
    </div>
  )
}

export default Intro;
