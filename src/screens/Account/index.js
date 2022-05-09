import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UserGuestScreen } from "./UserGuestScreen";
import { UserLoggedScreen } from "./UserLoggedScreen";
import { LoadingModal } from "./../../components/LoadingModal";

export const AccountScreen = () => {
  const [isLogged, setIsLogged] = useState(null);

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      setIsLogged(user ? true : false);
    });
  }, []);

  if (isLogged === null) {
    return <LoadingModal show text="Cargando..." />;
  }

  return isLogged ? <UserLoggedScreen /> : <UserGuestScreen />;
};
