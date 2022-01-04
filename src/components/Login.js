import React from "react";
import { Panel, FlexboxGrid, Input, InputGroup, Button } from "rsuite";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  const { path, url } = useRouteMatch();
  const [visible, setVisible] = React.useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };

  const login = () => {
    history.push("/app");
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
          <InputGroup.Addon> @</InputGroup.Addon>
          <Input />
        </InputGroup>
        <label style={{ margin: 10 }}>Mot de passe</label>
        <InputGroup inside>
          <Input type={visible ? "text" : "password"} />
          <InputGroup.Button onClick={handleChange}>
            {visible ? <AiFillEye /> : <AiFillEyeInvisible />}
          </InputGroup.Button>
        </InputGroup>

        <Button style={{ margin: 15, marginLeft: 240 }} onClick={login}>
          Se Connecter
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
