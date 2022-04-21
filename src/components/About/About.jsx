import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about_left">
        <div className="about_left_card bg"></div>
        <div className="about_left_card">
          <img
            className="about_img"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="about_img"
          />
        </div>
      </div>
      <div className="about_right">
        <h1 className="about_right_title">About Me</h1>
        <p className="about_right_sub">
            Full Stack Developer
        </p>
        <p className="about_right_desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est corporis quam facere sapiente sequi, iure repellat dolorem blanditiis, delectus, iste dicta laboriosam explicabo nesciunt nostrum! Quos, ratione blanditiis. Quo, quos. Omnis reiciendis voluptas modi provident optio tempore tempora sunt vitae harum maiores dolor impedit, dolorum aliquid aliquam laborum odio recusandae reprehenderit ipsa at incidunt culpa. Fugit quam ipsam delectus quisquam.
        </p>
      </div>
    </div>
  );
}

export default About;
