import React, { useState } from "react";
import styles from "./calculotor.module.css";

function Calculator() {
  const [primary, setPrimary] = useState();
  const [second, setSecond] = useState();
  const [user, setUser] = useState(false);
  const [result, setResult] = useState("HI");
  const [view, setView] = useState(false);
  function handlepri(e) {
    setPrimary(parseFloat(e.target.value));
  }
  function handlesec(e) {
    setSecond(parseFloat(e.target.value));
  }

  function handleAdd() {
    let val = primary + second;
    setResult(val);
    setSecond(0);
    setPrimary(val);
    setView(false);
  }
  function handleSub() {
    let val = primary - second;
    setResult(val);
    setSecond(0);
    setPrimary(val);
    setView(false);
  }
  function handleDivide() {
    let val = primary / second;
    setResult(val);
    setSecond(0);
    setPrimary(val);
    setView(false);
  }
  function handleMultiply() {
    let val = primary * second;
    setResult(val);
    setSecond(0);
    setPrimary(val);
    setView(false);
  }
  function handleClick() {
    setUser(true);
  }
  function handleClick2() {
    setResult(result);
    setPrimary(result);
    setSecond(0);
    setUser(false);
    setView(true);
  }

  return (
    <div className={styles.container}>
      <div className={styles.inp}>
        <input
          type="number"
          onChange={handlepri}
          onClick={handleClick}
          placeholder="TYPE ONLY NUMBERSSSSSSS "
          value={primary}
          className={styles.prim}
        />
        {user && (
          <input
            type="number"
            onChange={handlesec}
            value={second}
            placeholder="TYPE ONLY NUMBERSSSSSSS "
            className={styles.prim}
          ></input>
        )}
      </div>

      {!view ? (
        <h1 className={styles.res}>{result}</h1>
      ) : (
        <p>Thanks for Choosing us. The Final Answer is {result}</p>
      )}
      <div className={styles.addsub}>
        <button className={styles.but} onClick={handleAdd}>+</button>
        <button className={styles.but} onClick={handleSub}>-</button>
      </div>
      <div className={styles.addsub}>
        <button className={styles.but} onClick={handleDivide}>/</button>
        <button className={styles.but} onClick={handleMultiply}>*</button>
      </div>
      
      <button className={styles.clear} onClick={handleClick2}>Clear</button>
    </div>
  );
}

export default Calculator;
