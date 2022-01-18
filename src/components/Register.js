import React from "react";
import { Panel, FlexboxGrid, Input, InputGroup, Button, Loader } from "rsuite";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineUser,
  AiOutlineMail,
} from "react-icons/ai";
import axios from "axios";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

const Register = () => {
  const history = useHistory();
  const [visible, setVisible] = React.useState(false);
  const [pseudo, setPseudo] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loadingRegister, setLoadingRegister] = React.useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };

  const register = () => {
    setLoadingRegister(true);
    var data = JSON.stringify({
      userName: pseudo,
      email: email,
      password: password,
    });

    var config = {
      method: "post",
      url: "http://localhost:5000/api/user/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setLoadingRegister(false);
        swal("Utilisateur créé avec succès", "", "success");
        history.push("/");
      })
      .catch(function (error) {
        setLoadingRegister(false);
        swal("Echec de la création de compte", "", "error");
        console.log(error);
      });
  };

  return (
    <Panel
      header="S'inscrire"
      bordered
      style={{ marginRight: 450, marginTop: 120, marginLeft: 450 }}
    >
      <FlexboxGrid>
        <label style={{ margin: 10 }}>Nom d'utilisateur</label>
        <InputGroup>
          <InputGroup.Addon>
            {" "}
            <AiOutlineUser />
          </InputGroup.Addon>
          <Input
            onChange={(newValue) => {
              setPseudo(newValue);
            }}
          />
        </InputGroup>

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
          style={{ margin: 15, marginLeft: 240, width: 100 }}
          onClick={register}
          color="red"
          appearance="primary"
        >
          {!loadingRegister ? <p>S'inscrire</p> : <Loader />}
        </Button>
      </FlexboxGrid>
    </Panel>
  );
};

export default Register;
