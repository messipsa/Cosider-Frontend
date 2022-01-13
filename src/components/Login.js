import React from "react";
import { Panel, FlexboxGrid, Input, InputGroup, Button, Loader } from "rsuite";
import { AiFillEye, AiFillEyeInvisible, AiOutlineMail } from "react-icons/ai";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const history = useHistory();
  const { path, url } = useRouteMatch();
  const [visible, setVisible] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loadingConnex, setLoadingConnex] = React.useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };

  const login = () => {
    setLoadingConnex(true);
    var data = JSON.stringify({
      email: email,
      password: password,
    });

    var config = {
      method: "post",
      url: "http://localhost:5000/api/user/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        localStorage.setItem("user", JSON.stringify(response.data));

        setLoadingConnex(false);
        alert("Connexion réussie");
        history.push("/home");
      })
      .catch(function (error) {
        setLoadingConnex(false);
        alert("Echec de la connexion");
      });
  };

  return (
    <Panel
      header="Se connecter"
      bordered
      style={{ marginRight: 450, marginTop: 120, marginLeft: 450 }}
    >
      <FlexboxGrid>
        <label style={{ margin: 10 }}>Email</label>
        <InputGroup>
          <InputGroup.Addon>
            {" "}
            <AiOutlineMail />
          </InputGroup.Addon>
          <Input
            onChange={(newValue) => {
              setEmail(newValue);
            }}
          />
        </InputGroup>
        <label style={{ margin: 10 }}>Mot de passe</label>
        <InputGroup inside>
          <Input
            type={visible ? "text" : "password"}
            onChange={(newValue) => {
              setPassword(newValue);
            }}
          />
          <InputGroup.Button onClick={handleChange}>
            {visible ? <AiFillEye /> : <AiFillEyeInvisible />}
          </InputGroup.Button>
        </InputGroup>

        <Button
          style={{ margin: 15, marginLeft: 240, width: 130 }}
          onClick={login}
          color="red"
          appearance="primary"
        >
          {!loadingConnex ? <p>Se Connecter</p> : <Loader />}
        </Button>
        <p style={{ marginLeft: 120, justifyContent: "center" }}>
          Si vous n'avez pas de compte veuillez vous{" "}
          <Link to="/register">inscrire ici</Link>
        </p>
      </FlexboxGrid>
    </Panel>
  );
};

export default Login;
