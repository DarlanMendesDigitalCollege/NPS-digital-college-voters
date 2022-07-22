import { signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import { auth } from "../../Api";
import "./index.css";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Api";

const Vote = ({ userId, setUserId, isAuth, setIsAuth }) => {
  const [vote, setVote] = useState('');

  const handleLogOut = () => {
    signOut(auth).then(() => {
      alert("Usuário deslogado com sucesso");
      setUserId('');
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    }).catch((error) => {
      alert("Ocorreu um erro:  ", error)
    });
  }
  const VoteUser = async () => {
    if (vote) {
      await setDoc(doc(db, "voteUser", userId), {
        vote: vote
      }).then((validated) => {
        alert(validated);
        handleLogOut();
      })
    } else { alert("Nenhuma nota selecionada, por favor, selecione uma nota") }


  }
  useEffect(() => {
    setUserId(localStorage.getItem("UserId"));

  }, [vote])

  return (
    <>
      {!isAuth ? <>Acesso negado você não logado </> :
        <div className="ContainerVote">
          <h2>Numa escala de 0 a 10, quanto você indicaria nossa escolar a um amigo ou familiar?</h2>
          <div className="buttons">
            <button type="radio" className="btn" name="vote" onClick={() => { setVote("1") }} >1</button>
            <button type="radio" className="btn" name="vote" onClick={() => { setVote("2") }}>2 </button>
            <button type="radio" className="btn" name="vote" onClick={() => { setVote("3") }}>3</button>
            <button type="radio" className="btn" name="vote" onClick={() => { setVote("4") }}>4</button>
            <button type="radio" className="btn" name="vote" onClick={() => { setVote("5") }}>5</button>
            <button type="radio" className="btn" name="vote" onClick={() => { setVote("6") }}>6</button>
            <button type="radio" className="btn" name="vote" onClick={() => { setVote("7") }}>7</button>
            <button type="radio" className="btn" name="vote" onClick={() => { setVote("8") }}>8</button>
            <button type="radio" className="btn" name="vote" onClick={() => { setVote("9") }}>9</button>
            <button type="radio" className="btn" name="vote" onClick={() => { setVote("10") }}>10</button>

          </div>
          <div className="button-vote" >
            <button onClick={VoteUser}>Votar</button>
          </div>

        </div>
      }
    </>

  );
}
export default Vote;