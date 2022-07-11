import React from "react";
import styled from "styled-components";
import { useThemeMode } from "../Context/themeContext";
import { useForm } from "../Hooks/useForm";
import { NavLink } from "react-router-dom";
import Linkedin from "./ContactImg/linkedin.png";
import Twitter from "./ContactImg/Twitter-logo.png";
import GitHub from "./ContactImg/github.png";
import Instagram from "./ContactImg/instagram.png";

const initialForm = {
  name: "",
  surname: "",
  phone: "",
  textarea: "",
};

const validateForm = (form) => {
  let errors = {};
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "Por favor, introduzca un nombre";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "Solo puedes ingresar letras";
  }

  if (!form.surname.trim()) {
    errors.surname = "Por favor, introduzca un apellido";
  } else if (!regexName.test(form.surname.trim())) {
    errors.name = "Solo puedes ingresar letras";
  }

  if (!form.phone.trim()) {
    errors.phone = "Por favor, introduzca un número de celular";
  }

  if (!form.textarea.trim()) {
    errors.textarea = "Por favor, introduzca mensaje";
  } else if (!regexComments.test(form.surname.trim())) {
    errors.name = "Max caracteres: 255, excedió los 255.";
  }

  return errors;
};

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ value }) => (!value ? "rgb(18 26 44)" : "white")};
  transition: 0.5s;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70vw;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ value }) => (!value ? "rgb(70 84 126)" : "#8babff")};
  transition: 0.5s;

  @media (min-width: 1000px) {
    width: 50vw;
  }
`;

const Input = styled.input`
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #f6f6f6;
`;

const TextArea = styled.textarea`
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: rgb(231, 231, 231);
`;

const SectionContactMe = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  color: white;
`;

const InpuntSend = styled.input`
  padding: 10px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  color: white;
  background-color: ${({ isValue }) =>
    !isValue ? "rgb(30, 49, 104)" : "#2e58af"};
  transition: 0.5s;

  @media (min-width: 1000px) {
    cursor: pointer;
  }
`;

const H2 = styled.h2`
  color: ${({ value }) => (!value ? "white" : "#18191a")};
  transition: 0.5s;
`;

const Parragraph = styled.p`
  color: ${({ value }) => (!value ? "white" : "#3c3f41")};
  transition: 0.5s;
`;

const Errors = styled.p`
  color: rgb(188, 82, 82);
  letter-spacing: 1px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  margin: 5px;
  color: rgb(188, 82, 82);
  transition: 0.5s;
`;

const SectionReturn = styled.section`
  display: none;
  @media (min-width: 1000px) {
    display: block;
    width: 50vw;
    color: white;
  }
`;
const Return = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  border: 3px solid #3f3988;
  width: max-content;
`;

const SectionReturnMobile = styled.section`
  width: 70vw;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  @media (min-width: 1000px) {
    display: none;
  }
`;

const GoContactDesk = styled(NavLink)`
  text-decoration: none;
`;
const GoContact = styled(NavLink)`
  text-decoration: none;
  color: white;
  margin-top: 15px;
`;

const ContianerRedes = styled.section`
  background-color: rgb(70 84 126);
  width: 70vw;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  border-radius: 10px;
  margin-top: 15px;
  transition: 0.5s;

  @media (min-width: 1000px) {
    width: 50vw;
  }
`;
const ImgRedes = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 5px;
  @media (min-width: 1000px) {
    cursor: pointer;
    &&:hover {
      box-shadow: 0px 0px 10px 0px rgb(0, 0, 0);
      transition: 0.3s;
    }
  }
`;

const Contact = () => {
  const { theme } = useThemeMode();
  const { form, errors, handleChange, handleBlur, handleSubmit } = useForm(
    initialForm,
    validateForm
  );

  return (
    <>
      <Main value={theme}>
        <GoContactDesk to={"/"}>
          <SectionReturn>
            <Return>Volver</Return>
          </SectionReturn>
        </GoContactDesk>
        <Form onSubmit={handleSubmit} value={theme}>
          <SectionContactMe>
            <H2 value={theme}>Contactame</H2>
            <Parragraph value={theme}>Eniviame un correo</Parragraph>
          </SectionContactMe>

          <Input
            type={"text"}
            name="name"
            placeholder="Nombre"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.name}
            isValue={theme}
          />
          {errors.name && <Errors value={theme}>{errors.name}</Errors>}
          <Input
            type={"text"}
            name="surname"
            placeholder="Apellido"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.surname}
          />
          {errors.surname && <Errors>{errors.surname}</Errors>}
          <Input
            type={"number"}
            name="phone"
            placeholder="Celular"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.phone}
          />
          {errors.phone && <Errors>{errors.phone}</Errors>}

          <TextArea
            cols={20}
            rows={5}
            placeholder="ingresa un mensaje"
            onBlur={handleBlur}
            onChange={handleChange}
            name="textarea"
            value={form.textarea}
          ></TextArea>
          {errors.textarea && <Errors>{errors.textarea}</Errors>}

          <InpuntSend
            type={"submit"}
            value={"Envíar mensaje"}
            isValue={theme}
          />
        </Form>

        <ContianerRedes>
          <ImgRedes alt="Linkedin" src={Linkedin} />
          <ImgRedes alt="Twitter" src={Twitter} />
          <ImgRedes alt="GitHub" src={GitHub} />
          <ImgRedes alt="Instagram" src={Instagram} />
        </ContianerRedes>

        <GoContact to={"/"}>
          <SectionReturnMobile>
            <Return>Volver</Return>
          </SectionReturnMobile>
        </GoContact>
      </Main>
    </>
  );
};

export default Contact;
