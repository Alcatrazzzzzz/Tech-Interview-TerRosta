import React, { useState } from "react";
import { AdressPageState } from "../types";
import { returnOptions } from "../utils/returnOptions";

interface AdressSearchProps {}

export const AdressSearch: React.FC<AdressSearchProps> = () => {
  const [value, setValue] = useState("");
  const [state, setState] = useState<AdressPageState>({
    data: null,
    loading: false,
    error: false,
  });

  return (
    <div className="adress">
      <h2>Поиск адрессов</h2>
      <p>Введите интересующий вас адрес</p>
      <div className="adress-search">
        <input
          className={`adress-search-input ${
            state.error ? "adress-search-input-error" : ""
          }`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Введите интересующий вас адрес"
        />
        <button
          onClick={() => {
            if (value.length > 2) {
              setState({ data: null, loading: true, error: false });
              fetch(
                "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
                returnOptions(value)
              )
                .then((res) => res.json())
                .then((result) => {
                  setState({ loading: false, data: result, error: false });
                })
                .catch(() => {
                  setState({ ...state, loading: false, error: true });
                });
            } else {
              setState({
                ...state,
                error: "Введите хотя бы 3 символа",
                data: null,
              });
            }
          }}
        >
          <img src="/icons/searchWhite.svg" alt="search icon" />
          <span>Поиск</span>
        </button>
      </div>
      {state.loading ? (
        <img className="adress-spinner" src="loader.gif" alt="loader spinner" />
      ) : null}
      {state.error ? <p className="adress-error-msg">{state.error}</p> : null}
      {state.data ? (
        <div className="adress-list">
          <h3>Адреса</h3>
          {state.data.suggestions.length > 0 ? (
            <ul>
              {state.data.suggestions.map((elem) => {
                return <li key={elem.value}>{elem.value}</li>;
              })}
            </ul>
          ) : (
            <p>Ничего не найдено</p>
          )}
        </div>
      ) : null}
    </div>
  );
};
