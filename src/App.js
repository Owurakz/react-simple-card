import React, { Component } from "react";
import Title from "./components/title";
import Description from "./components/description";
import Image from "./components/image";
import logo from "./images/Owuraku.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="Body">
        <Image img={logo} />
        <div className="Content">
          <Title title="Necessity is the mother of invention" />{" "}
          <Description
            sentence="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            ratione repudiandae quibusdam ad vel deserunt vitae saepe maxime
            perferendis. Accusamus facilis, officiis perspiciatis debitis beatae
            sequi laboriosam similique! Delectus, molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            ratione repudiandae quibusdam ad vel deserunt vitae saepe maxime
            perferendis. Accusamus facilis, officiis perspiciatis debitis beatae
            sequi laboriosam similique! Delectus, molestiae. "
          />
        </div>
      </div>
    );
  }
}

export default App;
