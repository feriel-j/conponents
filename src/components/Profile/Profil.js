import React from "react";
import { Profils } from "../Profils";

export const Profil = (props) => {
  return (
    <div>
      <h1 onClick={() => props.alertt(props.person.name)}>
        NAme:{props.person.name}
      </h1>
      <h1 onClick={() => props.alertt(props.person.bio)}>
        Bio:{props.person.bio}
      </h1>
      <h1>age:{props.person.age}</h1>
      {props.children}

      <Profils person={props.person} />
    </div>
  );
};
